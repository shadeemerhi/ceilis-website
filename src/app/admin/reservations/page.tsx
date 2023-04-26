import ReservationsWrapper from "@/app/components/pages/reservations/ReservationsWrapper";
import { getCurrentUser, userIsManager } from "@/app/util/helpers/users";
import { redirect } from "next/navigation";

const ReservationsPage = async () => {
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
      <div className="w-full md:w-5/6 py-10 px-6 max-w-[900px]">
        <ReservationsWrapper />
      </div>
    </div>
  );
};

export default ReservationsPage;
