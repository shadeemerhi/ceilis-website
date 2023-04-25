"use client";

import useReservations from "@/app/hooks/useReservations";
import Spinner from "../../design-system/Spinner";
import Header from "./Header";
import Reservation from "./Reservation";

const Reservations = () => {
  const { reservations, isLoading, error, executeSearch, clearSearch } =
    useReservations();

  return (
    <div className="flex flex-col gap-6 overflow-scroll">
      <Header executeSearch={executeSearch} clearSearch={clearSearch} />
      {isLoading ? (
        <div className="flex justify-center py-10">
          <Spinner size="w-16 h-16" color="text-amber-500" />
        </div>
      ) : (
        <>
          {reservations.map((reservation) => (
            <Reservation reservation={reservation} />
          ))}
        </>
      )}
    </div>
  );
};

export default Reservations;
