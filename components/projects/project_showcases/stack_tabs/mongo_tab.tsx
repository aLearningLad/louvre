import Image from "next/image";
import React from "react";

const MongoTab = () => {
  return (
    <div
      key={1}
      className=" w-fit h-fit py-1 px-2 flex flex-col bg-white items-center text-center rounded-lg"
    >
      <Image
        className=" bg-white rounded-lg"
        src={"/assets/mongo.png"}
        width={40}
        height={40}
        alt="tech stack logo"
      />
      <p className=" text-lg lg:text-[7px] text-black">MongoDB</p>
    </div>
  );
};

export default MongoTab;
