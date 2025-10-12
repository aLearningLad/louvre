import Image from "next/image";
import React from "react";

interface I_bubble {
  top: string;
  right: string;
  width: string | number;
  height: string | number;
  skill: string;
  backgroundColor: string;
  icon?: React.ReactElement;
  image_url?: string;
  image_width?: number;
  image_height?: number;
  font_size: number;
}

const Bubble: React.FC<I_bubble> = ({
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
      className={` absolute text-center flex-col w-[160px] h-[160px] rounded-full flex justify-center items-center `}
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
