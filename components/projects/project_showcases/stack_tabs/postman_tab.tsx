import { SiPostman } from "react-icons/si";

const PostmanTab = () => {
  return (
    <div className=" flex flex-col items-center text-center overflow-clip rounded-[6px]">
      <SiPostman
        size={42}
        className=" text-orange-500 bg-white rounded-[6px] p-1"
      />
      <p className=" text-lg lg:text-[7px] text-white">Postman</p>
    </div>
  );
};

export default PostmanTab;
