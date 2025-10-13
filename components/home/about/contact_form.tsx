"use client";

import { ChangeEvent, useState } from "react";

const ContactForm = () => {
  const [full_name, set_full_name] = useState<string>("");

  return (
    <form className=" w-full px-2 lg:w-10/12 h-[75%] items-center lg:items-start justify-around flex flex-col border-2 border-white">
      <div className=" w-full h-fit flex flex-col items-start text-start">
        <label className=" flex gap-[1px] items-center" htmlFor="full_name">
          <p className=" text-[6px]">FULL NAME</p>
          <p className=" text-sm text-red-600">*</p>
        </label>
        <input
          type="text"
          placeholder="Eg. Tom Featherington"
          className=" w-full focus:outline-none focus:scale-95 transition-all duration-300 ease-in-out px-3 text-[8px] placeholder:text-neutral-300 h-10 rounded-[6px] bg-neutral-100/10 "
          value={full_name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            set_full_name(e.target.value)
          }
        />
      </div>
    </form>
  );
};

export default ContactForm;
