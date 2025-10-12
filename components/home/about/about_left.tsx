import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { FaCubesStacked } from "react-icons/fa6";

const AboutLeft = () => {
  return (
    <div className=" w-full h-[80vh] lg:h-full lg:w-1/2 flex-col items-start justify-around ">
      <div className=" flex flex-col">
        <h3 className=" text-[10px] ">About me</h3>

        <h2 className=" text-[14px] ">
          Software developer focused on building clean, scalable systems.
          Experienced in full-stack and backend development, including
          distributed architectures and multi-database solutions. Passionate
          about solving real-world problems with efficient, maintainable code.
          Always exploring new technologies and improving workflows to deliver
          production-ready systems.
        </h2>
      </div>

      <div className=" flex flex-col items-start mt-12">
        <h1 className="text-[10px]">Curious?</h1>
        <div className=" flex flex-col w-full mt-2">
          <button className=" w-7/12 cursor-pointer group flex justify-between items-center h-6 hover:pl-5 hover:border-none hover:h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 ">
            <p className=" text-[10px] flex items-center gap-2 group-hover:text-[14px] transition-all duration-300 ease-in-out ">
              Contact me{" "}
              <MdEmail
                color="white"
                size={16}
                className=" group-hover:flex hidden  "
              />
            </p>
            <p className="text-[10px] group-hover:hidden transition-all duration-300 ease-in-out ">
              {">"}
            </p>
          </button>
          <span className=" w-7/12 mt-8 cursor-pointer group flex justify-between items-center h-6 hover:pl-5 hover:border-none hover:h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 ">
            <p className=" text-[10px] flex items-center gap-2 group-hover:text-[14px] transition-all duration-300 ease-in-out ">
              Browse my Github{" "}
              <FaGithub
                size={16}
                color="white"
                className=" group-hover:flex hidden "
              />
            </p>
            <p className="text-[10px] group-hover:hidden transition-all duration-300 ease-in-out ">
              {">"}
            </p>
          </span>
          <span className=" w-7/12 mt-8 cursor-pointer group flex justify-between items-center h-6 hover:pl-5 hover:border-none hover:h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 ">
            <p className=" text-[10px] flex items-center gap-2 group-hover:text-[14px] transition-all duration-300 ease-in-out ">
              Projects
              <GiGears
                size={16}
                color="white"
                className=" group-hover:flex hidden "
              />
            </p>
            <p className="text-[10px] group-hover:hidden transition-all duration-300 ease-in-out ">
              {">"}
            </p>
          </span>
          <span className=" w-7/12 mt-8 cursor-pointer group flex justify-between items-center h-6 hover:pl-5 hover:border-none hover:h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 ">
            <p className=" text-[10px] flex items-center gap-2 group-hover:text-[14px] transition-all duration-300 ease-in-out ">
              Tech stack
              <FaCubesStacked
                size={16}
                color="white"
                className=" group-hover:flex hidden "
              />
            </p>
            <p className="text-[10px] group-hover:hidden transition-all duration-300 ease-in-out ">
              {">"}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
