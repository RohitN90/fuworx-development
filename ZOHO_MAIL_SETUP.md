# Zoho Mail Setup Guide

## Overview
The contact form now sends emails via Zoho Mail using Nodemailer. Both admin notifications and user confirmations are sent.

## Setup Steps

### 1. Create `.env.local` File
Copy the environment template and add your Zoho credentials:

```bash
# Copy the example file
cp .env.local.example .env.local
```

### 2. Get Zoho Mail SMTP Credentials

1. **Log in to Zoho Mail** (https://mail.zoho.com)
2. Go to **Settings** → **Account**
3. Under **Security**, enable **Generate App Specific Password**
4. Create a new app password for this application
5. Copy your credentials:
   - **Host:** `smtp.zoho.com`
   - **Port:** `465` (SSL)
   - **Email:** Your Zoho email address
   - **Password:** Your app-specific password

### 3. Update `.env.local`

Replace the placeholder values with your actual Zoho credentials:

```env
ZOHO_MAIL_HOST=smtp.zoho.com
ZOHO_MAIL_PORT=465
ZOHO_MAIL_USER=your-zoho-email@yourdomain.com
ZOHO_MAIL_PASSWORD=your-app-specific-password
ZOHO_MAIL_FROM=your-zoho-email@yourdomain.com
CONTACT_EMAIL_RECIPIENT=info@fuworx.com
```

### 4. Files Created/Modified

- **`lib/mailConfig.ts`** - Nodemailer transporter configuration for Zoho Mail
- **`app/api/contact/route.ts`** - Updated API route with email sending logic
- **`.env.local.example`** - Environment variables template

## How It Works

1. **User submits form** → Validation in client-side component
2. **API receives request** → Server-side validation
3. **Two emails are sent:**
   - **Admin Email:** To your business email with all submission details
   - **User Email:** Confirmation to the user's provided email address

## Email Features

✅ Professional HTML email templates with Fuworx branding
✅ Admin receives: Name, email, phone, message
✅ User receives: Confirmation with their submission summary
✅ Error handling and logging
✅ Environment-based configuration

## Testing Locally

1. Add your Zoho credentials to `.env.local`
2. Run the development server: `npm run dev`
3. Fill out and submit the contact form
4. Check your email inbox for both the admin and confirmation emails

## Troubleshooting

**Error: "Email service is not configured"**
- Make sure `.env.local` file exists with all required variables
- Restart the dev server after changing environment variables

**Error: "Invalid login credentials"**
- Verify your Zoho email and app-specific password
- Make sure you generated an app-specific password (not your account password)
- Check that your Zoho account has SMTP enabled

**Emails not sending**
- Check console logs in terminal for error details
- Verify firewall isn't blocking port 465
- Ensure Zoho Mail account is active

## Additional Notes

- **Security:** Never commit `.env.local` to version control (it's in `.gitignore`)
- **Sender:** Emails are sent from your Zoho email address
- **Rate Limiting:** Consider implementing rate limiting for production
- **Production:** Make sure to use production Zoho credentials when deploying
