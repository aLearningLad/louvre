import Image from "next/image";
import React from "react";

const GSAPTab = () => {
  return (
    <div className=" flex flex-col px-4 bg-white items-center text-center overflow-clip rounded-[6px]">
      <Image src={"/assets/gsap.png"} width={35} height={30} alt="gsap logo" />
      <p className=" text-lg lg:text-[10px] text-black">GSAP</p>
    </div>
  );
};

export default GSAPTab;
