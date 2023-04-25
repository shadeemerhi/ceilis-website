"use client";

import { useState } from "react";
import Input from "../../design-system/Input";

interface IHeaderProps {
  executeSearch: (query: string) => void;
  clearSearch: () => void;
}

const Header = ({ executeSearch, clearSearch }: IHeaderProps) => {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!search) {
      return;
    }

    executeSearch(search);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;

    if (!value) {
      clearSearch();
    }

    setSearch(value);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-2 justify-between">
      <span className="text-2xl font-bold">Reservations</span>
      <form className="w-full sm:w-[400px]" onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Search..."
          className="w-full border-2 border-red-500"
          onChange={handleSearchInputChange}
        />
      </form>
    </div>
  );
};

export default Header;
