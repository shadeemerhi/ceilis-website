import FoodSection from "@/app/components/pages/menu/food/FoodSection";
import { IFetchFoodMenuResponse } from "@/app/util/types";

const FoodMenu = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/menu/food`);

  if (!response.ok) {
    throw new Error("Failed to fetch food menu");
  }

  const data = (await response.json()) as IFetchFoodMenuResponse;

  return (
    <div className="flex flex-col items-center">
      {data.categories.map((category) => (
        <FoodSection category={category} />
      ))}
    </div>
  );
};

export default FoodMenu;
