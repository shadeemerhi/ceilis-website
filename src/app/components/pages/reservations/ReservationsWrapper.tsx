"use client";

import useReservations from "@/app/hooks/useReservations";
import Header from "./Header";
import Loader from "./Loader";
import ReservationItem from "./ReservationItem";

const ReservationsWrapper = () => {
  const { reservations, mutate, isLoading, error, executeSearch, clearSearch } =
    useReservations();

  return (
    <div className="flex flex-col gap-6">
      <Header executeSearch={executeSearch} clearSearch={clearSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {reservations.map((reservation) => (
            <ReservationItem
              key={reservation.id}
              reservation={reservation}
              mutate={mutate}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ReservationsWrapper;
