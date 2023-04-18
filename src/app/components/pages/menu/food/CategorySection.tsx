import { IFoodCategoryPopulated } from "@/app/util/types";

interface ICategorySectionProps {
  category: IFoodCategoryPopulated;
}

const CategorySection = ({ category }: ICategorySectionProps) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-5/6 my-10 px-4 md:px-0">
      <span className="text-3xl text-amber-600 tracking-widest">
        {category.name.toUpperCase()}
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-bold">{item.name}</span>
              <span>${item.price}</span>
            </div>
            <span className="text-zinc-500">{item.description}</span>
          </div>
        ))}
      </div>
      {category.additions.length > 0 && (
        <div>
          <span className="font-bold">Additions</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:w-1/2 gap-2 sm:gap-6">
            {category.additions.map((addition) => (
              <div className="flex justify-between">
                <span className="font-semibold">{addition.name}</span>
                <span>${addition.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
