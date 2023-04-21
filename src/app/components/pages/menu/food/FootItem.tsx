import { ICreateFoodItemInput } from "@/app/util/types";
import { FoodItem as IFoodItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface IFoodItemProps {
  item: IFoodItem;
  setSelectedItem: Dispatch<
    SetStateAction<IFoodItem | ICreateFoodItemInput | null>
  >;
}

const FoodItem = ({ item, setSelectedItem }: IFoodItemProps) => {
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
      <div className="flex gap-2 mt-2">
        <AiOutlineEdit
          size={20}
          className="cursor-pointer"
          onClick={() => setSelectedItem(item)}
        />
        <AiOutlineDelete size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default FoodItem;
