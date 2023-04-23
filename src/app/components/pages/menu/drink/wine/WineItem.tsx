import { ISelectedItem } from "@/app/util/types";
import { WineItem as IWineItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import ItemActionIcons from "../../common/ItemActionIcons";
import { WINE_SIZE_OPTIONS } from "@/app/util/constants";

interface IWineItemProps {
  item: IWineItem;
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem<IWineItem>>>;
}

const WineItem = ({ item, setSelectedItem }: IWineItemProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="font-semibold text-sm sm:text-base">{item.name}</span>
        <span className="font-light text-zinc-500">{item.location}</span>
        <ItemActionIcons
          itemName={item.name}
          apiDeleteUrl={`/api/menu/drink/wine/${item.id}`}
          onEdit={() => setSelectedItem(item)}
        />
      </div>
      <div className="flex justify-between text-sm sm:text-base text-right w-40 sm:w-56">
        {WINE_SIZE_OPTIONS.map((option) => (
          <span className="w-1/3">
            {item.sizes.find((size) => size.name === option)?.price || null}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WineItem;
