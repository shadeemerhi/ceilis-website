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
    <div className="flex flex-col justify-end items-center h-52">
      <div className="flex justify-between w-full md:w-4/5">
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
        selected && "bg-zinc-300 font-semibold text-black"
      }`}
    >
      <span>{text}</span>
    </Link>
  );
};

export default MenuSelect;
