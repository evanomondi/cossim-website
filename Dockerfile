# Use the official Node.js 18 image as base
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
# Copy Prisma schema before installing dependencies (needed for postinstall script)
COPY prisma ./prisma
RUN npm install -g pnpm && pnpm install --frozen-lockfile && \
    # Clean up after dependency installation
    pnpm store prune && \
    rm -rf ~/.npm ~/.cache /tmp/* /var/tmp/* && \
    # Remove unnecessary files from node_modules
    find node_modules -name "*.md" -delete 2>/dev/null || true && \
    find node_modules -name "*.txt" -delete 2>/dev/null || true && \
    find node_modules -name "test" -type d -exec rm -rf {} + 2>/dev/null || true && \
    find node_modules -name "tests" -type d -exec rm -rf {} + 2>/dev/null || true && \
    find node_modules -name "docs" -type d -exec rm -rf {} + 2>/dev/null || true

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production 

# Build the application
RUN npm install -g pnpm && pnpm build && \
    # Clean up after build to free space
    rm -rf ~/.npm ~/.cache /tmp/* /var/tmp/* && \
    # Remove source files that are no longer needed
    rm -rf components/charts components/forms components/modals && \
    rm -rf content/blog content/guides && \
    # Keep only essential files for runtime
    find . -name "*.log" -delete 2>/dev/null || true && \
    find . -name ".DS_Store" -delete 2>/dev/null || true

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install pnpm and Prisma CLI globally for migrations
RUN npm install -g pnpm prisma && \
    # Clean up package manager caches and temporary files
    rm -rf ~/.npm ~/.cache /tmp/* /var/tmp/* && \
    # Remove any leftover build artifacts
    find /app -name "*.log" -delete 2>/dev/null || true && \
    find /app -name ".DS_Store" -delete 2>/dev/null || true

# Copy public directory in smaller chunks to manage disk space
COPY --from=builder /app/public/favicon.ico ./public/
COPY --from=builder /app/public/site.webmanifest ./public/
RUN mkdir -p ./public/_static && \
    # Aggressive cleanup before copying static assets
    rm -rf /tmp/* /var/tmp/* ~/.npm ~/.cache 2>/dev/null || true && \
    # Remove any Docker layer cache
    find /var/lib/docker -type f -name "*.log" -delete 2>/dev/null || true && \
    # Force garbage collection
    sync && echo 3 > /proc/sys/vm/drop_caches 2>/dev/null || true
COPY --from=builder /app/public/_static ./public/_static

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma files for migrations
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# Create minimal package.json for Prisma only
RUN echo '{"dependencies":{"prisma":"^5.17.0","@prisma/client":"6.16.2"}}' > package.json

# Install only Prisma CLI and client for migrations (much smaller)
RUN pnpm install --prod && \
    # Clean up package manager caches and temporary files
    pnpm store prune && \
    rm -rf ~/.npm ~/.cache /tmp/* /var/tmp/* && \
    # Remove any leftover build artifacts
    find /app -name "*.log" -delete 2>/dev/null || true && \
    find /app -name ".DS_Store" -delete 2>/dev/null || true

# Copy startup script
COPY --chown=nextjs:nodejs start.sh /app/start.sh
RUN chmod +x /app/start.sh

USER nextjs

EXPOSE 80

ENV PORT 80
ENV HOSTNAME "0.0.0.0"

CMD ["/app/start.sh"]
