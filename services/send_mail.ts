import { transporter } from "@/configs/node_mailer";

export const sendMail = async () => {
  try {
    const info = await transporter.sendMail({
      from: "billy@gmail.com",
      to: process.env.GMAIL_APP_EMAIL,
      subject: "Hello ✔",
      text: "Hellow, this is an email, bruv!", // plain‑text body
      html: "<b>Hi! This is an email!</b>", // HTML body
    });

    if (info.accepted) {
      console.log("Email sent succesfully");
    }
  } catch (error) {
    console.error("Unable to send email: ", error);
  }
};
