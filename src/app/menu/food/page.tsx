import FoodSection from "@/app/components/pages/menu/food/FoodSection";
import { IFetchFoodMenuResponse } from "@/app/util/types";

const FoodMenu = async () => {
  const response = await fetch(
    `https://ceilis-website.vercel.app/api/menu/food`,
    {
      cache: "no-store",
    }
  );

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
