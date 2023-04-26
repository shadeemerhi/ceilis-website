"use client";

import { IGetReservationResponse } from "@/app/util/types";
import useSWR from "swr";
import Loader from "./Loader";
import ReservationItem from "./ReservationItem";
import Link from "next/link";

export const confirmReservation = async (id: string) => {
  const response = await fetch(`/api/reservations/${id}/confirmation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to confirm reservation");
  }

  return response.json();
};

const getReservation = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch reservation");
  }

  return response.json();
};

interface IReservationWrapperProps {
  id: string;
}

const ReservationWrapper = ({ id }: IReservationWrapperProps) => {
  const { data, mutate, isLoading, error } = useSWR<IGetReservationResponse>(
    `/api/reservations/${id}`,
    getReservation
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data?.reservation && !isLoading) {
    return <div>Reservation not found</div>;
  }

  if (error) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full md:w-5/6 py-10 px-6">
      <span className="text-2xl font-bold">Reservation {id}</span>
      {data?.reservation ? (
        <ReservationItem reservation={data.reservation} mutate={mutate} />
      ) : null}
      <Link href={"/admin/reservations"} className="underline">
        View all Reservations
      </Link>
    </div>
  );
};

export default ReservationWrapper;
