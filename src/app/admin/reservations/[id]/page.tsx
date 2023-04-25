import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCurrentUser } from "@/app/util/helpers/users";
import { IGetReservationResponse } from "@/app/util/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface IReservationPageParams {
  params: {
    id: string;
  };
}

const ReservationPage = async ({ params: { id } }: IReservationPageParams) => {
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

  const response = await fetch(
    `${process.env.BASE_URL}/api/reservations/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch reservation");
  }

  const data = (await response.json()) as IGetReservationResponse;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-6 w-full md:w-5/6 py-10 px-6">
        <span className="text-2xl font-bold">Reservation {id}</span>
        {/* {data.reservations.map((reservation) => (
          <Reservation reservation={reservation} />
        ))} */}
      </div>
    </div>
  );
};

export default ReservationPage;
