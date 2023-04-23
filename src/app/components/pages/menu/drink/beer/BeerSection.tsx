import {
  IBeerCategoryPopulated,
  ICreateItemInput,
  ISelectedItem,
} from "@/app/util/types";
import HeaderButtons from "../../food/HeaderButtons";
import { useState } from "react";
import { BeerItem as IBeerItem } from "@prisma/client";
import BeerItem from "./BeerItem";
import BeerItemForm from "./form/BeerItemForm";
import SectionItems from "../../common/SectionItems";

const BEER_ITEM_TEMPLATE: ICreateItemInput<IBeerItem> = {
  categoryId: "",
  name: "",
  description: "",
  location: "",
  price: 0,
  sizes: [],
  style: "",
};

interface IBeerSectionProps {
  category: IBeerCategoryPopulated;
}

const BeerSection = ({ category }: IBeerSectionProps) => {
  const [selectedItem, setSelectedItem] =
    useState<ISelectedItem<IBeerItem>>(null);

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-xl text-amber-600 tracking-widest">
            {category.name.toUpperCase()}
          </span>
          {category.sizes.length > 0 ? (
            <div className="flex gap-3">
              {category.sizes.map((size) => (
                <span className="font-bold">
                  {size.name} <span className="font-normal">${size.price}</span>
                </span>
              ))}
            </div>
          ) : (
            <span>${category.price}</span>
          )}
        </div>
        <HeaderButtons<ICreateItemInput<IBeerItem>>
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          categoryId={category.id}
          itemTemplate={BEER_ITEM_TEMPLATE}
        />
      </div>
      {category.description && <span>{category.description}</span>}
      {selectedItem ? (
        <BeerItemForm item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SectionItems<IBeerItem>
            items={category.items}
            renderItem={(item) => (
              <BeerItem item={item} setSelectedItem={setSelectedItem} />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default BeerSection;
