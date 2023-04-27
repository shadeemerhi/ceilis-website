"use client";

import NavLink from "@/app/components/design-system/NavLink";
import UserActions from "@/app/components/navigation/UserActions";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { BUSINESS_NAME } from "@/app/util/constants";
import { IconType } from "react-icons";
import { BiCopyright } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";

const LOCATION_ADDRESS = "#7155 8650 112 Ave NW, Calgary, AB T3R 0R5";
const LOCATION_EMAIL = "royaloak@ceilis.com";
const LOCATION_PHONE = "587-352-0800";

const Footer = () => {
  const { user, userIsManager } = useCurrentUser();
  return (
    <div className="flex flex-col justify-between gap-8 w-full bg-zinc-800 text-white px-10 pt-10 md:px-20 pb-32 md:pb-16">
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
      <BusinessInformationItem
        item={{ icon: HiOutlineLocationMarker, text: LOCATION_ADDRESS }}
      />
      <BusinessInformationItem
        item={{ icon: HiOutlineMail, text: LOCATION_EMAIL }}
      />
      <BusinessInformationItem
        item={{ icon: HiOutlinePhone, text: LOCATION_PHONE }}
      />
    </div>
  );
};

const BusinessInformationItem = ({
  item,
}: {
  item: {
    icon: IconType;
    text: string;
  };
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <item.icon size={24} />
      <span>{item.text}</span>
    </div>
  );
};

export default Footer;
