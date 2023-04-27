import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";

const ComingSoon = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-6">
      <span className="text-2xl">This page is coming soon!</span>
      <IoFastFoodOutline size={50} />
    </div>
  );
};

export default ComingSoon;
