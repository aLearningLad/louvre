import ProjectSection from "@/components/projects/project_showcases/project_section";
import { project_data } from "@/dev_data/project_data";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className=" w-full h-screen overflow-y-scroll snap-y snap-mandatory p-3 lg:p-0 gap-20 md:gap-12 lg:gap-0 flex flex-col">
      {project_data.map(
        ({
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
          category1,
          category2,
          next_project_name,
        }) => (
          <ProjectSection
            category1={category1}
            category2={category2}
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
            next_project_name={next_project_name}
          />
        )
      )}
    </div>
  );
};

export default ProjectsPage;
