"use client";

import NavLink from "@/app/components/design-system/NavLink";
import UserActions from "@/app/components/navigation/UserActions";
import {
  BUSINESS_NAME,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LIGHTSPEED_LINK,
} from "@/app/util/constants";
import Link from "next/link";
import { IconType } from "react-icons";
import { BiCopyright } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";

const LOCATION_ADDRESS = "8650 112 Ave NW, Calgary, AB T3R 0R5";
const LOCATION_EMAIL = "contact@ceilisroyaloak.com";
const LOCATION_PHONE = "587-352-0800";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-8 w-full bg-zinc-800 text-white px-10 pt-10 md:px-20 pb-32 md:pb-16">
      <div className="flex flex-col items-center sm:items-start gap-6">
        <div className="flex gap-3">
          <Link href={FACEBOOK_LINK} target="_blank">
            <RiFacebookFill size={24} />
          </Link>
          <Link href={INSTAGRAM_LINK} target="_blank">
            <BsInstagram size={22} />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-center">
          <NavLink text="Gift Cards" href={LIGHTSPEED_LINK} />
          <NavLink text="About Us" href="/about" />
        </div>
        <BusinessInformation />
      </div>
      <div className="flex justify-center md:justify-between items-center">
        <div className="flex flex-col items-center sm:items-start gap-1 text-sm text-zinc-400">
          <div className="flex items-center gap-1">
            <BiCopyright />
            <span>{`${BUSINESS_NAME}, 2023.`}</span>
          </div>
          <span>Developed by Shadee Merhi</span>
        </div>
        <div className="hidden md:flex">
          <UserActions />
        </div>
      </div>
    </div>
  );
};

const BusinessInformation = () => {
  return (
    <div className="flex flex-col gap-3 text-zinc-300">
      <Link
        href={`https://maps.google.com/?q=Ceili's Royal Oak, ${LOCATION_ADDRESS}`}
        target="_blank"
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <HiOutlineLocationMarker size={24} />
        <span>{LOCATION_ADDRESS}</span>
      </Link>
      <Link
        href={`mailto:${LOCATION_EMAIL}`}
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <HiOutlineMail size={24} />
        <span>{LOCATION_EMAIL}</span>
      </Link>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <HiOutlinePhone size={24} />
        <span>{LOCATION_PHONE}</span>
      </div>
    </div>
  );
};

export default Footer;
