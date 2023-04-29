import Button from "@/app/components/design-system/Button";
import ReservationButton from "@/app/components/reservations/ReservationButton";
import {
  DOORDASH_LINK,
  SKIP_THE_DISHES_LINK,
  UBER_EATS_LINK,
} from "@/app/util/constants";
import Image from "next/image";
import Link from "next/link";
import { SiDoordash, SiUbereats } from "react-icons/si";

const Content = () => {
  return (
    <section>
      <div className={`flex flex-col gap-10 md:flex-row px-6 md:px-20 py-16`}>
        <div className="relative aspect-square w-full md:w-1/2">
          <Image
            src="https://xhmmmrnmnncvntnovvox.supabase.co/storage/v1/object/sign/images/static/content-item-one.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RhdGljL2NvbnRlbnQtaXRlbS1vbmUucG5nIiwiaWF0IjoxNjgyODAxNjI3LCJleHAiOjE3MTQzMzc2Mjd9.ESzUz6Tp0RKiJcolq2Rh-6LtCDTWSEA9sHldFOe92vc&t=2023-04-29T20%3A53%3A47.879Z"
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
            src="https://xhmmmrnmnncvntnovvox.supabase.co/storage/v1/object/sign/images/static/content-item-two.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RhdGljL2NvbnRlbnQtaXRlbS10d28ucG5nIiwiaWF0IjoxNjgyODAxNjM0LCJleHAiOjE3MTQzMzc2MzR9.Ly-P2y42I9TF6o6y1EJGljgE408r2dqMK-YH_Z9s5G0&t=2023-04-29T20%3A53%3A54.614Z"
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
      <div className="flex justify-evenly items-center md:px-20 py-16">
        <Link href={SKIP_THE_DISHES_LINK} target="_blank">
          <Image src="/skip-logo.svg" height={150} width={150} alt="skip" />
        </Link>
        <Link href={UBER_EATS_LINK} target="_blank">
          <SiUbereats size={65} className="text-[#1E1E1E]" />
        </Link>
        <Link href={DOORDASH_LINK} target="_blank">
          <SiDoordash size={65} className="text-[#1E1E1E]" />
        </Link>
      </div>
    </section>
  );
};

export default Content;
