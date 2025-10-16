import ProjectSection from "@/components/projects/project_showcases/project_section";
import { project_data } from "@/dev_data/project_data";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      {project_data.map(
        (
          {
            category,
            github_url,
            id,
            img1,
            img2,
            img3,
            lesson_par1,
            par1,
            subtitle,
            tech_lower,
            tech_upper,
            title,
            video_url,
            lesson_par2,
            lesson_par3,
            live_link,
            next_project_link,
            par2,
            par3,
            subtitle_icon,
          },
          index
        ) => (
          <ProjectSection
            category={category}
            github_url={github_url}
            img1={img1}
            img2={img2}
            img3={img3}
            lesson_par1={lesson_par1}
            par1={par1}
            subtitle={subtitle}
            tech_lower={tech_lower}
            tech_upper={tech_upper}
            title={title}
            video_url={video_url}
            key={id}
            lesson_par2={lesson_par2}
            lesson_par3={lesson_par3}
            live_link={live_link}
            next_project_link={next_project_link}
            par2={par2}
            par3={par3}
            subtitle_icon={subtitle_icon}
            id={id}
          />
        )
      )}
    </div>
  );
};

export default ProjectsPage;
