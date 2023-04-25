"use client";

import Input from "../../design-system/Input";

const Header = () => {
  return (
    <div className="flex justify-between">
      <span className="text-2xl font-bold">Reservations</span>
      <div className="w-[400px]">
        <Input
          placeholder="Search..."
          className="w-full border-2 border-red-500"
        />
      </div>
    </div>
  );
};

export default Header;
