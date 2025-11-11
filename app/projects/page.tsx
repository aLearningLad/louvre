import EventStream from "@/components/eventstream/eventstream";
import Platamigos from "@/components/platamigos/platamigos";
import ProjectSection from "@/components/projects/project_showcases/project_section";
import RoadWalks from "@/components/roadwalks/roadwalks";
import Tesla from "@/components/tesla/tesla";
import TwitterVerse from "@/components/twitterverse/twitterverse";
import { project_data } from "@/dev_data/project_data";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

const ProjectsPage = () => {
  return (
    <div className=" overflow-hidden relative w-full h-screen bg-gradient-to-br from-black via-slate-900 to-black overflow-y-scroll snap-y snap-mandatory p-3 lg:p-0 flex flex-col">
      <Link
        className=" fixed cursor-pointer z-10 group flex top-5 left-5 lg:left-3 lg:top-2 hover:bg-white transition-all duration-300 ease-in-out rounded-[6px]"
        href={"/"}
      >
        <AiFillHome size={30} className=" text-white group-hover:text-black " />
      </Link>
      <Platamigos />
      <EventStream />
      <RoadWalks />
      <TwitterVerse />
      <Tesla />

      {/* bubbles */}
      <div className="projects_bubble1 fixed w-[200px] h-[200px] rounded-full bg-radial from-pink-600/40 via-neutral-800/10 to-transparent  z-[1]" />
      <div className="projects_bubble2 fixed bottom-12 right-7 w-[500px] h-[500px] rounded-full bg-radial from-cyan-600/30 via-neutral-700/10 to-transparent z-[1]" />
      <div className="projects_bubble3 z-[1] fixed top-20 right-32 w-[120px] h-[120px] rounded-full bg-radial from-yellow-500/30 via-neutral-800/20 to-transparent " />
      <div className=" w-[90px] h-[90px] rounded-full bg-radial from-cyan-600/30 via-neutral-800/20 to-transparent fixed bottom-4 left-12  projects_bubble3 z-[1]" />
      <div className=" w-[40px] h-[40px] rounded-full bg-radial from-pink-600/30 via-neutral-800/20 to-transparent fixed bottom-36 left-20 projects_bubble3 z-[1]" />
    </div>
  );
};

export default ProjectsPage;
