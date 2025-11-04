import { nav_links } from "@/dev_data/nav_links";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" w-full h-12 flex justify-center lg:justify-end items-center">
      {/* mobile --> button on landing opens modal with about, projects, contact, github logo */}

      {/* large screens */}
      <div className=" hidden lg:flex w-5/12 h-full justify-around ">
        <span className=" flex-8/12 flex justify-around items-center h-full ">
          <a key={1} href="#about">
            <p className=" text-[12px] ">ABOUT</p>
          </a>
          {nav_links.map(({ href, id, title }, index) => (
            <Link key={id} href={href}>
              <p className=" text-[12px] ">{title}</p>
            </Link>
          ))}
        </span>

        <span className=" flex-4/12 h-full flex justify-center items-center">
          <Link href={"https://github.com/aLearningLad/louvre"} target="_blank">
            <FaGithub size={22} />
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
