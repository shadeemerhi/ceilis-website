import {
  BeerCategory,
  BeerItem,
  FoodCategory,
  FoodItem,
  SpiritCategory,
  SpiritItem,
  WineCategory,
  WineItem,
} from "@prisma/client";

export interface IFoodCategoryPopulated extends FoodCategory {
  items: Array<FoodItem>;
}

export interface IWineCategoryPopulated extends WineCategory {
  items: Array<WineItem>;
}

export interface ISpiritCategoryPopulated extends SpiritCategory {
  items: Array<SpiritItem>;
}

export interface IBeerCategoryPopulated extends BeerCategory {
  items: Array<BeerItem>;
}

export interface IFetchFoodMenuResponse {
  categories: Array<IFoodCategoryPopulated>;
}

export type ICreateFoodItemInput = Omit<FoodItem, "id"> & { id?: string };

export type ICreateBeerItemInput = Omit<BeerItem, "id"> & { id?: string };

export interface IFetchDrinkMenuResponse {
  beerCategories: Array<IBeerCategoryPopulated>;
  wineCategories: Array<IWineCategoryPopulated>;
  spiritCategories: Array<ISpiritCategoryPopulated>;
}
