import Header from "@/app/components/pages/reservations/Header";
import Reservation from "@/app/components/pages/reservations/Reservation";
import { getCurrentUser } from "@/app/util/helpers/users";
import { IGetReservationsResponse } from "@/app/util/types";
import { redirect } from "next/navigation";

const ReservationsPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/admin/login");
  }

  if (!user.roles.includes("MANAGER")) {
    return (
      <div className="flex justify-center items-center">
        <span>Not authorized</span>
      </div>
    );
  }

  const response = await fetch(`${process.env.BASE_URL}/api/reservations`);

  if (!response.ok) {
    throw new Error("Failed to fetch reservations");
  }

  const data = (await response.json()) as IGetReservationsResponse;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-6 w-full md:w-5/6 py-10 px-6">
        <Header />
        {data.reservations.map((reservation) => (
          <Reservation reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

export default ReservationsPage;
