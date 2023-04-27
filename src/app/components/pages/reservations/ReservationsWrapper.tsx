"use client";

import useReservations from "@/app/hooks/useReservations";
import Header from "./Header";
import Loader from "../../common/Loader";
import ReservationItem from "./ReservationItem";
import AdminButtons from "./item/AdminButtons";

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
              actionButtons={
                <AdminButtons reservation={reservation} mutate={mutate} />
              }
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ReservationsWrapper;
