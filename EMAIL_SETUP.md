# Email Setup Instructions

## Current Status
The website currently uses a `mailto:` link for the contact form, which opens the user's default email client. This is a temporary solution.

## For Production: Recommended Email Services

### Option 1: Formspree (Easiest)
1. Sign up at https://formspree.io
2. Create a new form endpoint
3. Update the form action in `Contact.jsx`:
```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS (Good for complex forms)
1. Sign up at https://www.emailjs.com
2. Create an email template
3. Install emailjs: `npm install @emailjs/browser`
4. Replace form submission with EmailJS API calls
5. Handle file uploads for job applications

### Option 3: Custom Backend
Set up a backend API (Node.js/Express, Python/Flask, etc.) that:
1. Receives form data
2. Handles file uploads
3. Sends emails via SMTP or email service (SendGrid, AWS SES, etc.)
4. Sends to: ritvikshah2009@gmail.com

## Job Application Forms
Job applications require special handling for file uploads. Options:
- **Formspree** (supports file uploads)
- **EmailJS** (limited file size)
- **Custom backend** (recommended for production)

## Implementation Notes
- Contact form: Currently uses mailto:ritvikshah2009@gmail.com
- Job applications: Show alert on submit (no actual email sent yet)
- Both need proper email service integration before going live
