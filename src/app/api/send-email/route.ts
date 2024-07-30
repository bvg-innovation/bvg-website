import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function POST(req: Request) {
  try {
    const { userInfo, email, objectMessage, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL,
      replyTo: email,
      to: process.env.USER_EMAIL,
      subject: `${objectMessage} - ${userInfo}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return new NextResponse(JSON.stringify({ success: true }), {
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(JSON.stringify({ success: false }), {
      headers: corsHeaders,
    });
  }
}

export function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}
