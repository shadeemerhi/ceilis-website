"use client";

import { IFetchDrinkMenuResponse } from "@/app/util/types";
import BeerSection from "./BeerSection";
import MenuSectionLayout from "../../common/MenuSectionLayout";

type IBeerContentProps = Pick<IFetchDrinkMenuResponse, "beerCategories">;

const BeerContent = ({ beerCategories }: IBeerContentProps) => {
  return (
    <MenuSectionLayout>
      <span className="text-3xl text-amber-600 tracking-widest">BEER</span>
      {beerCategories.map((category) => (
        <BeerSection key={category.id} category={category} />
      ))}
    </MenuSectionLayout>
  );
};

export default BeerContent;
