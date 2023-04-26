import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import prisma from "@/prisma/client";

/**
 * Get current session user by email
 */
export const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session?.user?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.log("getCurrentUser error", error);
    return null;
  }
};

export const getManagerEmails = async (): Promise<Array<string>> => {
  const managers = await prisma.user.findMany({
    where: {
      roles: {
        has: "MANAGER",
      },
    },
    select: {
      email: true,
    },
  });

  const managerEmails = managers
    .map((manager) => manager.email)
    .filter((email) => !!email);

  /**
   * Above filter does not satisfy TS (?)
   */
  return managerEmails as Array<string>;
};
