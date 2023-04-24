import { FoodItem as IFoodItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import ItemActionIcons from "../../common/ItemActionIcons";
import { ISelectedItem } from "@/app/util/types";

interface IFoodItemProps {
  item: IFoodItem;
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem<IFoodItem>>>;
}

const FoodItem = ({ item, setSelectedItem }: IFoodItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="font-bold">{item.name}</span>
        {item.sizes.length > 0 ? (
          <div className="flex flex-col mb-1">
            {item.sizes.map((size) => (
              <div key={size.name} className="text-right">
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
        apiDeleteUrl={`/api/menu/food/${item.id}`}
        onEdit={() => setSelectedItem(item)}
      />
    </div>
  );
};

export default FoodItem;
