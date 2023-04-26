import ReservationItem from "@/app/components/pages/reservations/ReservationItem";
import ReservationWrapper from "@/app/components/pages/reservations/ReservationWrapper";
import { getCurrentUser, userIsManager } from "@/app/util/helpers/users";
import { IGetReservationResponse } from "@/app/util/types";
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

  if (!userIsManager(user)) {
    return (
      <div className="flex justify-center items-center">
        <span>Not authorized</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <ReservationWrapper id={id} />
    </div>
  );
};

export default ReservationPage;
