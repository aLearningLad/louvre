import Image from "next/image";
import React from "react";

const Upstash_Tab = () => {
  return (
    <div className=" flex flex-col bg-white items-center text-center overflow-clip rounded-[6px]">
      <Image
        src={"/assets/upstash.png"}
        width={40}
        height={40}
        alt="next.js logo"
      />
      <p className=" text-lg lg:text-[7px] text-black">Upstash</p>
    </div>
  );
};

export default Upstash_Tab;
