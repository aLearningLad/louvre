import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { FaCubesStacked } from "react-icons/fa6";
import ContactBtn from "./contact_btn";
import Link from "next/link";
import TechBtn from "./tech_btn";

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
        <div className=" flex flex-col w-full h-fit gap-1">
          <ContactBtn />
          <Link
            href={
              "https://github.com/aLearningLad?tab=overview&from=2025-10-01&to=2025-10-14"
            }
            target="_blank"
            className=" w-7/12  cursor-pointer group flex justify-between items-center hover:pl-5 hover:border-none h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 "
          >
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
          </Link>
          <Link
            href={"/projects"}
            className=" w-7/12  cursor-pointer group flex justify-between items-center hover:pl-5 hover:border-none h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 "
          >
            <p className=" text-[10px] flex items-center gap-2 group-hover:text-[14px] transition-all duration-300 ease-in-out ">
              My projects
              <GiGears
                size={16}
                color="white"
                className=" group-hover:flex hidden "
              />
            </p>
            <p className="text-[10px] group-hover:hidden transition-all duration-300 ease-in-out ">
              {">"}
            </p>
          </Link>
          <TechBtn />
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
