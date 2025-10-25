"use client";

import { enums } from "@/enums";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsServer } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";

const EventStream = () => {
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
        <AiFillHome size={24} className=" text-white group-hover:text-black " />
      </Link>

      {/* project name and info */}
      <div className=" w-full h-[25%] flex-col flex justify-center items-center px-1 md:px-3 lg:px-20 text-center  ">
        <span className="  flex items-center gap-3 md:gap-2 lg:gap-1 ">
          <i className=" text-4xl md:text-2xl lg:text-[14px]">
            EventStream API
          </i>

          <p className=" text-[14px] lg:text-[6px] w-fit h-fit px-1 py-1 bg-teal-600 rounded-[4px] ">
            {enums.API}
          </p>
        </span>
        <h4 className=" text-xl lg:text-[12px] flex gap-[2px]">
          Distributed Festival Management API <BsServer size={14} />
        </h4>
        <button className=" w-full hover:scale-95 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-white hover:text-white cursor-pointer sm:w-10/12 md:w-8/12 rounded-[6px] lg:w-fit lg:px-5 h-12 mt-3 lg:h-8 bg-white text-black text-[14px] lg:text-[12px]">
          {/* this opens modal with full details --> description, lessons and all from project data */}
          More
        </button>
      </div>

      {/* demo routes with dynamic diagrams */}
      <div className=" w-11/12 h-[60%] bg-slate-800/50 rounded-2xl p-5 flex flex-col items-center ">
        <h3 className=" text-[12px] mb-4">
          Route Architecture Examples - See GitHub for full documentation{" "}
        </h3>
        {/* dyanmic part here to show excalidraw images */}
        <div className=" w-full h-full flex">
          {/* side bar to pick route */}
          <div className=" w-5/12 h-full justify-around flex flex-col px-2">
            {/* new project */}
            <button
              onClick={(e) => set_current_img("new-project")}
              className="group h-10 flex justify-center items-center rounded-lg w-full bg-slate-500/30 hover:scale-95 transition-all duration-300 hover:bg-slate-500/60 cursor-pointer relative"
            >
              <p className=" text-pink-400 text-[14px] font-semibold absolute left-2 ">
                POST
              </p>
              <p className=" text-[10px] italic ">/api/v1/new-project</p>
              <FaRegEye
                size={14}
                className=" hidden group-hover:flex absolute right-2"
              />
            </button>
            {/* get event */}
            <button
              onClick={(e) => set_current_img("get-event")}
              className="group h-10 flex justify-center items-center rounded-lg w-full bg-slate-500/30 hover:scale-95 transition-all duration-300 hover:bg-slate-500/60 cursor-pointer relative"
            >
              <p className=" text-green-400 text-[14px] font-semibold absolute left-2 ">
                GET
              </p>
              <p className=" text-[10px] italic ">/api/v1/event/:event_id</p>
              <FaRegEye
                size={14}
                className=" hidden group-hover:flex absolute right-2"
              />
            </button>
            {/* waiting list */}
            <button
              onClick={(e) => set_current_img("waiting-list")}
              className="group h-10 flex justify-center items-center rounded-lg w-full bg-slate-500/30 hover:scale-95 transition-all duration-300 hover:bg-slate-500/60 cursor-pointer relative"
            >
              <p className=" text-orange-400 text-[14px] font-semibold absolute left-2 ">
                POST
              </p>
              <p className=" text-[10px] italic ">
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
              className="group h-10 flex justify-center items-center rounded-lg w-full bg-slate-500/30 hover:scale-95 transition-all duration-300 hover:bg-slate-500/60 cursor-pointer relative"
            >
              <p className=" text-cyan-400 text-[14px] font-semibold absolute left-2 ">
                DELETE
              </p>
              <p className=" text-[10px] italic ">/api/v1/del-acc/:id</p>
              <FaRegEye
                size={14}
                className=" hidden group-hover:flex absolute right-2"
              />
            </button>
          </div>

          {/* route image shown here */}
          <div className=" w-7/12 h-full flex justify-center items-center px-12 py-4 rounded-lg bg-neutral-200">
            {current_img === "new-project" && (
              <div className=" w-full h-full relative">
                <Image
                  width={620}
                  height={720}
                  src={"/assets/new_project.png"}
                  alt="new project route architecture"
                />
              </div>
            )}
            {current_img === "get-event" && "get event diagram"}
            {current_img === "waiting-list" && "waiting list diagram"}
            {current_img === "delete" && "delete diagram"}
          </div>
        </div>
      </div>

      {/* tech stack */}
      <div className=" w-full h-[15%] hidden lg:flex flex-col px-12 items-center mt-2 gap-1">
        <p className="text-[10px]">Technologies I used</p>
        {/* <div className="flex items-center justify-around w-full">
            {all_tech.map((tab) => (
              <>{tab}</>
            ))}
          </div> */}
      </div>
    </section>
  );
};

export default EventStream;
