"use client";

import { enums } from "@/enums";
import { T_api_tech_list } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { FaAws, FaGithub, FaNode, FaRegEye } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";

const EventStream = () => {
  const [current_img, set_current_img] = useState<string>("new-project");

  const leftList: T_api_tech_list[] = [
    {
      id: 11,
      img_url: "/assets/mongo.png",
      title: "MongoDB",
    },
    {
      id: 22,
      img_url: <FaAws size={22} />,
      title: "AWS S3",
    },
    {
      id: 33,
      img_url: "/assets/kafka.png",
      title: "Apache Kafka",
    },
  ];
  const rightList: T_api_tech_list[] = [
    {
      id: 77,
      img_url: <IoLogoDocker size={22} className=" text-neutral-200" />,
      title: "Docker",
    },
    {
      id: 44,
      img_url: <BiLogoPostgresql size={26} className=" text-slate-200" />,
      title: "PostgreSQL",
    },
    {
      id: 55,
      img_url: <FaNode size={26} className=" text-green-600" />,
      title: "Node.js",
    },
  ];
  return (
    <section
      id={"28787811"}
      className="p-3 min-h-screen relative snap-start rounded-xl bg-pink-600/20 lg:bg-transparent lg:min-h-screen w-full flex justify-center items-center flex-col"
    >
      <Link
        className=" absolute group left-5 top-5 lg:left-3 lg:top-2 hover:bg-white transition-all duration-300 ease-in-out rounded-[6px]"
        href={"/"}
      >
        <AiFillHome size={30} className=" text-white group-hover:text-black " />
      </Link>

      {/* project name and info */}
      <div className=" w-full h-[25%] flex-col flex justify-center items-center px-1 md:px-3 lg:px-20 text-center  ">
        <span className="  flex items-center gap-3 md:gap-2 lg:gap-4 mb-2">
          <i className=" text-4xl md:text-2xl">EventStream API</i>

          <p className="open text-[14px] lg:text-[10px] lg:flex hidden w-fit h-fit px-3 py-1 bg-pink-600 rounded-[4px] ">
            {enums.API}
          </p>
        </span>
        <h4 className=" text-xl lg:text-[14px] flex gap-[2px]">
          A distributed festival management API <BsServer size={20} />
        </h4>
        <div className=" h-20 w-full hidden lg:flex justify-center items-center gap-4 ">
          {leftList.map(({ id, img_url, title }) => (
            <div
              className=" w-22 h-12 flex flex-col hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer justify-center items-center text-center bg-pink-500/40 rounded-[8px] "
              key={id}
            >
              {img_url && typeof img_url === "string" ? (
                <Image src={img_url} alt="tech image" width={26} height={26} />
              ) : (
                <div>{img_url}</div>
              )}
              <p className=" text-[10px]">{title}</p>
            </div>
          ))}

          <Link
            href={"https://github.com/aLearningLad/eventstream"}
            target="_blank"
            className="github w-full flex items-center justify-center hover:scale-95 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-white hover:text-white cursor-pointer sm:w-10/12 md:w-8/12 rounded-[6px] lg:w-fit lg:px-12 h-12 mt-3 lg:h-10 bg-white text-black text-[14px] lg:text-[14px]"
          >
            <FaGithub size={22} />
          </Link>
          {rightList.map(({ id, img_url, title }) => (
            <div
              className=" w-22 h-12 flex flex-col justify-center items-center text-center bg-pink-500/40 rounded-[8px] "
              key={id}
            >
              {img_url && typeof img_url === "string" ? (
                <Image src={img_url} alt="tech image" width={26} height={26} />
              ) : (
                <div>{img_url}</div>
              )}
              <p className=" text-[10px]">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* info for mobile */}

      <div className=" w-full flex lg:hidden flex-col">
        <h2 className=" text-[22px] text-center mb-3">
          A distributed festival management backend built with Express.js,
          Kafka, PostgreSQL, MongoDB, and AWS S3.
        </h2>

        <h4 className=" text-[22px] text-center ">
          Handles authentication, ticket sales, metadata storage, and image
          uploads — designed for scalability and clarity. It implements rate
          limiting and logging.
        </h4>
      </div>

      {/* links for mobile */}
      <div className=" w-full flex flex-col gap-5 lg:hidden">
        <Link
          href={"https://github.com/aLearningLad/eventstream"}
          target="_blank"
          className=" w-full flex items-center justify-center hover:scale-95 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-white hover:text-white cursor-pointer sm:w-10/12 md:w-8/12 rounded-[6px] lg:w-fit lg:px-12 h-20 mt-3 lg:h-10 bg-white text-black text-[14px] lg:text-[14px]"
        >
          <FaGithub className=" text-4xl lg:text-2xl " />
        </Link>
      </div>

      {/* demo routes with dynamic diagrams */}
      <div className=" w-11/12 h-[60%] bg-slate-800/50 rounded-2xl p-5 hidden lg:flex flex-col items-center ">
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

export default EventStream;
