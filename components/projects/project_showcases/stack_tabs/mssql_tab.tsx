import { DiMsqlServer } from "react-icons/di";

const MSSQLTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <DiMsqlServer size={40} className=" text-pink-600" />
      <p className=" text-lg lg:text-[7px] text-white">MS SQLServer</p>
    </div>
  );
};

export default MSSQLTab;
