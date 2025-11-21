import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email credentials
    const emailUser = process.env.EMAIL_USER || 'nishantkumarsingh0852@gmail.com'
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailPassword) {
      return NextResponse.json(
        { error: 'Email configuration error: EMAIL_PASSWORD is not set. Please configure your .env.local file with your Gmail App Password.' },
        { status: 500 }
      )
    }

    // Create transporter (using Gmail as example - you'll need to configure this)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    // Email content
    const mailOptions = {
      from: emailUser,
      to: process.env.CONTACT_EMAIL || 'nishantkumarsingh0852@gmail.com', // Your receiving email
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}

