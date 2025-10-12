import About from "@/components/home/about/about";
import Bubble from "@/components/home/bubble";
import Landing from "@/components/home/landing/landing";
import Navbar from "@/components/home/navbar";
import { SiTypescript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";

export default function Home() {
  return (
    <div className=" w-screen relative min-h-screen flex flex-col bg-blue-950/90 text-white">
      <Navbar />
      <Landing />
      <About />

      <Bubble
        right="12%"
        top="20%"
        height="150px"
        width="150px"
        skill="Typescript"
        backgroundColor="rgba(220, 144, 177, 0.3)"
        icon={<SiTypescript color="white" size={40} />}
        font_size={10}
      />

      <Bubble
        right="1%"
        top="3%"
        height="220px"
        width="220px"
        skill="C# & .NET"
        backgroundColor="rgba(225, 237, 235, 0.24)"
        icon={<SiDotnet color="white" size={50} />}
        font_size={12}
      />

      <Bubble
        right="20%"
        top="32%"
        height="140px"
        width="140px"
        skill="PostgreSQL"
        backgroundColor="rgba(225, 237, 235, 0.24)"
        icon={<BiLogoPostgresql color="white" size={50} />}
        font_size={10}
      />

      <Bubble
        right="1%"
        top="34%"
        height="230px"
        width="230px"
        skill="Node.js"
        backgroundColor="rgba(13, 5, 57, 0.34)"
        icon={<LiaNode color="white" size={60} />}
        font_size={10}
      />
    </div>
  );
}
