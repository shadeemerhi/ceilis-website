import { IFoodCategoryPopulated } from "@/app/util/types";
import MenuSection from "../MenuSection";

interface IFoodSectionProps {
  category: IFoodCategoryPopulated;
}

const FoodSection = ({ category }: IFoodSectionProps) => {
  return (
    <MenuSection>
      <span className="text-3xl text-amber-600 tracking-widest">
        {category.name.toUpperCase()}
      </span>
      {category.description && <span>{category.description}</span>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-bold">{item.name}</span>
              {item.sizes.length > 0 ? (
                <div className="flex flex-col mb-1">
                  {item.sizes.map((size) => (
                    <div className="text-right">
                      <span className="font-semibold">
                        {size.name}{" "}
                        <span className="font-normal">${size.price}</span>
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <span>${item.price}</span>
              )}
            </div>
            <span className="text-zinc-500 font-light">{item.description}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {category.additions.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="font-bold text-lg">Additions</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2 sm:gap-x-8">
              {category.additions.map((addition) => (
                <div className="flex justify-between">
                  <span className="font-semibold">{addition.name}</span>
                  <span>${addition.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {category.substitutions.length > 0 && (
          <div>
            <div className="flex flex-col gap-1">
              <span className="text-lg italic text-amber-500 font-light">
                Substitute
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2 sm:gap-x-8">
                {category.substitutions.map((addition) => (
                  <div className="flex justify-between">
                    <span className="font-light">{addition.name}</span>
                    <span>${addition.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </MenuSection>
  );
};

export default FoodSection;
