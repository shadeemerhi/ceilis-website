import { User } from "@prisma/client";

/**
 * Moved to separate file so can be used in browser and server
 */
export const userIsManager = (user: User) => {
  return user.roles.includes("MANAGER") || user.roles.includes("ADMIN");
};
