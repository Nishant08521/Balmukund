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

    // Email credentials - can be overridden by environment variables
    const emailUser = process.env.EMAIL_USER || 'man.in.dev.16@gmail.com'
    const emailPassword = process.env.EMAIL_PASSWORD || 'olzk vzah iwne yyyj'
    const recipientEmail = process.env.CAREERS_EMAIL || process.env.CONTACT_EMAIL || 'nishnatkumarsingh0852@gmail.com'

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
      to: recipientEmail,
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

