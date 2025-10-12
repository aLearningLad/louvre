import Landing from "@/components/home/landing/landing";
import Navbar from "@/components/home/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-screen relative min-h-screen flex flex-col bg-blue-950/90 text-white">
      <Navbar />
      <Landing />
    </div>
  );
}
