import Image from "next/image";
import React from "react";

const TailwindTab = () => {
  return (
    <div className=" flex flex-col items-center text-center ">
      <Image
        src={"/assets/tailwind.png"}
        width={40}
        height={40}
        alt="tailwind css logo"
      />
      <p className=" text-lg lg:text-[10px] text-white">Tailwind CSS</p>
    </div>
  );
};

export default TailwindTab;
