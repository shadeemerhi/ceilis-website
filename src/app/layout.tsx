import Navbar from "./components/navigation/Navbar";
import { Albert_Sans } from "next/font/google";

import "./globals.css";
import MobileBottomNav from "./components/navigation/MobileBottomNav";

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
        <Navbar />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
