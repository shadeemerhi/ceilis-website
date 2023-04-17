"use client";

import { ReactNode } from "react";
import ReservationModalProvider from "./hooks/useReservationModal";

interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return <ReservationModalProvider>{children}</ReservationModalProvider>;
}
