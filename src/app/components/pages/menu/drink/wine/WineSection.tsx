import { ICreateItemInput, IWineCategoryPopulated } from "@/app/util/types";
import SectionItems from "../../common/SectionItems";
import { WineItem as IWineItem, WineItem } from "@prisma/client";
import HeaderButtons from "../../food/HeaderButtons";
import { useState } from "react";

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
  const [selectedItem, setSelectedItem] = useState<
    IWineItem | ICreateItemInput<IWineItem> | null
  >(null);

  return (
    <div>
      <div className="flex justify-between">
        <div className="mb-2">
          <span className="text-xl text-amber-600 tracking-widest">
            {category.name}
          </span>
        </div>
        <div className="flex font-bold text-sm sm:text-base text-right w-40 sm:w-56">
          <span className="w-1/3">6oz</span>
          <span className="w-1/3">9oz</span>
          <span className="w-1/3">1/2L</span>
        </div>
        <HeaderButtons<ICreateItemInput<IWineItem>>
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          categoryId={category.id}
          itemTemplate={WINE_ITEM_TEMPLATE}
        />
      </div>
      <div className="flex flex-col gap-3">
        <SectionItems
          items={category.items}
          renderItem={(item) => (
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base">
                  {item.name}
                </span>
                <span className="font-light text-zinc-500">
                  {item.location}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base text-right w-40 sm:w-56">
                {item.sizes.map((size) => (
                  <span className="w-1/3">{size.price}</span>
                ))}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default WineSection;
