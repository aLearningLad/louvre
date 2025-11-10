import HeroBlurb from "@/components/hero_blurb/hero_blub";
import { landing_links } from "@/dev_data/landing_links";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
const LandingLeft = () => {
  return (
    <div className=" w-full p-3 lg:p-0 h-screen lg:h-full lg:w-7/12 flex flex-col items-center lg:items-end justify-center ">
      <div className=" w-7/12 mb-3 flex justify-start ">
        <div className=" w-[8%] h-[1px] rounded-lg bg-white line" />
      </div>
      <HeroBlurb />
      <Link
        className=" w-full mt-5 sm:w-8/12 md:w-6/12 mb-5 hover:text-white hover:bg-black hover:scale-90 transition-all duration-300 ease-in-out lg:hidden lg:px-20 h-20 lg:h-12 flex items-center justify-center bg-white text-black rounded-[7px] text-[20px] "
        href={"/projects"}
      >
        Projects
      </Link>
      <Link
        className="w-full sm:w-8/12 md:w-6/12 mt-3 hover:text-white hover:bg-black hover:scale-90 transition-all duration-300 ease-in-out lg:hidden lg:px-20 h-20 lg:h-12 flex items-center justify-center bg-white text-black rounded-[7px] text-[20px] "
        href={"/projects"}
      >
        <FaGithub size={40} />
      </Link>
    </div>
  );
};

export default LandingLeft;
