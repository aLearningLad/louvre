import React from "react";

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

      <div className=" flex flex-col items-start">
        <h1>Curious?</h1>
        <div className=" mt-5 flex flex-col w-full">
          <span className=" w-7/12 flex justify-between h-6 border-b-[1px] border-neutral-300 ">
            <p className=" text-[10px] ">Contact me</p>
            <p className="text-[10px]">{">"}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
