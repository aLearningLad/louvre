import Image from "next/image";
import React from "react";

const RedisTab = () => {
  return (
    <div className=" flex flex-col items-center bg-white text-center overflow-clip rounded-[6px]">
      <Image
        src={"/assets/redis.png"}
        width={50}
        height={50}
        alt="redis logo"
      />
      <p className=" text-lg lg:text-[7px] text-black">Redis</p>
    </div>
  );
};

export default RedisTab;
