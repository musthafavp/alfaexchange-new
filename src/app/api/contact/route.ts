import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  
  // Yahoo Mail requires that the "from" address matches your Yahoo email
  const yahooEmail = process.env.SMTP_USER; // This should be ae_it@yahoo.com
  
  // Create a transporter with Yahoo Mail SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true, // Use SSL/TLS
    auth: {
      user: yahooEmail,
      pass: process.env.SMTP_PASS, // Your Yahoo app password
    },
    debug: true, // Enable for detailed logging
  });
  
  // Configure email content
  const mailOptions = {
    from: yahooEmail, 
    to:'csd@alfaexchange.com', 
    subject: `Contact Form: ${data.subject}`,
    text: `
    Name: ${data.name}
    Phone: ${data.phone || 'Not provided'}
    Reference: ${data.ref || 'Not provided'}
    Email: ${data.email}
    Subject: ${data.subject}
    ${data.description}
    `,

  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    
    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId
    });
  } catch (error:any) {
    console.error("Email error details:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send email", 
        details: error.message,
        code: error.code,
        responseCode: error.responseCode,
        response: error.response
      },
      { status: 500 }
    );
  }
}