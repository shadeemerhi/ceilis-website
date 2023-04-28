import ReservationButton from "@/app/components/reservations/ReservationButton";
import Image from "next/image";

const HeroOverlay = () => {
  return (
    <div className="flex flex-col gap-8 pt-36 sm:pt-0 sm:justify-center items-center absolute h-full w-full sm:w-1/2">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/ceilis-logo-white.png"
          alt="Vercel Logo"
          width={300}
          height={100}
          priority
        />
      </div>
      <ReservationButton text="Reserve Now" variant="fill" textColor="white" />
    </div>
  );
};

export default HeroOverlay;
