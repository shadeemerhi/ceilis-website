import WineContent from "@/app/components/pages/menu/drink/wine/WineContent";
import BeerContent from "@/app/components/pages/menu/drink/beer/BeerContent";
import { IFetchDrinkMenuResponse } from "@/app/util/types";
import SpiritContent from "@/app/components/pages/menu/drink/spirit/SpiritContent";

const DrinkMenu = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/menu/drink`, {
    cache: "no-store",
    next: { revalidate: 5 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch drink menu");
  }

  const data = (await response.json()) as IFetchDrinkMenuResponse;

  return (
    <div className="flex flex-col items-center">
      <BeerContent beerCategories={data.beerCategories} />
      <WineContent wineCategories={data.wineCategories} />
      <SpiritContent spiritCategories={data.spiritCategories} />
    </div>
  );
};

export default DrinkMenu;
