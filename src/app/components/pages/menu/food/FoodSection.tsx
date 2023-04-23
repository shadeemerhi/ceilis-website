"use client";

import { ICreateFoodItemInput, IFoodCategoryPopulated } from "@/app/util/types";
import { FoodItem as IFoodItem } from "@prisma/client";
import { useState } from "react";
import HeaderButtons from "./HeaderButtons";
import FoodItem from "./item/FootItem";
import FoodItemForm from "./item/form/FoodItemForm";
import SectionItems from "../common/SectionItems";
import MenuSectionLayout from "../common/MenuSectionLayout";

interface IFoodSectionProps {
  category: IFoodCategoryPopulated;
}

const FOOD_ITEM_TEMPLATE: ICreateFoodItemInput = {
  categoryId: "",
  name: "",
  description: "",
  additions: [],
  price: 0,
  sizes: [],
};

const FoodSection = ({ category }: IFoodSectionProps) => {
  const isAdmin = true;
  const [selectedItem, setSelectedItem] = useState<
    ICreateFoodItemInput | IFoodItem | null
  >(null);

  return (
    <MenuSectionLayout>
      <div className="flex justify-between items-center">
        <span className="text-3xl text-amber-600 tracking-widest">
          {category.name.toUpperCase()}
        </span>
        <HeaderButtons<ICreateFoodItemInput>
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          categoryId={category.id}
          itemTemplate={FOOD_ITEM_TEMPLATE}
        />
      </div>
      {category.description && <span>{category.description}</span>}
      {selectedItem ? (
        <FoodItemForm item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionItems<IFoodItem>
              items={category.items}
              renderItem={(item) => (
                <FoodItem item={item} setSelectedItem={setSelectedItem} />
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.additions.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Additions</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2 sm:gap-x-8">
                  {category.additions.map((addition) => (
                    <div className="flex justify-between">
                      <span className="font-semibold">{addition.name}</span>
                      <span>${addition.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {category.substitutions.length > 0 && (
              <div>
                <div className="flex flex-col gap-1">
                  <span className="text-lg italic text-amber-500 font-light">
                    Substitute
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2 sm:gap-x-8">
                    {category.substitutions.map((addition) => (
                      <div className="flex justify-between">
                        <span className="font-light">{addition.name}</span>
                        <span>${addition.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </MenuSectionLayout>
  );
};

export default FoodSection;
