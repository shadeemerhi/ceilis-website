import NotAuthorized from "@/app/components/common/NotAuthorized";
import ReservationsWrapper from "@/app/components/pages/reservations/ReservationsWrapper";
import { userIsManager } from "@/app/util/helpers/userIsManager";
import { getCurrentUser } from "@/app/util/helpers/users";
import { redis } from "@/redis/client";
import { redirect } from "next/navigation";

const ReservationsPage = async () => {
  const user = await getCurrentUser();

  await redis.set("test", "roflbuddddddd");

  const value = await redis.get("test");

  console.log("HERE IS THE VALUE", value);

  if (!user) {
    redirect("/admin/login");
  }

  if (!userIsManager(user)) {
    return <NotAuthorized />;
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
