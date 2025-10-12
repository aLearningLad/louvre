import { nav_links } from "@/dev_data/nav_links";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" w-full h-12 flex justify-center lg:justify-end items-center">
      {/* mobile --> single button opens modal with about, projects, contact, github logo */}

      {/* large screens */}
      <div className=" hidden lg:flex w-5/12 h-full justify-around ">
        <span className=" flex-8/12 flex justify-around items-center h-full ">
          {nav_links.map(({ href, id, title }, index) => (
            <Link key={id} href={href}>
              <p className=" text-[10px] ">{title}</p>
            </Link>
          ))}
        </span>

        <span className=" flex-4/12 h-full flex justify-center items-center"></span>
      </div>
    </nav>
  );
};

export default Navbar;
