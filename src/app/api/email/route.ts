import { EmailTemplateProps } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export async function POST(request: NextRequest) {
  const {
    name,
    email: userEmail,
    message,
  } = (await request.json()) as EmailTemplateProps;

  try {
    const data = await transporter.sendMail({
      from: email,
      to: email,
      text: `Name: ${name}, \nEmail: ${userEmail} \nMessage: ${message}`,
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
