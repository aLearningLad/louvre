import Image from "next/image";
import React from "react";

const KafkaTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <Image
        src={"/assets/kafka.png"}
        width={30}
        height={30}
        alt="next.js logo"
      />
      <p className=" text-lg lg:text-[7px] text-white">Apache Kafka</p>
    </div>
  );
};

export default KafkaTab;
