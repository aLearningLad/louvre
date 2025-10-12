import { landing_links } from "@/dev_data/landing_links";
import Link from "next/link";
import React from "react";

const LandingLeft = () => {
  return (
    <div className=" w-full h-[70vh] lg:h-full lg:w-7/12 flex flex-col items-center lg:items-end justify-center ">
      <div className=" w-full lg:w-7/12 h-fit flex flex-col text-center lg:text-start">
        <h1 className=" text-xl">Hello, {"I'm"} Thato,</h1>
        <h1 className=" text-xl">a full-stack developer</h1>
        <h1 className=" text-xl">located in Cape Town</h1>
        <h3 className=" text-[14px] ">
          I build, deploy & document full-stack systems
        </h3>
        <span className=" w-full mt-4 hidden lg:flex justify-start gap-5 ">
          {landing_links.map(({ icon, id, link, target, text }, index) => (
            <Link
              className=" flex rounded-[6px] items-center justify-center gap-1 px-5 h-8 bg-neutral-400/30"
              key={id}
              href={link}
            >
              <p className=" text-[8px] ">{text}</p>
              {icon}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
};

export default LandingLeft;
