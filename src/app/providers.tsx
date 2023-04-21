"use client";

import { ReactNode } from "react";
import ReservationModalProvider from "./hooks/useReservationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return (
    <ReservationModalProvider>
      {children}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </ReservationModalProvider>
  );
}
