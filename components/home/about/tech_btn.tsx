"use client";

import { useStore } from "@/app/(store)/store";
import { I_store } from "@/interfaces";
import { FaCubesStacked } from "react-icons/fa6";

const TechBtn = () => {
  const set_is_tech: () => void = useStore(
    (store: I_store) => store.set_is_tech
  );
  const is_tech: boolean = useStore((store: I_store) => store.is_tech);

  return (
    <button
      onClick={() => set_is_tech()}
      className={`w-7/12 cursor-pointer group ${
        !is_tech ? "flex" : "hidden"
      } justify-between items-center hover:pl-5 hover:border-none h-12 hover:bg-neutral-200/10 hover:rounded-lg border-b-[1px] border-neutral-300 `}
    >
      <p className=" text-[14px] flex items-center gap-2 group-hover:text-[18px] transition-all duration-300 ease-in-out ">
        Tech stack
        <FaCubesStacked
          size={16}
          color="white"
          className=" group-hover:flex hidden "
        />
      </p>
      <p className="text-[10px] group-hover:hidden transition-all duration-300 ease-in-out ">
        {">"}
      </p>
    </button>
  );
};

export default TechBtn;
