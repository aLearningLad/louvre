import Image from "next/image";

const S3Tab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <Image
        src={"/assets/aws.png"}
        width={50}
        height={50}
        alt="amazon web services logo"
        className=" rounded-[6px] overflow-clip"
      />
      <p className=" text-lg lg:text-[7px] text-white">AWS S3</p>
    </div>
  );
};

export default S3Tab;
