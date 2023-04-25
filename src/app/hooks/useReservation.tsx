import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import {
  IGetReservationsResponse,
  IUpdateReservationInput,
} from "../util/types";

const useReservation = () => {
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isPending || isFetching;
  const router = useRouter();

  //   const getReservations = async () => {
  //     try {
  //       const response = await fetch("/api/reservations");

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch reservations");
  //       }

  //       const data = (await response.json()) as IGetReservationsResponse;

  //       const { reservations } = data;

  //       return reservations;
  //     } catch (error) {
  //       console.log("getReservations error", error);
  //       throw error;
  //     }
  //   };

  const getReservation = async (id: string) => {};

  const updateReservation = async (input: IUpdateReservationInput) => {};

  const deleteReservation = async (id: string) => {};

  return {
    // getReservations,
    getReservation,
    updateReservation,
    deleteReservation,
    isMutating,
  };
};

export default useReservation;
