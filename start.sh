#!/bin/sh

echo "Starting application deployment..."

# Aggressive cleanup to free disk space
echo "Cleaning up disk space..."
rm -rf /tmp/* 2>/dev/null || true
rm -rf /var/tmp/* 2>/dev/null || true
rm -rf ~/.npm 2>/dev/null || true
rm -rf ~/.cache 2>/dev/null || true
find /app -name "node_modules" -type d -not -path "/app/node_modules" -exec rm -rf {} + 2>/dev/null || true
find /app -name ".next" -type d -not -path "/app/.next" -exec rm -rf {} + 2>/dev/null || true

# Clear package manager caches
pnpm store prune 2>/dev/null || true
npm cache clean --force 2>/dev/null || true

echo "Disk cleanup completed"

# Run Prisma migrations
echo "Running Prisma migrations..."
prisma migrate deploy

if [ $? -eq 0 ]; then
    echo "Migrations completed successfully"
else
    echo "Migration failed, but continuing with application start..."
fi

# Start the Next.js application
echo "Starting Next.js application..."
exec node server.js