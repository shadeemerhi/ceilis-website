import { ICreateItemInput, ISelectedItem } from "@/app/util/types";
import { SpiritItem as ISpiritItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import ItemActionIcons from "../../common/ItemActionIcons";

interface ISpiritItemProps {
  item: ICreateItemInput<ISpiritItem>;
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem<ISpiritItem>>>;
}

const SpiritItem = ({ item, setSelectedItem }: ISpiritItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="font-bold">{item.name}</span>
        {item.sizes.length > 0 ? (
          <div className="flex flex-col mb-1">
            {item.sizes.map((size) => (
              <div className="text-right">
                <span className="font-semibold">
                  {size.name} <span className="font-normal">${size.price}</span>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <span>${item.price}</span>
        )}
      </div>
      <span className="text-zinc-500 font-light">{item.description}</span>
      <ItemActionIcons
        itemName={item.name}
        apiDeleteUrl={`/api/menu/drink/spirit/${item.id}`}
        onEdit={() => setSelectedItem(item)}
      />
    </div>
  );
};

export default SpiritItem;
