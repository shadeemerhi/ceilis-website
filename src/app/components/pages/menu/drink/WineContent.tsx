import { IFetchDrinkMenuResponse } from "@/app/util/types";
import MenuSection from "../MenuSection";

type IWineContentProps = Pick<IFetchDrinkMenuResponse, "wineCategories">;

const WineContent = ({ wineCategories }: IWineContentProps) => {
  return (
    <MenuSection>
      <span className="text-3xl text-amber-600 tracking-widest">WINE</span>
      {wineCategories.map((category) => (
        <div>
          <div className="flex justify-between">
            <div className="mb-2">
              <span className="text-xl text-amber-600 tracking-widest">
                {category.name}
              </span>
            </div>
            <div className="flex font-bold text-sm sm:text-base text-right w-40 sm:w-56">
              <span className="w-1/3">6oz</span>
              <span className="w-1/3">9oz</span>
              <span className="w-1/3">1/2L</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {category.items.map((item) => (
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </span>
                  <span className="font-light text-zinc-500">
                    {item.location}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-right w-40 sm:w-56">
                  {item.sizes.map((size) => (
                    <span className="w-1/3">{size.price}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MenuSection>
  );
};

export default WineContent;
