"use client";

import { useStore } from "@/app/(store)/store";
import { I_store } from "@/interfaces";
import { MdEmail } from "react-icons/md";

const ContactBtn = () => {
  const set_is_form: () => void = useStore(
    (store: I_store) => store.set_is_form
  );

  return (
    <button
      onClick={() => {
        set_is_form();
      }}
      className=" w-7/12 cursor-pointer group flex justify-between items-center h-6 hover:pl-5 hover:border-none hover:h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 "
    >
      <p className=" text-[10px] flex items-center gap-2 group-hover:text-[14px] transition-all duration-300 ease-in-out ">
        Contact me{" "}
        <MdEmail
          color="white"
          size={16}
          className=" group-hover:flex hidden  "
        />
      </p>
      <p className="text-[10px] group-hover:hidden transition-all duration-300 ease-in-out ">
        {">"}
      </p>
    </button>
  );
};

export default ContactBtn;
