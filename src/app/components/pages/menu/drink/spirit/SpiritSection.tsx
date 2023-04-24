"use client";

import {
  ISpiritCategoryPopulated,
  ICreateItemInput,
  ISelectedItem,
} from "@/app/util/types";
import HeaderButtons from "../../food/HeaderButtons";
import { SpiritItem as ISpiritItem } from "@prisma/client";
import { useState } from "react";
import SectionItems from "../../common/SectionItems";
import SpiritItemForm from "./form/SpiritItemForm";
import SpiritItem from "./SpiritItem";

const SPIRIT_ITEM_TEMPLATE: ICreateItemInput<ISpiritItem> = {
  categoryId: "",
  name: "",
  description: "",
  price: 0,
  sizes: [],
};

interface ISpiritSectionProps {
  category: ISpiritCategoryPopulated;
}

const SpiritSection = ({ category }: ISpiritSectionProps) => {
  const [selectedItem, setSelectedItem] =
    useState<ISelectedItem<ISpiritItem>>(null);

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-xl text-amber-600 tracking-widest">
            {category.name.toUpperCase()}
          </span>
        </div>
        <HeaderButtons<ICreateItemInput<ISpiritItem>>
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          categoryId={category.id}
          itemTemplate={SPIRIT_ITEM_TEMPLATE}
        />
      </div>
      {selectedItem ? (
        <SpiritItemForm item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SectionItems<ISpiritItem>
            items={category.items}
            renderItem={(item) => (
              <SpiritItem item={item} setSelectedItem={setSelectedItem} />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default SpiritSection;
