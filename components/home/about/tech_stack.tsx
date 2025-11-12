import { tech_tab_info } from "@/dev_data/tech_tab_info";
import { T_tech_tab_info } from "@/types";
import Image from "next/image";
import Link from "next/link";

const TechStack = () => {
  const upperList: T_tech_tab_info[] = tech_tab_info.slice(0, 5);
  const lowerList: T_tech_tab_info[] = tech_tab_info.slice(5, 8);
  const thirdTier: T_tech_tab_info[] = tech_tab_info.slice(8);

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center text-center ">
      <h1 className=" text-[20px]">Technologies I Build With</h1>
      <div className=" w-full  h-fit flex flex-col py-3 gap-6 ">
        {/* 5 items here */}
        <div className=" w-full h-fit flex items-center justify-center gap-12">
          {upperList.map(({ id, img_url, title }, index) => (
            <div
              className=" flex flex-col items-center text-center justify-center"
              key={id}
            >
              <Image
                src={img_url}
                width={40}
                height={40}
                alt="technology logo"
              />
              <p className=" text-[12px]">{title}</p>
            </div>
          ))}
        </div>

        {/* 3 items here */}
        <div className=" w-full h-fit flex items-center justify-center gap-12">
          {lowerList.map(({ id, img_url, title }, index) => (
            <div
              className=" flex flex-col items-center text-center justify-center"
              key={id}
            >
              <Image
                src={img_url}
                width={35}
                height={35}
                alt="technology logo"
              />
              <p className=" text-[12px]">{title}</p>
            </div>
          ))}
        </div>

        {/* 2 items here */}
        <div className=" w-full h-fit flex items-center justify-center gap-12">
          {thirdTier.map(({ id, img_url, title }, index) => (
            <div
              className=" flex flex-col items-center text-center justify-center"
              key={id}
            >
              <Image
                src={img_url}
                width={28}
                height={28}
                alt="technology logo"
              />
              <p className=" text-[10px]">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <p className=" mt-5 text-[14px] w-8/12 text-center">
        {"I've"} just recently begun working more deeply with <i>Python</i> on
        Kaggle. My broader aspirations lie in data engineering and cloud
        infrastructure, and {"I'm"} developing skills using {"Google's"}{" "}
        BigQuery and the Pandas library.
        <br />
        <br />
        In time, I aim to design and deploy comprehensive ETL pipelines and
        lightweight machine learning models trained on data I prepare myself —
        as my understanding of data systems, machine learning, and cloud
        deployments continues to compound.
      </p>

      <Link
        href={"/projects"}
        className=" mt-7 flex justify-center items-center w-fit cursor-pointer hover:bg-black hover:text-white hover:scale-95 transition-all duration-300 ease-in-out px-6 bg-white text-black rounded-[6px] h-16 lg:h-12 text-[14px]"
      >
        View My Projects
      </Link>
    </div>
  );
};

export default TechStack;
