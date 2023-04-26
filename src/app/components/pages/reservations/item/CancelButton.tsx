import { Reservation } from "@prisma/client";
import { useState } from "react";
import { KeyedMutator } from "swr";
import { toast } from "react-toastify";
import Spinner from "@/app/components/design-system/Spinner";
import Button from "@/app/components/design-system/Button";
import { useRouter } from "next/navigation";

const cancelReservation = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => {
  const response = await fetch(`/api/reservations/${id}/cancellation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    throw new Error("Failed to cancel reservation");
  }

  return response.json();
};

interface ICancelButtonProps<MR> {
  reservation: Reservation;
  token: string;
  mutate: KeyedMutator<MR>;
}

const CancelButton = <MR,>({
  reservation,
  token,
  mutate,
}: ICancelButtonProps<MR>) => {
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();

  const onCancelReservation = async () => {
    setIsMutating(true);
    try {
      await cancelReservation({ id: reservation.id, token });

      mutate();

      toast.success("Your reservation has been cancelled");
      router.replace("/");
    } catch (error) {
      console.log("handleConfirmReservation error", error);
      toast.error("Something went wrong on our end. Please try again later");
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
            text="Cancel"
            variant="danger"
            textColor="red-500"
            disabled={reservation.status === "CANCELLED"}
            onClick={onCancelReservation}
          />
        </>
      )}
    </>
  );
};

export default CancelButton;
