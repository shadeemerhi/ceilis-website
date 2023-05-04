import { Albert_Sans } from "next/font/google";
import Navbar from "./components/navigation/Navbar";

import MobileBottomNav from "./components/navigation/MobileBottomNav";
import "./globals.css";
import { Providers } from "./providers";
import ReservationModal from "./components/reservations/ReservationModal";
import Footer from "./components/pages/home/footer/Footer";
import { getCurrentUser } from "./util/helpers/users";
import Script from "next/script";

export const metadata = {
  title: "Ceili's Modern Irish Pub",
  description: "Website for Ceili's Royal Oak",
};

const albertSans = Albert_Sans({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="gtag-config" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
      </Script>

      <body className={`${albertSans.className} relative h-screen w-screen`}>
        <Providers user={user}>
          <div className="flex flex-col h-auto min-h-full">
            <Navbar />
            <ReservationModal />
            <div className="relative flex-1">
              <div className="min-h-[65vh]">{children}</div>
              <Footer />
            </div>
            <MobileBottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}
