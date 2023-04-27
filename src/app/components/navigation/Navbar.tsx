"use client";

import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import NavLink from "../design-system/NavLink";
import ActionButtons from "./ActionButtons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex sticky top-0 w-full z-10 justify-between px-6 bg-zinc-800 font-light h-24">
      <Link href="/" className="flex items-center">
        <Image
          src="/ceilis-logo-black.png"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-4">
          <NavLink text="Menu" href="/menu/food" />
          <NavLink text="Gift Cards" href="/gift-cards" />
          <NavLink text="Contact Us" href="/contact" />
        </div>
        <div className="hidden md:flex gap-4">
          <ActionButtons />
        </div>
        <div className="md:hidden p-3 cursor-pointer text-white">
          <AiOutlineMenu size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
