import NavLink from "@/app/components/design-system/NavLink";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between  gap-8 w-full bg-zinc-800 text-white px-10 pt-24 md:px-20 pb-32 md:pb-16">
      <div className="flex flex-col items-center sm:items-start gap-6">
        <div className="flex gap-3">
          <RiFacebookFill size={24} />
          <BsInstagram size={22} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-center">
          <NavLink text="Gift Cards" href="/gift-cards" />
          <NavLink text="Contact Us" href="/contact" />
          <NavLink text="About Us" href="/about" />
        </div>
      </div>
      <div className="flex items-center gap-1 text-sm text-zinc-400">
        <BiCopyright />
        <span>
          Ceili's Modern Irish Pub. Developed by{" "}
          <Link href="">Shadee Merhi</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
