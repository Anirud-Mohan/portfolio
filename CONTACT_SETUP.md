# Contact Form Setup Guide

Your portfolio now has a fully functional contact form that can send emails directly to you. Here are two options to make it work:

## Option 1: EmailJS (Recommended for GitHub Pages)

EmailJS is the easiest option and works perfectly with static deployments like GitHub Pages.

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (100 emails/month free)

2. **Add Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template structure:
   ```
   Subject: Portfolio Contact: {{subject}}
   
   From: {{user_name}}
   Email: {{user_email}}
   
   Message:
   {{message}}
   ```

4. **Get Your Keys**
   - Service ID: Found in "Email Services"
   - Template ID: Found in "Email Templates"
   - Public Key: Found in "Account" -> "General"

5. **Add Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Option 2: Gmail SMTP (Server-side)

This option uses server-side email sending but won't work with GitHub Pages static deployment.

### Setup Steps:

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Security -> 2-Step Verification
   - Turn on 2-Step Verification

2. **Generate App Password**
   - In Security settings, go to "App passwords"
   - Generate a new app password for "Mail"
   - Use this password (not your regular Google password)

3. **Add Environment Variables**
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   CONTACT_EMAIL=your-email@gmail.com
   ```

## Features Included:

✅ **Form Validation** - All fields are required and email format is validated
✅ **Loading States** - Shows spinner while sending
✅ **Error Handling** - Displays helpful error messages
✅ **Success Feedback** - Confirmation message when sent successfully
✅ **Fallback to Mailto** - If EmailJS fails, opens default email client
✅ **Responsive Design** - Works on all device sizes
✅ **Smooth Animations** - Beautiful hover and focus effects
✅ **Accessibility** - Proper labels and keyboard navigation

## Testing

1. **Local Development**
   - Run `npm run dev`
   - Navigate to the contact section
   - Fill out and submit the form
   - Check your email for the message

2. **Production Deployment**
   - For GitHub Pages: EmailJS will work automatically
   - For server deployments: Both options will work

## Troubleshooting

- **EmailJS not working**: Check your Service ID, Template ID, and Public Key
- **Gmail SMTP not working**: Verify your app password is correct
- **Form not submitting**: Check browser console for errors
- **Not receiving emails**: Check spam folder

## Customization

You can customize the email templates, styling, and validation rules by editing:
- `/app/components/Contact.tsx` - Main contact form
- `/app/api/contact/route.ts` - Server-side email handling (if using Gmail SMTP)

The contact form is now ready to receive messages from visitors to your portfolio!
