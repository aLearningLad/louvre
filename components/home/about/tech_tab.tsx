import { I_tech_tab } from "@/interfaces";
import Image from "next/image";
import React from "react";

const TechTab: React.FC<I_tech_tab> = ({ img_url, title }) => {
  return (
    <div className=" w-fit h-fit py-1 px-2 flex flex-col items-center text-center rounded-lg">
      <Image
        className=" bg-white rounded-lg"
        src={img_url}
        width={40}
        height={40}
        alt="tech stack logo"
      />
      <p className=" text-lg lg:text-[7px] text-white">{title}</p>
    </div>
  );
};

export default TechTab;
