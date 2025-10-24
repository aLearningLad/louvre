import { IoLogoDocker } from "react-icons/io5";

const DockerTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <IoLogoDocker size={42} className=" text-cyan-600" />
      <p className=" text-lg lg:text-[7px] text-white">Docker</p>
    </div>
  );
};

export default DockerTab;
