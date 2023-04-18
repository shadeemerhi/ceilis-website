import { FoodCategory, FoodItem } from "@prisma/client";

export interface IFoodCategoryPopulated extends FoodCategory {
  items: Array<FoodItem>;
}

export interface IFetchFoodMenuResponse {
  categories: Array<IFoodCategoryPopulated>;
}
