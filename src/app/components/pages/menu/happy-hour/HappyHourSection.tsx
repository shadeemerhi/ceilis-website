"use client";

import { HAPPY_HOUR_MENU } from "@/app/util/constants";
import MenuSectionLayout from "../common/MenuSectionLayout";

interface IHappyHourSectionProps {
  type: "DRINKS" | "FOOD";
}

const HappyHourSection = ({ type }: IHappyHourSectionProps) => {
  return (
    <MenuSectionLayout>
      <div className="flex justify-between">
        <span className="text-3xl text-amber-600 tracking-widest">{type}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HAPPY_HOUR_MENU[type].map((category) => (
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold">{category.title}</span>
            <span>{category.description}</span>
          </div>
        ))}
      </div>
    </MenuSectionLayout>
  );
};

export default HappyHourSection;
