import { I_bubble } from "@/interfaces";
import Image from "next/image";
import React from "react";

const Bubble: React.FC<I_bubble> = ({
  id,
  right,
  top,
  height,
  width,
  skill,
  backgroundColor,
  icon,
  image_url,
  image_height,
  image_width,
  font_size,
}) => {
  return (
    <div
      className={` absolute ${id === "dotnet" && "dotnet"}  ${
        id === "typescript" && "ts"
      } text-center ${
        id !== "dotnet" && id !== "typescript" && "otherbubbles"
      } flex-col w-[160px] h-[160px] rounded-full hidden lg:flex justify-center items-center `}
      style={{
        top,
        right,
        width,
        height,
        backgroundColor,
      }}
    >
      {icon}
      <p style={{ fontSize: font_size }} className=" mt-1 ">
        {skill}
      </p>
    </div>
  );
};

export default Bubble;
