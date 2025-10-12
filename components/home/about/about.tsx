import React from "react";
import AboutLeft from "./about_left";

const About = () => {
  return (
    <section
      id="about"
      className=" w-full h-fit lg:h-[100vh] flex flex-col lg:flex-row border-2 border-white px-2 lg:px-20 pt-2 lg:pt-8"
    >
      <AboutLeft />
    </section>
  );
};

export default About;
