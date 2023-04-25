import Reservations from "@/app/components/pages/reservations/Reservations";
import { getCurrentUser } from "@/app/util/helpers/users";
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
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-5/6 py-10 px-6 max-w-[900px]">
        <Reservations />
      </div>
    </div>
  );
};

export default ReservationsPage;
