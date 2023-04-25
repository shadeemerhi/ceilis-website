"use client";

import { Reservation } from "@prisma/client";
import Button from "../../design-system/Button";
import StatusChip from "./StatusChip";

interface IReservationProps {
  reservation: Reservation;
}

const Reservation = ({ reservation }: IReservationProps) => {
  return (
    <div className="flex justify-between p-6 border border-zinc-200 rounded-md">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Customer Details</span>
          <span>{reservation.name}</span>
          <span>{reservation.email}</span>
          <span>{reservation.phone}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold">Reservation Details</span>
          <span>{reservation.name}</span>
          <span>{reservation.email}</span>
          <span>{reservation.phone}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col gap-4">
          <Button
            text="Confirm"
            variant="fill"
            textColor="white"
            disabled={reservation.status !== "PENDING"}
          />
          <Button
            text="Decline"
            variant="danger"
            textColor="red-500"
            disabled={reservation.status !== "PENDING"}
          />
        </div>
        <StatusChip status={reservation.status} />
      </div>
    </div>
  );
};

export default Reservation;
