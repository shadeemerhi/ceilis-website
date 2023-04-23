import Input from "@/app/components/design-system/Input";
import useMenuItemForm from "@/app/hooks/useMenuItemForm";
import { ICreateBeerItemInput } from "@/app/util/types";
import { BeerItem as IBeerItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import SubmitButton from "../../../common/SubmitButton";

interface IBeerItemFormProps {
  item: IBeerItem | ICreateBeerItemInput;
  setSelectedItem: Dispatch<
    SetStateAction<IBeerItem | ICreateBeerItemInput | null>
  >;
}

const BeerItemForm = ({ item, setSelectedItem }: IBeerItemFormProps) => {
  const {
    item: beerItem,
    setItem,
    onSubmit,
    isMutating,
  } = useMenuItemForm<IBeerItem | ICreateBeerItemInput>({
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
  return (
    <div className="border-[1px] border-zinc-200 p-6 rounded-lg">
      <span className="text-xl">
        {item.id ? `Editing Item: ${item.name}` : "Creating Item"}
      </span>
      <div className="grid grid-cols-4 gap-12 mt-6">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            onChange={onNameChange}
            value={beerItem.name}
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="location">Location</label>
          <Input
            id="location"
            name="location"
            onChange={onNameChange}
            value={beerItem.location || ""}
            placeholder="Location"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="style">Style</label>
          <Input
            id="style"
            name="style"
            onChange={onNameChange}
            value={beerItem.style || ""}
            placeholder="Style"
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              rows={3}
              value={beerItem.description || ""}
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
        </div>
      </div>
      <SubmitButton
        item={beerItem}
        onSubmit={onSubmit}
        url="/api/menu/drink/beer"
        isMutating={isMutating}
      />
    </div>
  );
};

export default BeerItemForm;
