import { Albert_Sans } from "next/font/google";
import Navbar from "./components/navigation/Navbar";

import MobileBottomNav from "./components/navigation/MobileBottomNav";
import "./globals.css";
import { Providers } from "./providers";
import ReservationModal from "./components/reservations/ReservationModal";

export const metadata = {
  title: "Ceili's Modern Irish Pub",
  description: "Website for Ceili's Royal Oak",
};

const albertSans = Albert_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} relative h-screen w-screen`}>
        <Providers>
          <Navbar />
          <ReservationModal />
          {children}
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}
