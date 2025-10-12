import React from "react";

interface I_bubble {
  top: string;
  right: string;
}

const Bubble: React.FC<I_bubble> = ({ right, top }) => {
  return (
    <div
      className={` absolute bg-white w-[160px] h-[160px] rounded-full flex justify-center items-center `}
      style={{ top: top, right: right }}
    ></div>
  );
};

export default Bubble;
