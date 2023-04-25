import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface IReservationPageParams {
  params: {
    id: string;
  };
}

const ReservationPage = async ({ params: { id } }: IReservationPageParams) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return <div>Single Reservation Page {id}</div>;
};

export default ReservationPage;
