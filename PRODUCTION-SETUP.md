# Production Deployment Setup

## Critical Environment Variables for Production

### 1. NextAuth Configuration

**NEXTAUTH_URL** (Required)
- Set this to your production domain URL
- Example: `NEXTAUTH_URL=https://new.cossim.co.ke`
- This prevents the "UntrustedHost" error in production

**AUTH_SECRET** (Required)
- Generate a secure random string
- Use: `openssl rand -base64 32`
- Keep this secret and never expose it

### 2. Application URL

**NEXT_PUBLIC_APP_URL** (Required)
- Set to your production domain
- Example: `NEXT_PUBLIC_APP_URL=https://new.cossim.co.ke`
- Used for client-side redirects and API calls

### 3. Database Configuration

**DATABASE_URL** (Required)
- Your production database connection string
- Example: `postgres://user:password@host:port/database?sslmode=require`

### 4. Email Configuration (Optional but Recommended)

**RESEND_API_KEY** (Optional)
- Your Resend API key for sending emails
- Format: `re_xxxxxxxxxx`
- If not provided, email authentication will be disabled

**EMAIL_FROM** (Optional)
- The sender email address
- Example: `"Your App <noreply@yourdomain.com>"`

## Common Production Issues

### UntrustedHost Error
```
[auth][error] UntrustedHost: Host must be trusted. URL was: `https://new.cossim.co.ke/api/auth/session.`
```

**Solution:**
1. Set `NEXTAUTH_URL=https://new.cossim.co.ke` in your production environment
2. Ensure the URL matches exactly (no trailing slash)
3. Verify the environment variable is loaded correctly

### Email Template Errors
```
Error: Objects are not valid as a React child
```

**Solution:**
- Ensure you're using the latest deployment with the fixed email template
- The email template should only use `@react-email/components`
- No custom React components should be used in email templates

## Deployment Checklist

- [ ] Set `NEXTAUTH_URL` to production domain
- [ ] Set `NEXT_PUBLIC_APP_URL` to production domain  
- [ ] Configure `AUTH_SECRET` with secure random string
- [ ] Set up production database with `DATABASE_URL`
- [ ] Configure email provider (Resend) if needed
- [ ] Test authentication flow after deployment
- [ ] Verify email sending functionality

## Environment Variable Template for Production

```bash
# Production Environment Variables
NEXTAUTH_URL=https://new.cossim.co.ke
NEXT_PUBLIC_APP_URL=https://new.cossim.co.ke
AUTH_SECRET=your-secure-random-string-here
DATABASE_URL=your-production-database-url
RESEND_API_KEY=re_your-resend-api-key
EMAIL_FROM="Your App <noreply@yourdomain.com>"
```

## Troubleshooting

1. **Check environment variables are loaded**: Add logging to verify variables are set
2. **Verify domain configuration**: Ensure NEXTAUTH_URL matches your actual domain
3. **Check deployment logs**: Look for any configuration errors during startup
4. **Test locally with production URLs**: Use production URLs in local development to test