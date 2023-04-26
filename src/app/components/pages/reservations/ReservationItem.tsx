"use client";

import { Reservation } from "@prisma/client";
import { format } from "date-fns";
import { ReactElement } from "react";
import StatusChip from "./StatusChip";

interface IReservationItemProps {
  reservation: Reservation;
  actionButtons: ReactElement;
}

const ReservationItem = ({
  reservation,
  actionButtons,
}: IReservationItemProps) => {
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
          <span>
            Date: {format(new Date(reservation.date!), "MMM dd, yyyy")}
          </span>
          <span>Time: {reservation.time}</span>
          <span>Number of Guests: {reservation.numberOfGuests}</span>
          <span>
            Submitted at:{" "}
            {format(
              new Date(reservation.createdAt),
              "MMM dd, yyyy, hh:mm aaaaa'm'"
            )}
          </span>
          <span>
            Last updated at:{" "}
            {format(
              new Date(reservation.updatedAt),
              "MMM dd, yyyy, hh:mm aaaaa'm'"
            )}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <StatusChip status={reservation.status} />
        <div className="flex flex-col gap-4">{actionButtons}</div>
      </div>
    </div>
  );
};

export default ReservationItem;
