"use client";

import { enums } from "@/enums";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsServer } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const RoadWalks = () => {
  const [current_img, set_current_img] = useState<string>("new-project");

  return (
    <section
      id={"28787811"}
      className="p-3 h-fit relative snap-start rounded-xl bg-neutral-100/10 lg:bg-transparent lg:min-h-screen w-full flex justify-center items-center flex-col"
    >
      <Link
        className=" absolute group left-3 top-2 hover:bg-white transition-all duration-300 ease-in-out rounded-[6px]"
        href={"/"}
      >
        <AiFillHome size={30} className=" text-white group-hover:text-black " />
      </Link>

      {/* project name and info */}
      <div className=" w-full h-[25%] flex-col flex justify-center items-center px-1 md:px-3 lg:px-20 text-center  ">
        <span className="  flex items-center gap-3 md:gap-2 lg:gap-4 mb-2">
          <i className=" text-4xl md:text-2xl">RoadWalks API</i>

          <p className=" text-[14px] lg:text-[10px] w-fit h-fit px-3 py-1 bg-pink-600 rounded-[4px] ">
            {enums.API}
          </p>
        </span>
        <h4 className=" text-xl lg:text-[14px] flex gap-[2px]">
          A super-simple, structured .NET API built for Kraaifontein running
          clubs <BsServer size={20} />
        </h4>
        <Link
          href={"https://github.com/aLearningLad/RoadWalks"}
          target="_blank"
          className=" w-full flex items-center justify-center hover:scale-95 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-white hover:text-white cursor-pointer sm:w-10/12 md:w-8/12 rounded-[6px] lg:w-fit lg:px-12 h-12 mt-3 lg:h-10 bg-white text-black text-[14px] lg:text-[14px]"
        >
          <FaGithub size={22} />
        </Link>
      </div>

      {/* demo routes with dynamic diagrams */}
      <div className=" w-11/12 h-[60%] bg-slate-800/50 rounded-2xl p-5 flex flex-col items-center ">
        <h3 className=" text-[14px] mb-4">
          Route Architecture Examples - See GitHub for full documentation{" "}
        </h3>
        {/* dyanmic part here to show excalidraw images */}
        <div className=" w-full h-full flex">
          {/* side bar to pick route */}
          <div className=" w-5/12 h-full justify-around flex flex-col px-2">
            {/* new project */}
            <button
              onClick={(e) => set_current_img("new-project")}
              className={`group h-12 flex  justify-center items-center rounded-lg w-full ${
                current_img === "new-project"
                  ? " bg-white scale-[98%] text-black"
                  : "bg-slate-500/30 hover:bg-slate-500/60 hover:scale-95 transition-all duration-300"
              }   cursor-pointer relative`}
            >
              <p className=" text-pink-400 text-[14px] font-semibold absolute left-2 ">
                POST
              </p>
              <p className=" text-[14px] italic ">/api/v1/new-project</p>
              <FaRegEye
                size={14}
                className=" hidden group-hover:flex absolute right-2"
              />
            </button>
            {/* get event */}
            <button
              onClick={(e) => set_current_img("get-event")}
              className={`group h-12 flex justify-center items-center rounded-lg w-full ${
                current_img === "get-event"
                  ? " bg-orange-400/40 scale-[98%] text-white"
                  : "bg-slate-500/30 hover:bg-slate-500/60 hover:scale-95 transition-all duration-300"
              }   cursor-pointer relative`}
            >
              <p className=" text-green-400 text-[14px] font-semibold absolute left-2 ">
                GET
              </p>
              <p className=" text-[14px] italic ">/api/v1/event/:event_id</p>
              <FaRegEye
                size={14}
                className=" hidden group-hover:flex absolute right-2"
              />
            </button>
            {/* waiting list */}
            <button
              onClick={(e) => set_current_img("waiting-list")}
              className={`group h-12 flex justify-center items-center rounded-lg w-full  ${
                current_img === "waiting-list"
                  ? " bg-green-400/70 scale-[98%] text-white"
                  : "bg-slate-500/30 hover:bg-slate-500/60 hover:scale-95 transition-all duration-300"
              } cursor-pointer relative`}
            >
              <p className=" text-orange-500 text-[14px] font-semibold absolute left-2 ">
                POST
              </p>
              <p className=" text-[14px] italic ">
                /api/v1/attendee/join-waiting-list
              </p>
              <FaRegEye
                size={14}
                className=" hidden group-hover:flex absolute right-2"
              />
            </button>
            {/* delete */}
            <button
              onClick={(e) => set_current_img("delete")}
              className={`group h-12 flex justify-center items-center rounded-lg w-full  ${
                current_img === "delete"
                  ? " bg-purple-600/70 scale-[98%] text-white"
                  : "bg-slate-500/30 hover:bg-slate-500/60 hover:scale-95 transition-all duration-300"
              } cursor-pointer relative`}
            >
              <p className=" text-cyan-400 text-[14px] font-semibold absolute left-2 ">
                DELETE
              </p>
              <p className=" text-[14px] italic ">/api/v1/del-acc/:id</p>
              <FaRegEye
                size={14}
                className=" hidden group-hover:flex absolute right-2"
              />
            </button>
          </div>

          {/* route image shown here */}
          <div className=" w-7/12 h-full flex justify-center items-center px-12 py-4 rounded-lg">
            {current_img === "new-project" && (
              <div className=" w-full h-full relative">
                <Image
                  width={730}
                  height={720}
                  src={"/assets/npwhite2.png"}
                  alt="new project route architecture"
                />
              </div>
            )}
            {current_img === "get-event" && (
              <div className=" w-full h-full relative">
                <Image
                  width={620}
                  height={720}
                  src={"/assets/ge.png"}
                  alt="fetch specific event route architecture"
                />
              </div>
            )}
            {current_img === "waiting-list" && (
              <div className=" w-full h-full relative">
                <Image
                  width={620}
                  height={720}
                  src={"/assets/wl.png"}
                  alt="new project route architecture"
                />
              </div>
            )}
            {current_img === "delete" && (
              <div className=" w-full h-full relative">
                <Image
                  width={620}
                  height={720}
                  src={"/assets/del.png"}
                  alt="delet user account route architecture"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadWalks;
