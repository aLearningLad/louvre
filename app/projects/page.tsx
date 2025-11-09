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
    <div className=" w-full h-screen overflow-y-scroll snap-y snap-mandatory p-3 lg:p-0 gap-20 md:gap-12 lg:gap-0 flex flex-col">
      <Platamigos />
      <EventStream />
      <RoadWalks />
      <TwitterVerse />
      <Tesla />
    </div>
  );
};

export default ProjectsPage;
