import Image from "next/image";
import React from "react";

const ZustandTab = () => {
  return (
    <div className=" flex flex-col items-center text-center bg-pink-500/90 py-1 px-2 rounded-[6px] ">
      <Image
        src={"/assets/zustand.png"}
        width={50}
        height={50}
        alt="zustand logo"
      />
      <p className=" text-lg lg:text-[10px] text-white">Zustand</p>
    </div>
  );
};

export default ZustandTab;
