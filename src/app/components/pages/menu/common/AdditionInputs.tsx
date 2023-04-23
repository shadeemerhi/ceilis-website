import Button from "@/app/components/design-system/Button";
import Input from "@/app/components/design-system/Input";
import { Listbox, Transition } from "@headlessui/react";
import { Addition } from "@prisma/client";
import { Fragment, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";
import { toast } from "react-toastify";

interface IAdditionInputsProps {
  additionType: "size" | "addition";
  createAddition: (addition: Addition) => void;
  sizeNameList?: Array<string>;
  cancel: () => void;
}

const AdditionInputs = ({
  additionType,
  createAddition,
  sizeNameList,
  cancel,
}: IAdditionInputsProps) => {
  const [addition, setAddition] = useState<Addition>({ name: "", price: 0 });

  const title = additionType === "size" ? "Size" : "Addition";

  const onAdditionNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setAddition((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const onAdditionPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;

    setAddition((prev) => ({
      ...prev,
      price: parseFloat(parseFloat(value).toString()),
    }));
  };

  const onAddAddition = () => {
    if (!addition.name) {
      toast.error(`Please enter a name for the ${additionType}`, {
        position: "bottom-left",
      });
      return;
    }

    if (!addition.price) {
      toast.error(`Please enter a price for the ${additionType}`, {
        position: "bottom-left",
      });
      return;
    }

    createAddition(addition);
    setAddition({ name: "", price: 0 });
    cancel();
  };

  return (
    <div className="mt-4">
      <span className=" font-semibold">Creat a new {additionType}</span>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor={`${additionType}Name`}>{title} name</label>
          {sizeNameList ? (
            <Listbox
              value={addition.name}
              onChange={(value) =>
                setAddition((prev) => ({ ...prev, name: value }))
              }
            >
              <div className="relative mt-1">
                <Listbox.Button
                  className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-[1px] border-zinc-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300"
                  placeholder="Select a size"
                >
                  <span className="block truncate">
                    {addition.name || "Select a size"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiChevronUpDown size={24} />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute overflow-scroll mt-1  w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {sizeNameList.map((name, numberIdx) => (
                      <Listbox.Option
                        key={numberIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={name}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <AiOutlineCheck />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          ) : (
            <Input
              id="name"
              name="name"
              onChange={onAdditionNameChange}
              value={addition.name}
              type="text"
              placeholder={`${title} name`}
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price">{title} price</label>
          <Input
            id="price"
            name="price"
            onChange={onAdditionPriceChange}
            value={addition.price?.toString()}
            step="0.01"
            min="0"
            placeholder="Price"
            type="number"
          />
        </div>
        <div />
        <div className="flex gap-4">
          <Button
            text="Cancel"
            textColor="black"
            variant="border"
            onClick={cancel}
          />
          <Button
            text="Add"
            textColor="white"
            variant="fill"
            onClick={onAddAddition}
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionInputs;
