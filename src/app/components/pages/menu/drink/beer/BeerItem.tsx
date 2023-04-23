import { BeerItem as IBeerItem } from "@prisma/client";
import ItemActionIcons from "../../food/item/ItemActionIcons";
import { Dispatch, SetStateAction } from "react";
import { ISelectedItem } from "@/app/util/types";

interface IBeerItemProps {
  item: IBeerItem;
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem<IBeerItem>>>;
}

const BeerItem = ({ item, setSelectedItem }: IBeerItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-bold">{item.name}</span>
        {item.location && item.style && (
          <span className="text-zinc-500 font-light italic">
            {item.location}, <span>{item.style}</span>
          </span>
        )}
      </div>
      <span className="text-zinc-500 font-light">{item.description}</span>
      <ItemActionIcons
        itemName={item.name}
        apiDeleteUrl={`/api/menu/drink/beer/${item.id}`}
        onEdit={() => setSelectedItem(item)}
      />
    </div>
  );
};

export default BeerItem;
