# Caprover Deployment Guide

This guide will help you deploy the Cossim website to a Caprover server.

## Prerequisites

1. A running Caprover server
2. Caprover CLI installed (`npm install -g caprover`)
3. Access to your Caprover dashboard

## Deployment Steps

### 1. Login to Caprover
```bash
caprover login
```

### 2. Create a new app in Caprover
- Go to your Caprover dashboard
- Click "Apps" → "One-Click Apps/Databases"
- Create a new app (e.g., "cossim-website")

### 3. Configure Environment Variables

In your Caprover app settings, add the following environment variables:

#### Required Environment Variables:
```
NODE_ENV=production
NEXTAUTH_URL=https://your-app-name.your-caprover-domain.com
NEXTAUTH_SECRET=your-nextauth-secret-key
DATABASE_URL=your-database-connection-string
STRIPE_API_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
STRIPE_PRO_MONTHLY_PLAN_ID=your-stripe-plan-id
RESEND_API_KEY=your-resend-api-key
ADMIN_EMAIL=your-admin-email@domain.com
```

#### Optional Environment Variables:
```
NEXT_TELEMETRY_DISABLED=1
ANALYZE=false
```

### 4. Deploy the Application

From your project root directory:

```bash
# Build and deploy to Caprover
caprover deploy

# Or if you want to specify the app name
caprover deploy --appName cossim-website
```

### 5. Configure Domain (Optional)

1. In Caprover dashboard, go to your app
2. Click "HTTP Settings"
3. Add your custom domain
4. Enable HTTPS
5. Force HTTPS redirect

### 6. Database Setup

If using PostgreSQL:
1. Create a PostgreSQL database in Caprover
2. Update the DATABASE_URL environment variable
3. Run database migrations:
   ```bash
   # SSH into your app container or run locally with production DB
   npx prisma migrate deploy
   npx prisma generate
   ```

## Files Included for Deployment

- `Dockerfile` - Multi-stage Docker build configuration
- `captain-definition` - Caprover deployment configuration
- `next.config.js` - Configured with standalone output for Docker
- `.dockerignore` - Optimized for smaller Docker images

## Troubleshooting

### Common Issues:

1. **Build Failures**: Check that all environment variables are set
2. **Database Connection**: Ensure DATABASE_URL is correct and database is accessible
3. **Image Loading**: Verify that image domains are configured in next.config.js
4. **Authentication**: Check NEXTAUTH_URL and NEXTAUTH_SECRET

### Logs:
```bash
# View app logs
caprover logs --appName cossim-website
```

## Post-Deployment Checklist

- [ ] Verify the website loads correctly
- [ ] Test user authentication
- [ ] Check database connectivity
- [ ] Verify Stripe integration
- [ ] Test email functionality
- [ ] Confirm all images load properly
- [ ] Test responsive design on mobile

## Security Notes

- Always use HTTPS in production
- Keep environment variables secure
- Regularly update dependencies
- Monitor application logs
- Set up proper backup procedures for your database

## Support

For deployment issues, check:
1. Caprover documentation: https://caprover.com/docs/
2. Next.js deployment guide: https://nextjs.org/docs/deployment
3. Application logs in Caprover dashboard