"use server";

import { transporter } from "@/configs/node_mailer";

export const sendMail = async (
  message: string,
  email: string,
  full_name: string,
  company_name: string
) => {
  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_APP_EMAIL,
      subject: "Hello ✔",
      text: `${full_name} from ${company_name} has sent you an email, bruv`, // plain‑text body
      html: `<b>${full_name} has sent you an email, bruv</b>`, // HTML body
    });

    if (info.accepted) {
      console.log("Email sent succesfully");
      return 200;
    }
  } catch (error) {
    console.error("Unable to send email: ", error);
    return 400;
  }
};
