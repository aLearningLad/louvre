"use client";

import { useState } from "react";

import { FaRegEye } from "react-icons/fa";

interface I_demo_routes {
  route_demos?: T_route_demo[];
}

const DemoRoutes: React.FC<I_demo_routes> = ({ route_demos }) => {
  return (
    <div className=" w-full h-[60%] bg-slate-800 flex flex-col items-center ">
      <h3 className=" text-[12px]">
        Route Architecture Examples - See GitHub for full documentation{" "}
      </h3>
      {/* dyanmic part here to show excalidraw images */}
      <div className=" w-full h-full border-2 border-white flex">
        {/* side bar to pick route */}
        <div className=" w-4/12 h-full border-2 border-orange-400 justify-around flex flex-col px-2">
          {route_demos?.map(
            ({ id, img_setter_fxn, route_name, route_type }) => (
              <button
                key={id}
                className=" w-full group hover:scale-95 transition-all duration-300 ease-in-out hover:bg-slate-600/70 rounded-lg cursor-pointer relative h-12 bg-slate-600/30 flex justify-center gap-2 items-center"
              >
                <FaRegEye
                  size={18}
                  className=" absolute right-2 hidden group-hover:flex "
                />
                <h3
                  className={` text-[14px] absolute left-2 ${
                    route_type === "POST" && "text-pink-400"
                  }
                        ${route_type === "GET" && "text-green-500"}
                        ${route_type === "DELETE" && "text-orange-500"}
                        font-semibold `}
                >
                  {route_type}
                </h3>
                <p className=" text-[12px] italic">{route_name}</p>
              </button>
            )
          )}
        </div>

        {/* route image shown here */}
        <div className=" w-8/12 h-full flex justify-center items-center px-12 py-4 rounded-lg bg-slate-600"></div>
      </div>
    </div>
  );
};

export default DemoRoutes;
