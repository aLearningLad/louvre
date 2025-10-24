import { SiJsonwebtokens } from "react-icons/si";

const JWTTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <SiJsonwebtokens size={40} className=" text-pink-600" />
      <p className=" text-lg lg:text-[7px] text-white">JWT</p>
    </div>
  );
};

export default JWTTab;
