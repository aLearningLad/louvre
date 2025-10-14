"use client";

import { useStore } from "@/app/(store)/store";
import { I_store } from "@/interfaces";
import ContactForm from "./contact_form";
import AboutBubbles from "./about_bubbles";
import TechStack from "./tech_stack";

const AboutRight = () => {
  const is_form: boolean = useStore((store: I_store) => store.is_form);
  const currently: boolean = useStore((store: I_store) => store.currently);
  const is_tech: boolean = useStore((store: I_store) => store.is_tech);

  return (
    <div className="w-full lg:w-1/2 h-[70vh] lg:h-full flex flex-col items-center justify-center ">
      {currently && <AboutBubbles />}
      {is_form && <ContactForm />}
      {is_tech && <TechStack />}
    </div>
  );
};

export default AboutRight;
