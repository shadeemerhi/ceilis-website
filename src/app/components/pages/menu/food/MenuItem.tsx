import { BeerItem, FoodItem } from "@prisma/client";

interface IMenuItemProps {
  displayPrice: boolean;
  // item: {
  //   type: "food" | "beer" | "wine" | "spirit";
  //   name: string;
  //   description: string | null;
  //   price: number;
  //   sizes: Array<{ name: string; price: number }> | null;
  //   location: string | null;
  // };
  item: FoodItem | BeerItem;
}

const MenuItem = ({ item, displayPrice }: IMenuItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="font-bold">{item.name}</span>
        <PriceContent displayPrice={displayPrice} item={item} />
      </div>

      <div className="flex flex-col">
        {item.location && item.type && (
          <span className="text-zinc-500 font-light italic">
            {item.location}, <span>{item.type}</span>
          </span>
        )}
        <span className="text-zinc-500 font-light">{item.description}</span>
      </div>
    </div>
  );
};

interface IPriceContentProps extends IMenuItemProps {}

const PriceContent = ({ displayPrice, item }: IPriceContentProps) => {
  if (item.type === "wine") {
    return (
      <div className="flex justify-between text-sm sm:text-base text-right w-40 sm:w-56">
        <span className="w-1/3">{item.sixOzPrice}</span>
        <span className="w-1/3">{item.nineOzPrice}</span>
        <span className="w-1/3">{item.halfLitrePrice}</span>
      </div>
    );
  }

  if (!displayPrice) {
    return null;
  }

  if (item.sizes?.length) {
    return (
      <div className="flex flex-col mb-1">
        {item.sizes.map((size) => (
          <div className="text-right">
            <span className="font-semibold">
              {size.name} <span className="font-normal">{size.price}</span>
            </span>
          </div>
        ))}
      </div>
    );
  }

  return <span>{item.price}</span>;
};

export default MenuItem;
