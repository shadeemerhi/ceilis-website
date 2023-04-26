"use client";

import { Reservation } from "@prisma/client";
import { useState } from "react";
import { toast } from "react-toastify";
import { KeyedMutator } from "swr";
import Button from "../../design-system/Button";
import Spinner from "../../design-system/Spinner";
import StatusChip from "./StatusChip";
import { confirmReservation } from "./ReservationWrapper";
import { format } from "date-fns";

interface IReservationItemProps<MR> {
  reservation: Reservation;
  mutate: KeyedMutator<MR>;
}

const ReservationItem = <MR,>({
  reservation,
  mutate,
}: IReservationItemProps<MR>) => {
  const [isMutating, setIsMutating] = useState(false);

  const onConfirmReservation = async () => {
    setIsMutating(true);

    try {
      await confirmReservation(reservation.id);

      mutate();
      toast.success(
        "Successfully confirm reservation. The customer has been notified"
      );
    } catch (error) {
      console.log("handleConfirmReservation error", error);
      toast.error("Failed to confirm reservation");
    } finally {
      setIsMutating(false);
    }
  };

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
        <div className="flex flex-col gap-4">
          {isMutating ? (
            <Spinner color="text-amber-500" />
          ) : (
            <>
              <Button
                text="Confirm"
                variant="fill"
                textColor="white"
                disabled={reservation.status !== "PENDING"}
                onClick={onConfirmReservation}
              />
              <Button
                text="Decline"
                variant="danger"
                textColor="red-500"
                disabled={reservation.status !== "PENDING"}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationItem;
