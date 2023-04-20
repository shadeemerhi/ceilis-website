import { IFetchDrinkMenuResponse } from "@/app/util/types";
import MenuSection from "../MenuSection";

type IBeerContentProps = Pick<IFetchDrinkMenuResponse, "beerCategories">;

const BeerContent = ({ beerCategories }: IBeerContentProps) => {
  return (
    <MenuSection>
      <span className="text-3xl text-amber-600 tracking-widest">BEER</span>
      {beerCategories.map((category) => (
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-xl text-amber-600 tracking-widest">
              {category.name.toUpperCase()}
            </span>
            {category.sizes.length > 0 ? (
              <div className="flex gap-3">
                {category.sizes.map((size) => (
                  <span className="font-bold">
                    {size.name}{" "}
                    <span className="font-normal">${size.price}</span>
                  </span>
                ))}
              </div>
            ) : (
              <span>${category.price}</span>
            )}
          </div>
          {category.description && <span>{category.description}</span>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="font-bold">{item.name}</span>
                  {item.location && item.style && (
                    <span className="text-zinc-500 font-light italic">
                      {item.location}, <span>{item.style}</span>
                    </span>
                  )}
                </div>
                <span className="text-zinc-500 font-light">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MenuSection>
  );
};

export default BeerContent;
