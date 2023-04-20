import BeerContent from "@/app/components/pages/menu/drink/BeerContent";
import WineContent from "@/app/components/pages/menu/drink/WineContent";
import { IFetchDrinkMenuResponse } from "@/app/util/types";

const DrinkMenu = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/menu/drink`);

  if (!response.ok) {
    throw new Error("Failed to fetch drink menu");
  }

  const data = (await response.json()) as IFetchDrinkMenuResponse;

  return (
    <div className="flex flex-col items-center">
      <BeerContent beerCategories={data.beerCategories} />
      <WineContent wineCategories={data.wineCategories} />
    </div>
  );
};

export default DrinkMenu;
