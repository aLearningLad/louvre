import Image from "next/image";
import React from "react";

const ZustandTab = () => {
  return (
    <div className=" flex flex-col items-center text-center bg-white py-1 px-2 rounded-[6px] ">
      <Image
        src={"/assets/zustand.png"}
        width={30}
        height={30}
        alt="zustand logo"
      />
      <p className=" text-lg lg:text-[7px] text-black">Zustand</p>
    </div>
  );
};

export default ZustandTab;
