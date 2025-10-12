import { I_empty_bubble } from "@/interfaces";
import React from "react";

const EmptyBuble: React.FC<I_empty_bubble> = ({
  backgroundColor,
  height,
  right,
  top,
  width,
}) => {
  return (
    <div
      className=" rounded-full absolute"
      style={{
        height,
        right,
        top,
        width,
        backgroundColor,
      }}
    ></div>
  );
};

export default EmptyBuble;
