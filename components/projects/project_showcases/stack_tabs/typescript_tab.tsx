import Image from "next/image";
import React from "react";

const TypescriptTab = () => {
  return (
    <div className=" flex flex-col items-center text-center ">
      <Image
        src={"/assets/typescript.png"}
        width={40}
        height={40}
        alt="typescript logo"
      />
      <p className=" text-lg lg:text-[10px] text-white">Typescript</p>
    </div>
  );
};

export default TypescriptTab;
