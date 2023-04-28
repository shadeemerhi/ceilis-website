import { getSearchedReservations } from "@/app/util/helpers/reservations";
import { userIsManager } from "@/app/util/helpers/userIsManager";
import { getCurrentUser } from "@/app/util/helpers/users";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user || !userIsManager(user)) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

    const { url } = req;

    const queryString = url.split("/search")[1];

    const params = new URLSearchParams(queryString);

    const query = params.get("q");

    const reservations = await getSearchedReservations(query);

    return NextResponse.json({ reservations });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch reservations", {
      status: 500,
    });
  }
}
