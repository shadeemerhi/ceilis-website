import ReservationWrapper from "@/app/components/pages/reservations/ReservationWrapper";
import { getCurrentUser } from "@/app/util/helpers/users";
import { redirect } from "next/navigation";

interface IReservationPageParams {
  params: {
    id: string;
    token: string;
  };
}

const ReservationPage = async ({
  params: { id, token },
}: IReservationPageParams) => {
  /**
   * @todo
   * Validate token
   */

  return (
    <div className="flex flex-col items-center">
      <ReservationWrapper id={id} cancellationToken={token} />
    </div>
  );
};

export default ReservationPage;
