import { tech_tab_info } from "@/dev_data/tech_tab_info";
import Image from "next/image";

const TechStack = () => {
  const upperList: T_tech_tab_info[] = tech_tab_info.slice(0, 4);
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center border-2 border-white ">
      <h1>Technologies I Build With</h1>
      <div className=" w-full h-[60%] border-2 border-white">
        {/* 5 items here */}
        <div className=" w-full h-fit flex items-center justify-around">
          {upperList.map(({ id, img_url, title }, index) => (
            <div
              className=" flex flex-col items-center text-center justify-center"
              key={id}
            >
              <Image
                src={img_url}
                width={30}
                height={30}
                alt="technology logo"
              />
              <p className=" text-[8px]">{title}</p>
            </div>
          ))}
        </div>

        {/* 3 items here */}
      </div>
    </div>
  );
};

export default TechStack;
