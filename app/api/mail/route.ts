"use server";

import { transporter } from "@/configs/node_mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, full_name, company, body } = await req.json();

  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_APP_EMAIL,
      subject: "Hello ✔",
      text: `${body}`, // plain‑text body
      html: `<b>${full_name} has sent you an email, bruv</b>`, // HTML body
    });

    if (info.accepted) {
      console.log("Email sent succesfully");
      return NextResponse.json({ status: 200, message: "Email sent" });
    }
  } catch (error) {
    console.error("Error on server. Email not sent: ", error);
    return NextResponse.json({
      status: 500,
      message: "A server error occured while sending email",
    });
  }
}
