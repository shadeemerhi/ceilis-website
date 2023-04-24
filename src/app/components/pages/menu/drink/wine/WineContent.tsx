"use client";

import { IFetchDrinkMenuResponse } from "@/app/util/types";
import MenuSectionLayout from "../../common/MenuSectionLayout";
import WineSection from "./WineSection";

type IWineContentProps = Pick<IFetchDrinkMenuResponse, "wineCategories">;

const WineContent = ({ wineCategories }: IWineContentProps) => {
  return (
    <MenuSectionLayout>
      <span className="text-3xl text-amber-600 tracking-widest">WINE</span>
      {wineCategories.map((category) => (
        <WineSection key={category.id} category={category} />
      ))}
    </MenuSectionLayout>
  );
};

export default WineContent;
