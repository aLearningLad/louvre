import About from "@/components/home/about/about";
import Bubble from "@/components/home/bubble";
import Landing from "@/components/home/landing/landing";
import Navbar from "@/components/home/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-screen relative min-h-screen flex flex-col bg-blue-950/90 text-white">
      <Navbar />
      <Landing />
      <About />

      <Bubble right="12%" top="40%" />
      <Bubble right="29%" top="20%" />
      <Bubble right="40%" top="75%" />
    </div>
  );
}
