import Button from "@/app/components/design-system/Button";
import Input from "@/app/components/design-system/Input";
import { ICreateFoodItemInput } from "@/app/util/types";
import { FoodItem as IFoodItem } from "@prisma/client";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

interface IFoodItemFormProps {
  item: IFoodItem | ICreateFoodItemInput;
}

const FoodItemForm = ({ item }: IFoodItemFormProps) => {
  const [foodItem, setFoodItem] = useState<IFoodItem | ICreateFoodItemInput>(
    item
  );

  const [addingAddition, setAddingAddition] = useState(false);
  const [addingSize, setAddingSize] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    const isUpdatingItem = !!foodItem.id;

    if (isUpdatingItem) {
      // update item
    } else {
      // create item
    }

    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Saving item...",
      success: "Item successfully saved",
      error: "Failed to save item",
    });
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    setFoodItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    setFoodItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onAddSize = () => {};
  const onDeleteSize = () => {};

  const onAddAddition = () => {};
  const onDeleteAddition = () => {};

  return (
    <div className="border-[1px] border-zinc-200 p-6 rounded-lg">
      <span className="text-xl">
        {item.id ? `Editing Item: ${item.name}` : "Creating Item"}
      </span>
      <div className="grid grid-cols-1 gap-8 mt-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            onChange={onNameChange}
            value={foodItem.name}
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            rows={3}
            value={foodItem.description || ""}
            onChange={onDescriptionChange}
            name="description"
            className="
                px-3 
                py-1
                w-full 
                flex-1 
                rounded-md 
                border-[1px]
                outline-[1px]
                text-black
                placeholder:text-zinc-500"
          />
        </div>
        {foodItem.sizes.length === 0 && (
          <div className="flex flex-col gap-1">
            <label htmlFor="price">Price</label>
            <Input
              id="price"
              name="price"
              onChange={() => {}}
              value={foodItem.price.toString()}
              step="0.01"
              placeholder="Price"
              type="number"
            />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <span className="font-semibold">Sizes</span>
          <div className="grid grid-cols-3 gap-4">
            {foodItem.sizes.length ? (
              <>
                {foodItem.sizes.map((item) => (
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor={item.name}>{item.name}</label>
                      <AiOutlineDelete size={20} className="cursor-pointer" />
                    </div>
                    <Input
                      id={item.name}
                      name={item.name}
                      onChange={() => {}}
                      value={item.price?.toString()}
                      placeholder="Size name"
                    />
                  </div>
                ))}
              </>
            ) : (
              <span>
                This item currently does not have sizes, but instead has a
                single price. If this item has multiple sizes with different
                prices, you can add them here.
              </span>
            )}
          </div>
          <Button
            text="Add Size"
            textColor="black"
            variant="border"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-semibold">Additions</span>
          <div className="grid grid-cols-3 gap-4">
            {foodItem.additions.length ? (
              <>
                {foodItem.additions.map((item) => (
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor={item.name}>{item.name}</label>
                      <AiOutlineDelete size={20} className="cursor-pointer" />
                    </div>
                    <Input
                      id={item.name}
                      name={item.name}
                      onChange={() => {}}
                      value={item.price?.toString()}
                      placeholder="Addition name"
                    />
                  </div>
                ))}
              </>
            ) : (
              <span>This item currently has no additions</span>
            )}
          </div>
          <Button
            text="Add Addition"
            textColor="black"
            variant="border"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          text="Save Item"
          textColor="white"
          variant="fill"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default FoodItemForm;
