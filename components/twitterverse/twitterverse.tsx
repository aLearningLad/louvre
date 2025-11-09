import React from "react";
import TypescriptTab from "../projects/project_showcases/stack_tabs/typescript_tab";
import TailwindTab from "../projects/project_showcases/stack_tabs/tailwind_tab";
import NextjsTab from "../projects/project_showcases/stack_tabs/nextjs_tab";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { enums } from "@/enums";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiBrain } from "react-icons/gi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import ZustandTab from "../projects/project_showcases/stack_tabs/zustand_tab";

const TwitterVerse = () => {
  const tech_upper = [
    <TypescriptTab key={3} />,
    <TailwindTab key={4} />,
    <NextjsTab key={5} />,
    <ZustandTab key={6} />,
  ];

  return (
    <section
      id={"platamigos"}
      className="p-3 min-h-screen relative snap-start rounded-xl bg-neutral-100/10 lg:bg-transparent lg:min-h-screen w-full flex justify-center items-center flex-col"
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
        <div className=" w-full h-fit overflow-hidden items-center justify-center hidden lg:flex sm:w-10/12 md:w-8/12 w:h-7/12 rounded-lg">
          <video
            className=" w-full h-full object-cover "
            loop
            muted
            autoPlay
            src="/videos/twitterverse_demo.mp4"
          />
        </div>

        {/* right side info / bottom on mobile  */}
        <div className=" w-full border-4 border-white lg:w-5/12 h-full rounded-2xl flex-col items-center text-center lg:text-start lg:items-start flex">
          <span className="  flex items-center gap-3 md:gap-2 lg:gap-4">
            <i className=" text-4xl md:text-2xl">TwitterVerse</i>
            <p className=" text-[14px] hidden lg:flex lg:text-[10px] w-fit h-fit px-3 py-1 bg-purple-600 rounded-[4px] ">
              {enums.FRN}
            </p>
          </span>
          <h4 className=" text-xl lg:text-[14px] flex gap-[2px] mb-2">
            A simplified Twitter frontend clone <FaTwitter size={20} />
          </h4>
          <div>
            <div className=" w-full text-xl flex lg:hidden">
              This was a hobby project. I tried to mimic {"Twitter's"} UI and
              basic functionality such as tweeting, viewing community tweets,
              news sections, applying for premium membership; and storing,
              altering and using state across different components to manipulate
              the UI.
            </div>
            <div className=" lg:flex flex-col hidden text-lg mt-5 lg:mt-0 lg:text-[12px] w-full md:w-11/12 lg:w-full">
              This was a hobby project. I tried to mimic {"Twitter's"} UI and
              basic functionality such as tweeting, viewing community tweets,
              news sections, applying for premium membership; and storing,
              altering and using state across different components to manipulate
              the UI.
              <br />
              <br />
              It is a bare-bones build. No APIs nor external data are used, and
              it is without Auth nor backend. All media are held within the
              assets folder: everything is self-contained within this repo.
              <br />
              <br />
              <div className=" w-full flex flex-col items-start gap-2">
                <p className=" text-xl lg:text-[12px] font-semibold flex gap-[2px]">
                  Main lesson <GiBrain size={20} color="pink" /> :
                </p>
                <p className=" text-lg lg:text-[12px]">
                  This app taught me to use Zustand. <br />
                  Declaring, manipulating and using state to conditionally
                  render UI across components that {"don't"} share a parent.
                  This was also a very useful excercise to help me move away
                  from mindlessly drilling state down
                </p>
              </div>
            </div>
            <div className=" w-full mt-12 lg:mt-3 flex justify-center lg:flex-row flex-col lg:justify-start items-center gap-6 lg:gap-3">
              {/* for web */}
              <Link
                href={"https://github.com/aLearningLad/twitterverse"}
                target="_blank"
                className=" text-lg lg:text-[12px] text-black hover:text-white cursor-pointer hover:bg-cyan-500 transition-all duration-300 ease-in-out hover:scale-95 hidden lg:flex items-center justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-fit lg:px-12 h-16 lg:h-10 rounded-[12px] lg:rounded-[6px] bg-neutral-100 "
              >
                <FaGithub size={20} />
              </Link>

              {/* for mobile */}
              <Link
                href={"https://github.com/aLearningLad/twitterverse"}
                target="_blank"
                className=" text-lg lg:text-[12px] text-black hover:text-white cursor-pointer hover:bg-cyan-500 transition-all duration-300 ease-in-out hover:scale-95 lg:hidden flex items-center justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-fit lg:px-12 h-16 lg:h-10 rounded-[12px] lg:rounded-[6px] bg-neutral-100 "
              >
                <FaGithub size={40} />
              </Link>

              <Link
                href={"https://twitterverse-six.vercel.app/"}
                target="_blank"
                className=" text-[22px] lg:text-[12px] flex items-center justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-fit lg:px-12 h-16 lg:h-10 rounded-[10px] lg:rounded-[6px] bg-neutral-100 hover:bg-pink-400 hover:text-white text-black transition-all duration-300 ease-in-out cursor-pointer hover:scale-95 "
              >
                Open
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* tech stack details */}
      <div className=" w-full h-[30%] mt-12 sm:mt-10 md:mt-7 lg:mt-3 lg:h-[25%] justify-center gap-y-2 hidden lg:flex flex-col items-center ">
        <h3 className=" text-xl lg:text-[14px]">Technologies I Used</h3>

        {/* 3 here */}
        <div className=" flex w-full items-center justify-center space-x-12 space-y-4 lg:space-y-1">
          {tech_upper.map((tab, index) => (
            <div key={tab.key}>{tab}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwitterVerse;
