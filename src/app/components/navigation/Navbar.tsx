"use client";

import { useModal } from "@/app/hooks/useModal";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../design-system/Button";
import NavLink from "../design-system/NavLink";
import ActionButtons from "./ActionButtons";
import Drawer from "./drawer/Drawer";
import { LIGHTSPEED_LINK } from "@/app/util/constants";

const Navbar = () => {
  const {
    modalOpen: open,
    openModal: openDrawer,
    closeModal: closeDrawer,
  } = useModal();

  const onContactUsClick = () => {
    window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight });
  };

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
          <div className="hidden md:flex items-center gap-4">
            <NavLink text="Menu" href="/menu/food" />
            <NavLink text="Gift Cards" href={LIGHTSPEED_LINK} />
            <Button text="Contact Us" onClick={onContactUsClick} />
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
