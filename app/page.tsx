import About from "@/components/home/about/about";
import Bubble from "@/components/home/bubble";
import Landing from "@/components/home/landing/landing";
import Navbar from "@/components/home/navbar";
import { SiTypescript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";
import { FaFlutter } from "react-icons/fa6";
import EmptyBuble from "@/components/home/empty_buble";
import { SiNextdotjs } from "react-icons/si";

export default function Home() {
  return (
    <div className=" w-full relative overflow-hidden min-h-screen flex flex-col bg-conic from-blue-950/40 via-cyan-800 to text-white">
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
        right="16%"
        top="10%"
        height="120px"
        width="120px"
        skill="Flutter"
        backgroundColor="rgba(44, 142, 141, 0.24)"
        icon={<FaFlutter color="white" size={30} />}
        font_size={8}
      />

      <Bubble
        right="-2%"
        top="3%"
        height="220px"
        width="220px"
        skill="C# & .NET"
        backgroundColor="rgba(225, 237, 235, 0.24)"
        icon={<SiDotnet color="white" size={50} />}
        font_size={12}
      />

      <Bubble
        right="19%"
        top="31%"
        height="140px"
        width="140px"
        skill="PostgreSQL"
        backgroundColor="rgba(225, 237, 235, 0.24)"
        icon={<BiLogoPostgresql color="white" size={50} />}
        font_size={10}
      />

      <Bubble
        right="0%"
        top="31%"
        height="230px"
        width="230px"
        skill="Node.js"
        backgroundColor="rgba(13, 5, 57, 0.34)"
        icon={<LiaNode color="white" size={60} />}
        font_size={10}
      />
      <Bubble
        right="18%"
        top="44%"
        height="130px"
        width="130px"
        skill="Next.js"
        backgroundColor="rgba(13, 5, 57, 0.34)"
        icon={<SiNextdotjs color="white" size={30} />}
        font_size={10}
      />

      <EmptyBuble
        backgroundColor="rgba(225, 237, 235, 0.24)"
        height="100px"
        width="100px"
        right="3%"
        top="22%"
      />
      <EmptyBuble
        backgroundColor="rgba(13, 5, 57, 0.24)"
        height="100px"
        width="100px"
        right="25%"
        top="23%"
      />
      <EmptyBuble
        backgroundColor="rgba(220, 144, 177, 0.3)"
        height="90px"
        width="90px"
        right="15%"
        top="2.5%"
      />
    </div>
  );
}
