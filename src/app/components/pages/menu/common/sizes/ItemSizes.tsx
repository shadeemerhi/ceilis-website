import Input from "@/app/components/design-system/Input";
import { ICreateItemInput, ISelectedItem } from "@/app/util/types";
import { Addition, WineItem as IWineItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import SizeInputs from "./SizeInputs";

type IItemWithSizes<T> = T & { sizes: Array<Addition> };

export interface IItemSizesProps<T> {
  item: IItemWithSizes<T>;
  setItem: Dispatch<SetStateAction<IItemWithSizes<T>>>;
  sizeNameList?: Array<string>;
}

const ItemSizes = <T,>({ item, setItem, sizeNameList }: IItemSizesProps<T>) => {
  const createSize = (size: Addition) => {
    const existingSize = item.sizes.find((s) => s.name === size.name);

    if (existingSize) {
      toast.error("Size with that name already exists");
      return;
    }

    setItem((prev) => ({
      ...prev,
      sizes: [...prev.sizes, size],
    }));
  };

  const editSizePrice = (
    event: React.FormEvent<HTMLInputElement>,
    size: Addition
  ) => {
    const {
      currentTarget: { value },
    } = event;

    const sizeIdx = item.sizes.findIndex((s) => s.name === size.name);

    if (sizeIdx === -1) {
      return;
    }

    const updatedSize: Addition = {
      ...size,
      price: parseFloat(parseFloat(value).toFixed(2)),
    };

    const updatedSizes = [...item.sizes];
    updatedSizes[sizeIdx] = updatedSize;

    setItem((prev) => ({
      ...prev,
      sizes: updatedSizes,
    }));
  };

  const deleteSize = (size: Addition) => {
    setItem((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((s) => s.name !== size.name),
    }));
  };

  return (
    <>
      <span className="font-semibold">Sizes</span>
      <div className="grid grid-cols-3 gap-4">
        {item.sizes.length ? (
          <>
            {item.sizes.map((item) => (
              <div>
                <div className="flex justify-between">
                  <label htmlFor={item.name}>{item.name}</label>
                  <AiOutlineDelete
                    size={20}
                    className="cursor-pointer"
                    onClick={() => deleteSize(item)}
                  />
                </div>
                <Input
                  id={item.name}
                  name={item.name}
                  onChange={(event) => editSizePrice(event, item)}
                  value={item.price?.toString()}
                  step="0.01"
                  min="0"
                  placeholder="Price"
                  type="number"
                />
              </div>
            ))}
          </>
        ) : (
          <span>
            This item currently does not have sizes. If this item has multiple
            sizes with different prices, you can add them here.
          </span>
        )}
      </div>
      <SizeInputs createSize={createSize} sizeNameList={sizeNameList} />
    </>
  );
};

export default ItemSizes;
