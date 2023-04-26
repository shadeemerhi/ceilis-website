import NotAuthorized from "@/app/components/common/NotAuthorized";
import ReservationWrapper from "@/app/components/pages/reservations/ReservationWrapper";
import { userIsManager } from "@/app/util/helpers/userIsManager";
import { getCurrentUser } from "@/app/util/helpers/users";
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
    return <NotAuthorized />;
  }

  return (
    <div className="flex flex-col items-center">
      <ReservationWrapper id={id} />
    </div>
  );
};

export default ReservationPage;
