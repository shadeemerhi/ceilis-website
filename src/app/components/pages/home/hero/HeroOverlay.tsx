import Button from "@/app/components/design-system/Button";
import ReservationButton from "@/app/components/reservations/ReservationButton";
import { BUSINESS_NAME } from "@/app/util/constants";

const HeroOverlay = () => {
  return (
    <div className="flex flex-col gap-8 pt-36 sm:pt-0 sm:justify-center items-center absolute h-full w-full sm:w-1/2">
      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl lg:text-4xl font-semibold">
          {BUSINESS_NAME}
        </span>
        <span className="text-xl font-light">The heart of Royal Oak</span>
      </div>
      <ReservationButton text="Reserve Now" variant="fill" textColor="white" />
    </div>
  );
};

export default HeroOverlay;
