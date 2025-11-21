import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address } = body

    // Validate required fields
    if (!name || !email) {
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

    // Create transporter
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
      to: process.env.CAREERS_EMAIL || process.env.CONTACT_EMAIL || 'nishantkumarsingh0852@gmail.com',
      subject: `Career Application: ${name}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to submit application', details: error.message },
      { status: 500 }
    )
  }
}

