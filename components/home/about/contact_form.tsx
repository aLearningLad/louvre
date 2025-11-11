"use client";

import Lottie from "lottie-react";
import React, { ChangeEvent, useState } from "react";
import { TiTick } from "react-icons/ti";
import lottieLoading from "@/public/assets/emailLottie.json";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [full_name, set_full_name] = useState<string>("");
  const [company, set_company] = useState<string>("");
  const [email, set_email] = useState<string>("");
  const [body, set_body] = useState<string>("");
  const [is_consented, set_is_consented] = useState<boolean>(false);
  const [is_loading, set_is_loading] = useState<boolean>(false);

  const handleSend = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (full_name.length < 3) {
      toast.error("Please provide your name");
      return;
    }

    if (email.length < 5 || !email.includes("@")) {
      toast.error("Please provide a valid email address");
      return;
    }

    if (company.length < 3) {
      toast.error("Please provide a company name.");
      return;
    }

    if (body.length < 10) {
      toast.error("Please provide more detail in your email");
      return;
    }

    set_is_loading(true);
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          email,
          full_name,
          company,
          body,
        }),
      });

      if (res.status === 400) {
        toast.error("Unable to send email. Please try again");
      }
      set_is_loading(false);

      toast.success("Email sent");
    } catch (error) {
      console.error("Unable to send email: ", error);
      set_is_loading(false);
    } finally {
      set_email("");
      set_full_name("");
      set_body("");
      set_company("");
    }
  };

  if (!is_loading) {
    return (
      <form className=" w-full px-2 lg:w-10/12 h-[85%] items-center lg:items-start justify-around flex flex-col">
        {/* full name -> mandatory */}
        <div className=" w-full h-fit flex flex-col items-start text-start">
          <label className=" flex gap-[1px] items-center" htmlFor="full_name">
            <p className=" text-[12px]">FULL NAME</p>
            <p className=" text-[20px] text-red-600">*</p>
          </label>
          <input
            name="full_name"
            type="text"
            placeholder="Eg. Tom Featherington"
            className=" w-full focus:outline-none focus:scale-95 transition-all duration-300 ease-in-out px-3 text-[14px] lg:text-[12px] placeholder:text-neutral-300 h-10 rounded-[6px] bg-neutral-100/10 "
            value={full_name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              set_full_name(e.target.value)
            }
          />
        </div>

        {/* company -> optional */}
        <div className=" w-full h-fit flex flex-col items-start text-start">
          <label className=" flex gap-[1px] items-center" htmlFor="company">
            <p className=" text-[12px]">COMPANY NAME</p>
            <p className=" text-[20px] text-red-600">*</p>
          </label>
          <input
            name="company"
            type="text"
            placeholder="Eg. Wayne Enterprises Inc."
            className=" w-full focus:outline-none focus:scale-95 transition-all duration-300 ease-in-out px-3 text-[14px] lg:text-[12px] placeholder:text-neutral-300 h-10 rounded-[6px] bg-neutral-100/10 "
            value={company}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              set_company(e.target.value)
            }
          />
        </div>

        {/* email -> mandatory */}
        <div className=" w-full h-fit flex flex-col items-start text-start">
          <label className=" flex gap-[1px] items-center" htmlFor="email">
            <p className=" text-[12px]">EMAIL</p>
            <p className=" text-[20px] text-red-600">*</p>
          </label>
          <input
            name="email"
            type="text"
            placeholder="Eg. masterwayne@batman.com"
            className=" w-full focus:outline-none focus:scale-95 transition-all duration-300 ease-in-out px-3 text-[14px] lg:text-[12px] placeholder:text-neutral-300 h-10 rounded-[6px] bg-neutral-100/10 "
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              set_email(e.target.value)
            }
          />
        </div>

        {/* body -> mandatory */}
        <div className=" w-full h-fit flex flex-col items-start text-start">
          <label className=" flex gap-[1px] items-center" htmlFor="full_name">
            <p className=" text-[12px]">{"LET'S"} BUILD</p>
            <p className=" text-[20px] text-red-600">*</p>
          </label>
          <textarea
            name="full_name"
            placeholder="Eg. Mate, I need you to build me a Netflix replica. But for kitten videos. Stay with me now . . ."
            className=" w-full py-5 focus:outline-none focus:scale-95 transition-all duration-300 ease-in-out px-3 text-[14px] lg:text-[12px] placeholder:text-neutral-300 h-full rounded-[6px] bg-neutral-100/10 "
            value={body}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              set_body(e.target.value)
            }
          />
        </div>
        <div className=" w-full h-14 flex items-start gap-3">
          <button
            type="button"
            onClick={() => set_is_consented((prev) => !prev)}
            className=" w-[12px] h-[12px] rounded-[2px] flex justify-center items-center bg-pink-700 "
          >
            {is_consented && <TiTick color="white" size={10} />}
          </button>
          <p className="text-[10px] w-9/12">
            I consent to my information being used so Thato can respond to my
            message.
          </p>
          <button
            disabled={!is_consented}
            onClick={handleSend}
            className={`h-16 lg:h-10 hover:scale-95 transition-all duration-300  cursor-pointer ${
              is_consented
                ? "brightness-100 hover:bg-white hover:text-black"
                : "brightness-50"
            } bg-pink-700 text-white text-[12px] w-3/12 rounded-[6px] flex justify-center items-center`}
          >
            Send Message
          </button>
        </div>
        <div className=" w-full flex justify-start h-fit">
          <button className=" w-fit cursor-pointer h-10 rounded-[6px] bg-neutral-950/70 hover:scale-95 transition-all duration-300 ease-in-out px-7 text-[14px] fex justify-center items-center text-white hover:bg-black">
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className=" w-full px-2 lg:w-10/12 h-[85%] items-center justify-center flex flex-col">
      <Lottie animationData={lottieLoading} className=" w-32 h-32" />
      <h4 className=" text-2xl">Just a second...</h4>
      <p className=" text-[14px]">{"We're"} processing your email</p>
    </div>
  );
};

export default ContactForm;
