import React from "react";
import LandingLeft from "./landing_left";

const Landing = () => {
  return (
    <div className=" h-fit lg:h-[calc(100vh-3rem)] w-full flex flex-col lg:flex-row">
      <LandingLeft />
    </div>
  );
};

export default Landing;
