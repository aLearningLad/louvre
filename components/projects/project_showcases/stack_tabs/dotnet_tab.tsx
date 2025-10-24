import Image from "next/image";
import React from "react";

const DotnetTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <Image
        src={"/assets/dotnet.png"}
        width={50}
        height={50}
        alt="bcrypt logo"
        className=" rounded-[6px] overflow-clip"
      />
      <p className=" text-lg lg:text-[7px] text-white">.NET</p>
    </div>
  );
};

export default DotnetTab;
