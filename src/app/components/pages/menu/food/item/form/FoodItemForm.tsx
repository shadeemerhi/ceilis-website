import Button from "@/app/components/design-system/Button";
import Input from "@/app/components/design-system/Input";
import useMenuItemForm from "@/app/hooks/useMenuItemForm";
import { ICreateItemInput, ISelectedItem } from "@/app/util/types";
import { Addition, FoodItem as IFoodItem } from "@prisma/client";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import AdditionInputs from "../../../common/AdditionInputs";
import SubmitButton from "../../../common/SubmitButton";
import ItemSizes from "../../../common/sizes/ItemSizes";

interface IFoodItemFormProps {
  item: ICreateItemInput<IFoodItem>;
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem<IFoodItem>>>;
}

const FoodItemForm = ({ item, setSelectedItem }: IFoodItemFormProps) => {
  const [addingAddition, setAddingAddition] = useState(false);

  const {
    item: foodItem,
    setItem,
    onSubmit,
    isMutating,
  } = useMenuItemForm<ICreateItemInput<IFoodItem>>({
    initState: item,
    closeForm: () => setSelectedItem(null),
  });

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    setItem((prev) => ({
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

    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setItem((prev) => ({
      ...prev,
      price: parseFloat(parseFloat(value).toFixed(2)),
    }));
  };

  /**
   * Additions
   */
  const createAddition = (addition: Addition) => {
    const existingAddition = foodItem.additions.find(
      (a) => a.name === addition.name
    );

    if (existingAddition) {
      toast.error("Addition with that name already exists");
      return;
    }

    setItem((prev) => ({
      ...prev,
      additions: [...prev.additions, addition],
    }));
  };

  const deleteAddition = (addition: Addition) => {
    setItem((prev) => ({
      ...prev,
      additions: prev.additions.filter((a) => a.name !== addition.name),
    }));
  };

  return (
    <div className="border-[1px] border-zinc-200 p-6 rounded-lg">
      <span className="text-xl">
        {item.id ? `Editing Item: ${item.name}` : "Creating Item"}
      </span>
      <div className="grid grid-cols-2 gap-12 mt-6">
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
        <div className="col-span-2 flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            rows={3}
            value={foodItem.description || ""}
            onChange={onDescriptionChange}
            name="description"
            placeholder="Description"
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
        <div className="col-span-2 flex flex-col gap-4">
          <ItemSizes item={foodItem} setItem={setItem} />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <span className="font-semibold">Additions</span>
          <div className="grid grid-cols-3 gap-4">
            {foodItem.additions.length ? (
              <>
                {foodItem.additions.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between">
                      <label htmlFor={item.name}>{item.name}</label>
                      <AiOutlineDelete
                        size={20}
                        className="cursor-pointer"
                        onClick={() => deleteAddition(item)}
                      />
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
          {addingAddition ? (
            <AdditionInputs
              additionType="addition"
              createAddition={createAddition}
              cancel={() => setAddingAddition(false)}
            />
          ) : (
            <Button
              text="Add Addition"
              textColor="black"
              variant="border"
              onClick={() => setAddingAddition(true)}
            />
          )}
        </div>
      </div>
      <SubmitButton
        item={foodItem}
        onSubmit={onSubmit}
        url="/api/menu/food"
        isMutating={isMutating}
      />
    </div>
  );
};

export default FoodItemForm;
