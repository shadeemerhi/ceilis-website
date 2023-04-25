import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ReservationsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
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
