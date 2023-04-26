import { ICreateReservationInput } from "../types";
import {
  sendNewReservationEmailToAdmins,
  sendReservationConfirmationEmailToCustomer,
} from "./email";
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
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getReservations = async () => {
  /**
   * Can add pagination and other optimizations later
   */
  return await prisma.reservation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
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

export const getReservation = async (id: string) => {
  return await prisma.reservation.findUnique({
    where: {
      id,
    },
  });
};

export const handleReservationConfirmation = async (id: string) => {
  try {
    /**
     * Get reservation
     */
    const reservation = await prisma.reservation.findUnique({
      where: {
        id,
      },
    });

    if (!reservation) {
      throw new Error(`Reservation ${id} not found`);
    }

    /**
     * Verify that it's not already confirmed
     */
    if (reservation.status === "CONFIRMED") {
      throw new Error(`Reservation ${id} has already been confirmed`);
    }

    /**
     * Update the reservation to CONFIRMED
     */
    const updatedReservation = await prisma.reservation.update({
      where: {
        id: reservation.id,
      },
      data: {
        status: "CONFIRMED",
      },
    });

    console.log(
      `Successfully marked Reservation ${updatedReservation.id} CONFIRMED`
    );

    await sendReservationConfirmationEmailToCustomer(updatedReservation);

    return updatedReservation;
  } catch (error) {
    console.log("handleReservationConfirmation error", error);
    throw error;
  }
};
