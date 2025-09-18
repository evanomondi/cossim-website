#!/bin/sh

echo "Starting application deployment..."

# Check if Prisma CLI is available
echo "Checking Prisma CLI availability..."
if ! command -v prisma &> /dev/null; then
    echo "ERROR: Prisma CLI not found!"
    exit 1
fi

prisma --version

# Test database connection
echo "Testing database connection..."
echo "SELECT 1;" | prisma db execute --stdin --schema=prisma/schema.prisma || {
    echo "WARNING: Database connection test failed, but continuing..."
}

# Run Prisma migrations
echo "Running Prisma migrations..."
prisma migrate deploy

MIGRATION_EXIT_CODE=$?
if [ $MIGRATION_EXIT_CODE -eq 0 ]; then
    echo "Migrations completed successfully"
else
    echo "ERROR: Migration failed with exit code $MIGRATION_EXIT_CODE"
    echo "Attempting to check migration status..."
    prisma migrate status || echo "Could not check migration status"
    echo "Continuing with application start despite migration failure..."
fi

# Start the Next.js application
echo "Starting Next.js application..."
exec node server.js