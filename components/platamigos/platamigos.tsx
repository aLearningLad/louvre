import { enums } from "@/enums";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaAngleDoubleDown, FaGithub } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiBrain } from "react-icons/gi";
import SQLTab from "../projects/project_showcases/stack_tabs/sql_tab";
import Upstash_Tab from "../projects/project_showcases/stack_tabs/upstash_tab";
import RedisTab from "../projects/project_showcases/stack_tabs/redis_tab";
import TypescriptTab from "../projects/project_showcases/stack_tabs/typescript_tab";
import TailwindTab from "../projects/project_showcases/stack_tabs/tailwind_tab";
import NextjsTab from "../projects/project_showcases/stack_tabs/nextjs_tab";
import GSAPTab from "../projects/project_showcases/stack_tabs/gsap_tab";
import Image from "next/image";

const tech_upper = [
  <SQLTab key={1} />,
  <Upstash_Tab key={6} />,
  <RedisTab key={2} />,
  <TypescriptTab key={3} />,
];
const tech_lower = [
  <TailwindTab key={4} />,
  <NextjsTab key={5} />,
  <GSAPTab key={7} />,
];

const blocks = [1, 2, 3, 4];

const Platamigos = () => {
  return (
    <section
      id={"platamigos"}
      className="p-3 h-fit relative snap-start rounded-xl bg-neutral-100/10 lg:bg-transparent lg:min-h-screen w-full flex justify-center items-center flex-col"
    >
      <Link
        className=" absolute group left-3 top-2 hover:bg-white transition-all duration-300 ease-in-out rounded-[6px]"
        href={"/"}
      >
        <AiFillHome size={30} className=" text-white group-hover:text-black " />
      </Link>
      {/* project info */}
      <div className=" w-full gap-3 lg:w-8/12 flex flex-col lg:flex-row h-[70%] lg:h-[65%]">
        {/* middle video demo on large screens only */}
        <div className=" relative w-full h-full gap-4 items-center justify-center hidden lg:flex lg:flex-wrap sm:w-10/12 md:w-8/12 w:h-7/12 rounded-lg">
          <Image
            src={"/assets/landing.png"}
            fill
            alt="image"
            className=" absolute rounded-lg overflow-clip"
            objectFit="contain"
          />
        </div>

        {/* right side info / bottom on mobile  */}
        <div className=" w-full lg:w-5/12 h-full rounded-2xl flex-col items-center text-center lg:text-start lg:items-start">
          <span className="  flex items-center gap-3 md:gap-2">
            <i className=" text-4xl md:text-2xl">Platamigos</i>
            <p className=" text-[14px] lg:text-[10px] w-fit h-fit px-3 py-1 bg-teal-600 rounded-[4px] ">
              {enums.FLS}
            </p>
          </span>
          <h4 className=" text-xl lg:text-[14px] flex gap-[2px] mb-2">
            A demo peer-lending platform <FcMoneyTransfer size={20} />
          </h4>
          <div>
            <div className=" text-lg mt-5 lg:mt-0 lg:text-[12px] w-full md:w-11/12 lg:w-full">
              Users can request loans, compare offers, and choose which to
              accept.
              <br />
              <br />
              User has the choice to either become a debtor, a creditor, or
              both. Debt balances, credit score and accrued income are all
              calculated and shown
              <br />
              <br />
              <div className=" w-full flex flex-col items-start gap-2">
                <p className=" text-xl lg:text-[12px] font-semibold flex gap-[2px]">
                  Main lesson <GiBrain size={20} color="pink" /> :
                </p>
                <p className=" text-lg lg:text-[12px]">
                  Caching! What, when & how to cache. I used Redis & Upstash
                  during during auth and CRUD events: fetch and cache on sign in
                  and loan-related changes; clear on sign out. <br />
                  <br />
                  I also learned valuable lessons on normalizing data. No
                  duplication nor redundant entries, and clean ndexing and
                  joining. <br />
                  <br />
                </p>
              </div>
            </div>
            <div className=" w-full h-full flex justify-center lg:justify-start items-center gap-6 lg:gap-3 mt-5">
              <Link
                href={"https://github.com/aLearningLad/platamigos"}
                target="_blank"
                className=" text-lg lg:text-[12px] text-black hover:text-white cursor-pointer hover:bg-cyan-500 transition-all duration-300 ease-in-out hover:scale-95  flex items-center justify-center w-fit px-12 h-16 lg:h-10 rounded-[12px] lg:rounded-[6px] bg-neutral-100 "
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href={"#"}
                className=" text-lg lg:text-[12px] flex items-center justify-center w-fit px-12 h-1/6 lg:h-10 rounded-[10px] lg:rounded-[6px] bg-neutral-100 hover:bg-pink-400 hover:text-white text-black transition-all duration-300 ease-in-out cursor-pointer hover:scale-95 "
              >
                Open
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* tech stack details */}
      <div className=" w-full h-[30%] mt-12 sm:mt-10 md:mt-7 lg:mt-3 lg:h-[25%] justify-center gap-y-2 flex flex-col items-center ">
        <h3 className=" text-xl lg:text-[10px]">Technologies I Used</h3>

        {/* 3 here */}
        <div className=" flex w-full items-center justify-center space-x-12 space-y-4 lg:space-y-1">
          {tech_upper.map((tab, index) => (
            <>{tab}</>
          ))}
        </div>

        {/* 2 here */}
        <div className=" flex w-full items-center justify-center space-x-7">
          {tech_lower.map((tab, index) => (
            <>{tab}</>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platamigos;
