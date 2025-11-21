# Email Setup Instructions

## Configuration Steps

1. **Create a `.env.local` file** in the root directory of your project

2. **Add the following environment variables:**

```env
EMAIL_USER=nishantkumarsingh0852@gmail.com
EMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=nishantkumarsingh0852@gmail.com
CAREERS_EMAIL=nishantkumarsingh0852@gmail.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Step Verification** on your Google Account
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other" as the device and name it "Balmukund Website"
   - Copy the generated 16-character password
   - Use this password as `EMAIL_PASSWORD` in your `.env.local` file

3. **Update your `.env.local` file:**
   ```env
   EMAIL_USER=nishantkumarsingh0852@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # The 16-character app password
   CONTACT_EMAIL=nishantkumarsingh0852@gmail.com
   CAREERS_EMAIL=nishantkumarsingh0852@gmail.com
   ```

## Alternative Email Services

If you're not using Gmail, you can configure other email services by modifying the transporter in:
- `app/api/contact/route.ts`
- `app/api/careers/route.ts`

### Example for other SMTP services:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-email-provider.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})
```

## Testing

After setting up, test the forms:
1. Fill out the contact form at `/contact`
2. Fill out the careers form at `/careers`
3. Check your email inbox for the submissions

## Security Notes

- Never commit `.env.local` to version control
- Keep your app passwords secure
- Consider using environment variables in your hosting platform (Vercel, Netlify, etc.)

