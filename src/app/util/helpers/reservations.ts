import { redis } from "@/redis/client";
import { ICreateReservationInput } from "../types";
import {
  sendNewReservationEmailToAdmins,
  sendReservationCancellationEmailToManagers,
  sendReservationConfirmationEmailToCustomer,
} from "./email";
import prisma from "@/prisma/client";
import { v4 } from "uuid";

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

    /**
     * Generate cancellation token and store in Redis
     */
    const token = v4();
    await redis.set(token, updatedReservation.id);

    await sendReservationConfirmationEmailToCustomer({
      reservation: updatedReservation,
      token,
    });

    console.log(
      `Successfully sent Reservation ${reservation.id} confirmation email to ${reservation.email}`
    );

    return updatedReservation;
  } catch (error) {
    console.log("handleReservationConfirmation error", error);
    throw error;
  }
};

export const handleReservationCancellation = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => {
  try {
    /**
     * Validate token
     */
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
     * Verify reservation is not already cancelled
     */
    if (reservation.status === "CANCELLED") {
      throw new Error(`Reservation ${id} has already been cancelled`);
    }

    /**
     * Update the reservation to CANCELLED
     */
    const updatedReservation = await prisma.reservation.update({
      where: {
        id,
      },
      data: {
        status: "CANCELLED",
      },
    });

    /**
     * Delete token store from Redis
     */
    await redis.del(token);

    /**
     * Send email to managers
     */
    await sendReservationCancellationEmailToManagers(updatedReservation);

    console.log(
      `Successfully sent Reservation ${reservation.id} cancellation email to managers`
    );

    return updatedReservation;
  } catch (error) {
    console.log("handleReservationCancellation error", error);
    throw error;
  }
};

export const isValidReservationToken = async (
  reservationId: string,
  token: string
) => {
  if (!token) {
    return false;
  }

  const redisReservationId = await redis.get(token);

  return reservationId === redisReservationId;
};

export const getRedisReservationId = async (token: string) => {
  return await redis.get(token);
};
