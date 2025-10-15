import { I_project_card } from "@/interfaces";
import React from "react";

const ProjectSection =
  // :

  // React.FC<I_project_card>

  (
    {
      //   desc,
      //   id,
      //   img1,
      //   img2,
      //   img3,
      //   repo_link,
      //   subtitle,
      //   tech_stack,
      //   title,
      //   video_link,
      //   live_link,
    }
  ) => {
    return (
      <section className=" h-screen w-full border-2 border-white flex justify-center items-center flex-col">
        {/* project info */}
        <div className=" w-full gap-3 lg:w-8/12 border-2 flex flex-col lg:flex-row border-white h-[70%] lg:h-[65%]">
          {/* left side images --> ONLY ON LARGE SCREENS */}
          <div className=" hidden lg:flex w-3/12 h-full flex-col items-end bg-neutral-100/30 rounded-l-2xl"></div>

          {/* middle video demo */}
          <div className=" w-full sm:w-10/12 md:w-8/12 w:h-7/12 bg-neutral-100/30 rounded-lg"></div>

          {/* right side info / bottom on mobile  */}
          <div className=" w-full lg:w-5/12 h-full flex-col items-end bg-neutral-100/30 rounded-l-2xl"></div>
        </div>

        {/* tech stack details */}
        <div className=" w-full h-[30%] lg:h-[25%] border-2 border-white "></div>
        {/* cta to scroll down ONLY ON LARGE SCREENS */}
        <div className=" w-full hidden lg:flex h-[10%] border-2 border-white "></div>
      </section>
    );
  };

export default ProjectSection;
