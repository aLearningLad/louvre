import Image from "next/image";
import React from "react";

const NextjsTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px] mx-2">
      <Image
        src={"/assets/nextjs.png"}
        width={30}
        height={30}
        alt="next.js logo"
      />
      <p className=" text-lg lg:text-[10px] text-white">Next.js</p>
    </div>
  );
};

export default NextjsTab;
