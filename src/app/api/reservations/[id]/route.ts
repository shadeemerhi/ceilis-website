import {
  getReservation,
  getReservations,
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
    const user = await getCurrentUser();

    if (!user || !userIsManager(user)) {
      return new NextResponse("Not authorized");
    }

    const { id } = params;

    const reservation = await getReservation(id);

    return NextResponse.json({ reservation });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to retrieve reservations", {
      status: 500,
    });
  }
}
