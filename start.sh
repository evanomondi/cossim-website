#!/bin/sh

echo "Starting application deployment..."

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