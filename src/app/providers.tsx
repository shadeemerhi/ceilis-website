"use client";

import { User } from "@prisma/client";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrentUserProvider from "./hooks/useCurrentUser";
import ReservationModalProvider from "./hooks/useReservationModal";

interface IProvidersProps {
  user: User | null;
  children: ReactNode;
}

export function Providers({ user, children }: IProvidersProps) {
  return (
    <ReservationModalProvider>
      <CurrentUserProvider user={user}>
        {children}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
        />
      </CurrentUserProvider>
    </ReservationModalProvider>
  );
}
