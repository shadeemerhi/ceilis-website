import {
  getReservation,
  isValidReservationToken,
} from "@/app/util/helpers/reservations";
import { userIsManager } from "@/app/util/helpers/userIsManager";
import { getCurrentUser } from "@/app/util/helpers/users";
import { NextResponse } from "next/server";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: RouteParams) {
  try {
    const { id } = params;
    const user = await getCurrentUser();
    const token = req.headers.get("authorization")?.split("Bearer ")[1];

    const hasPermission =
      (user && userIsManager(user)) ||
      (token && (await isValidReservationToken(id, token)));

    if (!hasPermission) {
      return new NextResponse("Not authorized");
    }

    const reservation = await getReservation(id);

    return NextResponse.json({ reservation });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to retrieve reservations", {
      status: 500,
    });
  }
}
