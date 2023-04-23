"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISelectionItem {
  text: string;
  pathname: string;
}

const SELECTION_ITEMS: Array<ISelectionItem> = [
  {
    text: "DRINKS",
    pathname: "/menu/drink",
  },
  {
    text: "FOOD",
    pathname: "/menu/food",
  },
  {
    text: "HAPPY HOUR",
    pathname: "/menu/happy-hour",
  },
];

const MenuSelect = () => {
  const pathname = usePathname();

  return (
    <div className="sticky w-full top-0 flex flex-col justify-end items-center h-36 bg-zinc-800">
      <div className="flex justify-between w-full md:w-5/6">
        {SELECTION_ITEMS.map((item) => (
          <MenuSelectItem item={item} selected={item.pathname === pathname} />
        ))}
      </div>
    </div>
  );
};

interface IMenuSelectItemProps {
  item: ISelectionItem;
  selected: boolean;
}

const MenuSelectItem = ({
  item: { text, pathname },
  selected,
}: IMenuSelectItemProps) => {
  return (
    <Link
      href={pathname}
      className={`flex-1 text-center tracking-widest p-2 font-light cursor-pointer ${
        selected ? "bg-white font-semibold text-black" : "bg-zinc-200"
      }`}
    >
      <span className="whitespace-nowrap">{text}</span>
    </Link>
  );
};

export default MenuSelect;
