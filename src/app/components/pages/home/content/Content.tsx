import Button from "@/app/components/design-system/Button";
import ReservationButton from "@/app/components/reservations/ReservationButton";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <section>
      <div className={`flex flex-col gap-10 md:flex-row px-6 md:px-20 py-16`}>
        <div className="relative aspect-square w-full md:w-1/2">
          <Image
            src="/content-item-one.jpg"
            alt="image"
            fill
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 flex-1">
          <span className="text-4xl whitespace-nowrap">{`Section One Text`}</span>
          <span className="text-lg font-light">{`This is some supplemental text`}</span>
          <Link href={"/menu/food"}>
            <Button text="View Menu" variant="border" textColor="black" />
          </Link>
        </div>
      </div>
      <div
        className={`flex flex-col gap-10 md:flex-row-reverse px-6 md:px-20 py-16`}
      >
        <div className="relative aspect-square w-full md:w-1/2">
          <Image
            src="/content-item-two.jpg"
            alt="image"
            fill
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 flex-1">
          <span className="text-4xl whitespace-nowrap">{`Section Two Text`}</span>
          <span className="text-lg font-light">{`This is some supplemental text`}</span>
          <ReservationButton
            text="Reserve Now"
            variant="border"
            textColor="black"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
