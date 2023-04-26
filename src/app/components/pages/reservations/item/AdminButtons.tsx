import Button from "@/app/components/design-system/Button";
import { Reservation } from "@prisma/client";
import { confirmReservation } from "../ReservationWrapper";
import { KeyedMutator } from "swr";
import { useState } from "react";
import Spinner from "@/app/components/design-system/Spinner";
import { toast } from "react-toastify";

interface IAdminButtonsProps<MR> {
  reservation: Reservation;
  mutate: KeyedMutator<MR>;
}

const AdminButtons = <MR,>({ reservation, mutate }: IAdminButtonsProps<MR>) => {
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
      console.log("onConfirmReservation error", error);
      toast.error("Failed to confirm reservation");
    } finally {
      setIsMutating(false);
    }
  };

  return (
    <>
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
    </>
  );
};

export default AdminButtons;
