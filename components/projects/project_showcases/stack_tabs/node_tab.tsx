import Image from "next/image";
import React from "react";

const NodeTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <Image
        src={"/assets/nodejs.png"}
        width={50}
        height={50}
        alt="nodejs logo"
        className=" rounded-[6px] overflow-clip"
      />
      <p className=" text-lg lg:text-[7px] text-white">Node.js</p>
    </div>
  );
};

export default NodeTab;
