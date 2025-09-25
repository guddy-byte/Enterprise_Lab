import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { firstName, lastName, email, company, message } = await request.json();

  // Configure your SMTP transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    host: 'smtp.yourprovider.com',
    port: 587,
    auth: {
      user: 'your_smtp_user',
      pass: 'your_smtp_password',
    },
  });

  await transporter.sendMail({
    from: '"Enterprise Lab Website" <no-reply@elabconsult.com>',
    to: ['info@elabconsult.com', 'idowugudness@gmail.com'],
    subject: 'New Contact Form Submission',
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Message: ${message}
    `,
  });

  return NextResponse.json({ success: true });
}