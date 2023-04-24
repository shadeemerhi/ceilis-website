import FoodSection from "@/app/components/pages/menu/food/FoodSection";
import { IFetchFoodMenuResponse } from "@/app/util/types";

const FoodMenu = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/menu/food`, {
    cache: "no-store",
  });

  console.log("HERE IS URL", process.env.BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch food menu");
  }

  const data = (await response.json()) as IFetchFoodMenuResponse;

  return (
    <div className="flex flex-col items-center">
      {data.categories.map((category) => (
        <FoodSection key={category.id} category={category} />
      ))}
    </div>
  );
};

export default FoodMenu;
