"use client";

import { useStore } from "@/app/(store)/store";
import { I_store } from "@/interfaces";
import ContactForm from "./contact_form";
import AboutBubbles from "./about_bubbles";

const AboutRight = () => {
  const is_form: boolean = useStore((store: I_store) => store.is_form);

  return (
    <div className="w-full lg:w-1/2 h-[70vh] lg:h-full flex flex-col items-center justify-center ">
      {!is_form && <AboutBubbles />}
      {is_form && <ContactForm />}
    </div>
  );
};

export default AboutRight;
