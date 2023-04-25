import { getCurrentUser } from "@/app/util/helpers/users";
import { redirect } from "next/navigation";

const ReservationsPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-5/6 border border-red-500">
        RESERVATIONS PAGE
      </div>
    </div>
  );
};

export default ReservationsPage;
