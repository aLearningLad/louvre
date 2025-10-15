import { I_project_card } from "@/interfaces";
import React from "react";

const ProjectCard: React.FC<I_project_card> = ({
  id,
  desc,
  img1,
  img2,
  img3,
  repo_link,
  subtitle,
  tech_stack,
  title,
  video_link,
  live_link,
}) => {
  return (
    <div className=" w-full h-[70vh] lg:h-[50vh] sm:w-10/12 md:w-8/12 lg:w-6/12 border-2 border-white rounded-lg ">
      ProjectCard
    </div>
  );
};

export default ProjectCard;
