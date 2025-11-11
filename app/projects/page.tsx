import EventStream from "@/components/eventstream/eventstream";
import Platamigos from "@/components/platamigos/platamigos";
import ProjectSection from "@/components/projects/project_showcases/project_section";
import RoadWalks from "@/components/roadwalks/roadwalks";
import Tesla from "@/components/tesla/tesla";
import TwitterVerse from "@/components/twitterverse/twitterverse";
import { project_data } from "@/dev_data/project_data";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className=" overflow-hidden relative w-full h-screen bg-gradient-to-br from-black via-slate-900 to-black overflow-y-scroll snap-y snap-mandatory p-3 lg:p-0 flex flex-col">
      <Platamigos />
      <EventStream />
      <RoadWalks />
      <TwitterVerse />
      <Tesla />

      {/* bubbles */}
      <div className="projects_bubble absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-pink-600/40 via-pink-600/20 to-transparent " />
      <div className="projects_bubble absolute bottom-12 right-7 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-cyan-600/40 via-cyan-600/20 to-transparent " />
      <div className="projects_bubble absolute top-20 right-32 w-[120px] h-[120px] rounded-full bg-gradient-to-bl from-cyan-600/30 via-cyan-600/10 to-transparent " />
    </div>
  );
};

export default ProjectsPage;
