import { ICreateReservationInput } from "../types";
import { sendNewReservationEmailToAdmins } from "./email";
import prisma from "@/prisma/client";

export const handleNewReservation = async (input: ICreateReservationInput) => {
  /**
   * Create reservation
   */
  const reservation = await prisma.reservation.create({
    data: input,
  });

  /**
   * Send email to admins
   */
  await sendNewReservationEmailToAdmins(reservation);

  return reservation;
};
