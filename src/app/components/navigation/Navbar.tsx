"use client";

import { useModal } from "@/app/hooks/useModal";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import ActionButtons from "./ActionButtons";
import NavLinks from "./NavLinks";
import Drawer from "./drawer/Drawer";

const Navbar = () => {
  const {
    modalOpen: open,
    openModal: openDrawer,
    closeModal: closeDrawer,
  } = useModal();

  return (
    <>
      <Drawer open={open} closeDrawer={closeDrawer} />
      <div className="flex sticky top-0 w-full z-10 justify-between px-6 bg-zinc-800 font-light h-24">
        <Link href="/" className="flex items-center">
          <Image
            src="/ceilis-logo-white.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
          />
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-4">
            <NavLinks />
          </div>
          <div className="hidden md:flex gap-4">
            <ActionButtons />
          </div>
          <div className="md:hidden p-3 cursor-pointer text-white">
            <AiOutlineMenu size={26} onClick={openDrawer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
