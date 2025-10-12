import { landing_links } from "@/dev_data/landing_links";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
const LandingLeft = () => {
  return (
    <div className=" w-full p-3 lg:p-0 h-screen lg:h-full lg:w-7/12 flex flex-col items-center lg:items-end justify-center ">
      <div className=" w-7/12 mb-3 flex justify-start ">
        <div className=" w-[8%] h-[1px] rounded-lg bg-white " />
      </div>
      <div className=" w-full lg:w-7/12 h-fit flex flex-col text-center lg:text-start">
        <h1 className=" text-3xl lg:text-2xl">Hello, {"I'm"} Thato,</h1>
        <h1 className=" text-3xl lg:text-2xl">a full-stack developer</h1>
        <h1 className=" text-3xl lg:text-2xl">located in Cape Town</h1>
        <h3 className=" text-xl lg:text-[14px] ">
          I build, deploy & document full-stack systems
        </h3>
        <span className=" w-full mt-4 hidden lg:flex justify-start gap-5 ">
          {landing_links.map(({ icon, id, link, target, text }, index) => (
            <Link
              className=" flex hover:scale-90 hover:bg-neutral-100/90 hover:text-black transition-all duration-200 ease-in-out rounded-[6px] items-center justify-center gap-1 px-5 h-8 bg-neutral-400/20"
              key={id}
              href={link}
              target={target}
            >
              <p className=" text-[8px] ">{text}</p>
              {icon}
            </Link>
          ))}
        </span>
      </div>

      <button className="flex w-full sm:w-10/12 md:w-8/12 mt-12 rounded-[6px] lg:hidden h-16 bg-neutral-200 text-black justify-center items-center">
        <TiThMenu size={20} />
      </button>
    </div>
  );
};

export default LandingLeft;
