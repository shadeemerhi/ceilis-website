import { ICreateReservationInput } from "../types";
import { sendNewReservationEmailToAdmins } from "./email";
import prisma from "@/prisma/client";

export const getSearchedReservations = async (query: string | null) => {
  return await prisma.reservation.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query || "",
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: query || "",
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: query || "",
          },
        },
      ],
    },
  });
};

export const getReservations = async () => {
  /**
   * Can add pagination and other optimizations later
   */
  return await prisma.reservation.findMany({});
};

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
