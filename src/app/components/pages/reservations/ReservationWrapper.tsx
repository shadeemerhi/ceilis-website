"use client";

import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { userIsManager } from "@/app/util/helpers/userIsManager";
import { IGetReservationResponse } from "@/app/util/types";
import Link from "next/link";
import useSWR from "swr";
import Loader from "./Loader";
import ReservationItem from "./ReservationItem";
import AdminButtons from "./item/AdminButtons";
import CancelButton from "./item/CancelButton";

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
  cancellationToken?: string;
}

const ReservationWrapper = ({
  id,
  cancellationToken,
}: IReservationWrapperProps) => {
  const { data, mutate, isLoading, error } = useSWR<IGetReservationResponse>(
    `/api/reservations/${id}`,
    getReservation
  );

  const { user } = useCurrentUser();

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
        <ReservationItem
          reservation={data.reservation}
          actionButtons={
            cancellationToken ? (
              <CancelButton
                reservation={data.reservation}
                mutate={mutate}
                token={cancellationToken}
              />
            ) : (
              <AdminButtons reservation={data.reservation} mutate={mutate} />
            )
          }
        />
      ) : null}
      {user && userIsManager(user) && (
        <Link href={"/admin/reservations"} className="underline">
          View all Reservations
        </Link>
      )}
    </div>
  );
};

export default ReservationWrapper;
