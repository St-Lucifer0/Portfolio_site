# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Your Code
1. Create a `.env` file in your project root
2. Add your EmailJS credentials:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Update `src/components/Contact.tsx` and replace the placeholder values:
   - Replace `YOUR_PUBLIC_KEY` with `import.meta.env.VITE_EMAILJS_PUBLIC_KEY`
   - Replace `YOUR_SERVICE_ID` with `import.meta.env.VITE_EMAILJS_SERVICE_ID`
   - Replace `YOUR_TEMPLATE_ID` with `import.meta.env.VITE_EMAILJS_TEMPLATE_ID`

## Step 6: Test Your Form
1. Start your development server: `npm run dev`
2. Fill out the contact form and submit
3. Check your email for the message
4. Verify the success/error messages work correctly

## Important Notes
- EmailJS free plan allows 200 emails per month
- Keep your credentials secure and never commit them to version control
- Test thoroughly before deploying to production