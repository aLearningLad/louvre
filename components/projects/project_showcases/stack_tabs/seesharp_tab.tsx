import Image from "next/image";
import React from "react";

const SeesharpTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <Image
        src={"/assets/see_sharp.png"}
        width={50}
        height={50}
        alt="c# logo"
        className=" rounded-[6px] overflow-clip"
      />
      <p className=" text-lg lg:text-[7px] text-white">C#</p>
    </div>
  );
};

export default SeesharpTab;
