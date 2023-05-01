"use client";

import { LIGHTSPEED_LINK } from "@/app/util/constants";
import Link from "next/link";
import Button from "../design-system/Button";
import ReservationButton from "../reservations/ReservationButton";

const ActionButtons = () => {
  return (
    <>
      <ReservationButton
        text="Reservations"
        variant="border"
        textColor="white"
      />
      <Link
        href={LIGHTSPEED_LINK}
        className="w-full whitespace-nowrap"
        target="_blank"
      >
        <Button text="Order Now" variant="border" />
      </Link>
    </>
  );
};

export default ActionButtons;
