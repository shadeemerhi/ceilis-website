"use client";

import { LIGHTSPEED_LINK } from "@/app/util/constants";
import { useRouter } from "next/navigation";
import Button from "../design-system/Button";
import ReservationButton from "../reservations/ReservationButton";

const ActionButtons = () => {
  const router = useRouter();
  return (
    <>
      <ReservationButton
        text="Reservations"
        variant="border"
        textColor="white"
      />
      <Button
        text="Order Now"
        variant="border"
        onClick={() => router.push(LIGHTSPEED_LINK)}
      />
    </>
  );
};

export default ActionButtons;
