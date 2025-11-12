import { I_project_section } from "@/interfaces";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaAngleDoubleDown } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { enums } from "@/enums";
import DemoRoutes from "./demo_routes/demo_routes";
import { T_tech_card } from "@/types";

const ProjectSection: React.FC<I_project_section> = ({
  github_url,
  is_type,
  architecture_urls,
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
  id,
  category1,
  category2,
  next_project_name,
  route_demos,
}) => {
  if (is_type === enums.FLS) {
    return (
      <section
        id={id}
        className="p-3 h-fit relative snap-start rounded-xl bg-neutral-100/10 lg:bg-transparent lg:min-h-screen w-full flex justify-center items-center flex-col"
      >
        <Link
          className=" absolute group left-3 top-2 hover:bg-white transition-all duration-300 ease-in-out rounded-[6px]"
          href={"/"}
        >
          <AiFillHome
            size={24}
            className=" text-white group-hover:text-black "
          />
        </Link>
        {/* project info */}
        <div className=" w-full gap-3 lg:w-8/12 flex flex-col lg:flex-row h-[70%] lg:h-[65%]">
          {/* left side images --> ONLY ON LARGE SCREENS */}
          <div className=" hidden space-y-4 lg:flex w-3/12 h-full flex-col items-end ">
            <div className=" w-full h-1/3 bg-neutral-100/20 rounded-lg">
              image1
            </div>
            <div className=" w-full h-1/3 bg-neutral-100/20 rounded-lg">
              image2image3
            </div>
            <div className=" w-full h-1/3 bg-neutral-100/20 rounded-lg"></div>
          </div>

          {/* middle video demo on large screens only */}
          <div className=" w-full hidden lg:flex sm:w-10/12 md:w-8/12 w:h-7/12 bg-neutral-100/10 rounded-lg">
            video loop
          </div>

          {/* right side info / bottom on mobile  */}
          <div className=" w-full lg:w-5/12 h-full rounded-2xl flex-col items-center text-center lg:text-start lg:items-start">
            <span className="  flex items-center gap-3 md:gap-2 lg:gap-1 ">
              <i className=" text-4xl md:text-2xl lg:text-[14px]">{title}</i>
              {category2 && (
                <p className=" text-[14px] lg:text-[6px] w-fit h-fit px-1 py-1 bg-pink-600 rounded-[4px] ">
                  {category2}
                </p>
              )}
              <p className=" text-[14px] lg:text-[6px] w-fit h-fit px-1 py-1 bg-teal-600 rounded-[4px] ">
                {category1}
              </p>
            </span>
            <h4 className=" text-xl lg:text-[12px] flex gap-[2px]">
              {subtitle} {subtitle_icon}
            </h4>
            <div>
              <div className=" text-lg mt-5 lg:mt-0 lg:text-[10px] w-full md:w-11/12 lg:w-full">
                {par1}
                <br />
                <br />
                {par2} <br />
                <br />
                <div className=" w-full flex flex-col items-start gap-2">
                  <p className=" text-xl lg:text-[10px] font-semibold flex gap-[2px]">
                    Main lesson <GiBrain size={12} color="pink" /> :
                  </p>
                  <p className=" text-lg lg:text-[10px]">
                    {lesson_par1} <br />
                    <br />
                    {lesson_par2} <br />
                    <br />
                    {lesson_par3 && lesson_par3}
                  </p>
                </div>
              </div>
              <div className=" w-full h-full flex justify-center lg:justify-start items-center gap-6 lg:gap-3 mt-5">
                <Link
                  href={github_url}
                  target="_blank"
                  className=" text-lg lg:text-[12px] text-black hover:text-white cursor-pointer hover:bg-black transition-all duration-300 ease-in-out hover:scale-95  flex items-center justify-center w-fit px-5 h-12 lg:h-6 rounded-[12px] lg:rounded-[4px] bg-neutral-100 "
                >
                  <FaGithub size={18} />
                </Link>

                {live_link && (
                  <Link
                    href={live_link}
                    className=" text-lg lg:text-[12px] flex items-center justify-center w-fit px-5 h-12 lg:h-6 rounded-[10px] lg:rounded-[4px] bg-neutral-100 hover:bg-black hover:text-white text-black transition-all duration-300 ease-in-out cursor-pointer hover:scale-95 "
                  >
                    Open
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* tech stack details */}
        <div className=" w-full h-[30%] mt-12 sm:mt-10 md:mt-7 lg:mt-3 lg:h-[25%] justify-center gap-y-2 flex flex-col items-center ">
          <h3 className=" text-xl lg:text-[10px]">Technologies I Used</h3>

          {/* 3 here */}
          <div className=" flex w-full items-center justify-center space-x-12 space-y-4 lg:space-y-1">
            {tech_upper.map((tab, index) => (
              <>{tab}</>
            ))}
          </div>

          {/* 2 here */}
          <div className=" flex w-full items-center justify-center space-x-7">
            {tech_lower.map((tab, index) => (
              <>{tab}</>
            ))}
          </div>
        </div>
        {/* cta to scroll down ONLY ON LARGE SCREENS */}
        {next_project_link && (
          <div className=" w-full gap-2 hidden lg:flex h-[10%] justify-center items-center  ">
            <FaAngleDoubleDown className=" text-pink-600" size={10} />

            <Link href={next_project_link}>
              <i className=" text-pink-600 underline text-[10px]">
                {next_project_name}
              </i>
            </Link>
            <FaAngleDoubleDown className=" text-pink-600" size={10} />
          </div>
        )}{" "}
      </section>
    );
  }

  if (is_type === enums.API) {
    const all_tech: T_tech_card[] = [...tech_upper, ...tech_lower];
    return (
      <section
        id={id}
        className="p-3 h-fit relative snap-start rounded-xl bg-neutral-100/10 lg:bg-transparent lg:min-h-screen w-full flex justify-center items-center flex-col"
      >
        <Link
          className=" absolute group left-3 top-2 hover:bg-white transition-all duration-300 ease-in-out rounded-[6px]"
          href={"/"}
        >
          <AiFillHome
            size={24}
            className=" text-white group-hover:text-black "
          />
        </Link>

        {/* project name and info */}
        <div className=" w-full h-[25%] flex-col flex justify-center items-center px-1 md:px-3 lg:px-20 text-center  ">
          <span className="  flex items-center gap-3 md:gap-2 lg:gap-1 ">
            <i className=" text-4xl md:text-2xl lg:text-[14px]">{title}</i>
            {category2 && (
              <p className=" text-[14px] lg:text-[6px] w-fit h-fit px-1 py-1 bg-pink-600 rounded-[4px] ">
                {category2}
              </p>
            )}
            <p className=" text-[14px] lg:text-[6px] w-fit h-fit px-1 py-1 bg-teal-600 rounded-[4px] ">
              {category1}
            </p>
          </span>
          <h4 className=" text-xl lg:text-[12px] flex gap-[2px]">
            {subtitle} {subtitle_icon}
          </h4>
          <button className=" w-full hover:scale-95 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-white hover:text-white cursor-pointer sm:w-10/12 md:w-8/12 rounded-[6px] lg:w-fit lg:px-5 h-12 mt-3 lg:h-8 bg-white text-black text-[14px] lg:text-[12px]">
            {/* this opens modal with full details --> description, lessons and all from project data */}
            More
          </button>
        </div>

        {/* demo routes with dynamic diagrams */}
        <DemoRoutes route_demos={route_demos} />

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
  }
};

export default ProjectSection;
