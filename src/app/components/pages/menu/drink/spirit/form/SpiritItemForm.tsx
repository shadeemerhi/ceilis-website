import Input from "@/app/components/design-system/Input";
import useMenuItemForm from "@/app/hooks/useMenuItemForm";
import { ICreateItemInput, ISelectedItem } from "@/app/util/types";
import { SpiritItem as ISpiritItem } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import SubmitButton from "../../../common/SubmitButton";
import ItemSizes from "../../../common/sizes/ItemSizes";

interface ISpiritItemFormProps {
  item: ICreateItemInput<ISpiritItem>;
  setSelectedItem: Dispatch<SetStateAction<ISelectedItem<ISpiritItem>>>;
}

const SpiritItemForm = ({ item, setSelectedItem }: ISpiritItemFormProps) => {
  const {
    item: spiritItem,
    setItem,
    onSubmit,
    isMutating,
  } = useMenuItemForm<ICreateItemInput<ISpiritItem>>({
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
            value={spiritItem.name}
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price">Price</label>
          <Input
            id="price"
            name="price"
            onChange={onPriceChange}
            value={spiritItem.price.toString()}
            step="0.01"
            min="0"
            placeholder="Price"
            type="number"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            rows={3}
            value={spiritItem.description || ""}
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
          <ItemSizes item={spiritItem} setItem={setItem} />
        </div>
      </div>
      <SubmitButton
        item={spiritItem}
        onSubmit={onSubmit}
        url="/api/menu/drink/spirit"
        isMutating={isMutating}
      />
    </div>
  );
};

export default SpiritItemForm;
