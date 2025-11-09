import Link from "next/link";
import React from "react";

const AboutBubbles = () => {
  return (
    <div className=" w-full h-full relative flex justify-center items-center">
      <div className=" h-full lg:h-[65%] w-full sm:w-10/12 md:w-8/12 lg:w-10/12 flex flex-col items-center lg:items-start justify-center">
        <h2 className=" text-2xl ">What {"I'm"} currently up to</h2>
        <h3 className=" text-[16px]">
          I am finishing <i>Road Work Club</i>
        </h3>
        <p className="text-[14px] w-8/12">
          It is a tiny & simply structured .NET API built for Kraaifontein
          running clubs.
          <br />
          <br />
          It surfaces rich route data with stopovers, landmarks, and average
          durations for each route. Every route includes suggestions for
          branching offshoots to dynamically extend runs through alternative
          terrain and scenery. It includes authentication & authorization,
          follows the repository pattern, and separates domain models from DTOs.
          <br />
          <br />
          It is an easy breather from the Kafka-bound, multi-database Node.js
          API I feature in my{" "}
          <Link className=" font-semibold text-orange-500" href={"/projects"}>
            Projects
          </Link>
        </p>
        <Link
          className=" w-full sm:w-8/12 md:w-6/12 mt-3 hover:text-white hover:bg-black hover:scale-90 transition-all duration-300 ease-in-out lg:w-fit lg:px-20 h-16 lg:h-12 flex items-center justify-center bg-white text-black rounded-[7px] text-[14px] "
          href={"/projects"}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default AboutBubbles;
