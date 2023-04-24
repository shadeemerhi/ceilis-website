import {
  ICreateItemInput,
  ISelectedItem,
  IWineCategoryPopulated,
} from "@/app/util/types";
import SectionItems from "../../common/SectionItems";
import { WineItem as IWineItem } from "@prisma/client";
import HeaderButtons from "../../food/HeaderButtons";
import { useState } from "react";
import WineItem from "./WineItem";
import WineItemForm from "./form/WineItemForm";
import { WINE_SIZE_OPTIONS } from "@/app/util/constants";

const WINE_ITEM_TEMPLATE: ICreateItemInput<IWineItem> = {
  categoryId: "",
  name: "",
  description: "",
  location: "",
  sizes: [],
};

interface IWineSectionProps {
  category: IWineCategoryPopulated;
}

const WineSection = ({ category }: IWineSectionProps) => {
  const [selectedItem, setSelectedItem] =
    useState<ISelectedItem<IWineItem>>(null);

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex justify-between">
        <div className="">
          <span className="text-xl text-amber-600 tracking-widest">
            {category.name}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <HeaderButtons<ICreateItemInput<IWineItem>>
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              categoryId={category.id}
              itemTemplate={WINE_ITEM_TEMPLATE}
            />
          </div>
          <div className="flex font-bold text-right text-sm sm:text-base w-40 sm:w-56">
            {WINE_SIZE_OPTIONS.map((size) => (
              <span key={size} className="w-1/3">
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
      {selectedItem ? (
        <WineItemForm item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : (
        <div className="flex flex-col gap-3">
          <SectionItems<IWineItem>
            items={category.items}
            renderItem={(item) => (
              <WineItem item={item} setSelectedItem={setSelectedItem} />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default WineSection;
