"use client";

import { enums } from "@/enums";
import { T_api_tech_list } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { FaAws, FaDatabase, FaGithub, FaNode } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { IoLogoDocker } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";

const RoadWalks = () => {
  const [current_img, set_current_img] = useState<string>("new-project");

  const leftList: T_api_tech_list[] = [
    {
      id: 11,
      img_url: "/assets/see_sharp.png",
      title: "C#",
    },
    {
      id: 33,
      img_url: <FaDatabase size={22} className=" text-cyan-400" />,
      title: "MS SQL Server",
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
      img_url: <SiJsonwebtokens size={20} className=" text-orange-500" />,
      title: "JSON Web Token",
    },
  ];

  return (
    <section
      id={"28787811"}
      className="p-3 min-h-screen relative snap-start rounded-xl bg-green-500/10 lg:bg-transparent lg:min-h-screen w-full flex justify-center items-center flex-col z-[2]"
    >
      {/* project name and info */}
      <div className=" w-full h-[25%] flex-col flex justify-center items-center px-1 md:px-3 lg:px-20 text-center mb-20 ">
        <span className="  flex items-center gap-3 md:gap-2 lg:gap-4 mb-2">
          <i className=" text-4xl md:text-2xl ">RoadWalks API</i>

          <p className=" open text-[14px] lg:text-[10px] lg:flex hidden w-fit h-fit px-3 py-1 bg-pink-600 rounded-[4px] ">
            {enums.API}
          </p>
        </span>
        <h4 className=" text-xl lg:text-[14px] flex gap-[2px]">
          A super-simple, structured .NET API built for Kraaifontein running
          clubs <BsServer size={20} />
        </h4>

        <div className=" w-full h-20 hidden lg:flex justify-center items-center gap-4">
          {leftList.map(({ id, img_url, title }) => (
            <div
              className=" w-22 h-12 flex flex-col hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer justify-center items-center text-center bg-green-400/40 rounded-[8px] "
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
            href={"https://github.com/aLearningLad/RoadWalks"}
            target="_blank"
            className="github w-full flex items-center justify-center hover:scale-95 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-white hover:text-white cursor-pointer sm:w-10/12 md:w-8/12 rounded-[6px] lg:w-fit lg:px-12 h-12 mt-3 lg:h-10 bg-white text-black text-[14px] lg:text-[14px]"
          >
            <FaGithub size={22} />
          </Link>
          {rightList.map(({ id, img_url, title }) => (
            <div
              className=" w-22 h-12 flex flex-col hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer justify-center items-center text-center bg-green-400/40 rounded-[8px] "
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
        <div className=" w-full lg:w-7/12 mt-5 text-xl lg:text-[14px]">
          This project surfaces rich route data with stopovers, landmarks, and
          average durations for each route. Every route includes suggestions for
          branching offshoots to dynamically extend runs through alternative
          terrain and scenery.
        </div>
      </div>
      <Link
        href={"https://github.com/aLearningLad/eventstream"}
        target="_blank"
        className="github w-full flex lg:hidden items-center justify-center hover:scale-95 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-white hover:text-white cursor-pointer sm:w-10/12 md:w-8/12 rounded-[6px] lg:w-fit lg:px-12 h-20 mt-3 bg-white text-black"
      >
        <FaGithub className=" text-4xl lg:text-2xl mt-5 " />
      </Link>
    </section>
  );
};

export default RoadWalks;
