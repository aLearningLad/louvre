import Image from "next/image";
import React from "react";

const SQLTab = () => {
  return (
    <div className=" w-fit h-fit py-1 px-2 flex flex-col items-center text-center bg-white rounded-lg">
      <Image
        src={"/assets/sql.png"}
        width={40}
        height={40}
        alt="PostgreSQL logo"
      />
      <p className=" text-lg lg:text-[10px] text-black">postgreSQL</p>
    </div>
  );
};

export default SQLTab;
