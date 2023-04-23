import Input from "@/app/components/design-system/Input";
import useMenuItemForm from "@/app/hooks/useMenuItemForm";
import { ICreateItemInput, ISelectedItem } from "@/app/util/types";
import { WineItem as IWineItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import SubmitButton from "../../../common/SubmitButton";
import ItemSizes from "../../../common/sizes/ItemSizes";
import { WINE_SIZE_OPTIONS } from "@/app/util/constants";

interface IWineItemFormProps {
  item: ICreateItemInput<IWineItem>;
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem<IWineItem>>>;
}

const WineItemForm = ({ item, setSelectedItem }: IWineItemFormProps) => {
  const {
    item: wineItem,
    setItem,
    onSubmit,
    isMutating,
  } = useMenuItemForm<ICreateItemInput<IWineItem>>({
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
      <div className="grid grid-cols-2 gap-12 mt-6">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            onChange={onNameChange}
            value={wineItem.name}
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="location">Location</label>
          <Input
            id="location"
            name="location"
            onChange={onNameChange}
            value={wineItem.location || ""}
            placeholder="Location"
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              rows={3}
              value={wineItem.description || ""}
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
        <div className="flex flex-col col-span-2 gap-4">
          <ItemSizes
            item={wineItem}
            setItem={setItem}
            sizeNameList={WINE_SIZE_OPTIONS}
          />
        </div>
      </div>
      <SubmitButton
        item={wineItem}
        onSubmit={onSubmit}
        url="/api/menu/drink/wine"
        isMutating={isMutating}
      />
    </div>
  );
};

export default WineItemForm;
