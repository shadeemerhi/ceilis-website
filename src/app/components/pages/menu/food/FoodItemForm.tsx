import Button from "@/app/components/design-system/Button";
import Input from "@/app/components/design-system/Input";
import Spinner from "@/app/components/design-system/Spinner";
import { ICreateFoodItemInput } from "@/app/util/types";
import { FoodItem as IFoodItem } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const createFoodItem = async (input: ICreateFoodItemInput) => {
  const response = await fetch("/api/menu/food", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};

const updateFoodItem = async (input: IFoodItem) => {
  const { id, ...rest } = input;
  const response = await fetch(`/api/menu/food/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  });

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};

interface IFoodItemFormProps {
  item: IFoodItem | ICreateFoodItemInput;
  setSelectedItem: Dispatch<
    SetStateAction<IFoodItem | ICreateFoodItemInput | null>
  >;
}

const FoodItemForm = ({ item, setSelectedItem }: IFoodItemFormProps) => {
  const [foodItem, setFoodItem] = useState<IFoodItem | ICreateFoodItemInput>(
    item
  );

  const [addingAddition, setAddingAddition] = useState(false);
  const [addingSize, setAddingSize] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isPending || isFetching;
  const router = useRouter();

  const onSubmit = async () => {
    if (!foodItem.name) {
      toast.error("Please enter a name for the item");
      return;
    }

    const isUpdatingItem = !!foodItem.id;

    setIsFetching(true);

    try {
      isUpdatingItem
        ? await updateFoodItem(foodItem as IFoodItem)
        : await createFoodItem(foodItem);

      startTransition(() => {
        router.refresh();
      });

      toast.success(
        `Successfully ${isUpdatingItem ? "updated" : "created"} item`
      );
      setSelectedItem(null);
    } catch (error) {
      console.log(error);
      toast.error("Failed to save item");
    } finally {
      setIsFetching(false);
    }
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

  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setFoodItem((prev) => ({
      ...prev,
      price: parseFloat(parseFloat(value).toFixed(2)),
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
              onChange={onPriceChange}
              value={foodItem.price.toString()}
              step="0.01"
              min="0"
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
        {isMutating ? (
          <Spinner size="w-10 h-10" color="text-amber-500" />
        ) : (
          <Button
            text="Save Item"
            textColor="white"
            variant="fill"
            onClick={onSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default FoodItemForm;
