import prisma from "../prisma/client";
import { foodCategories, foodItems } from "./seedData";

const insertFoodCategories = async () => {
  await prisma.foodCategory.createMany({
    data: foodCategories,
  });
};

const insertFoodItems = async () => {
  await prisma.foodItem.createMany({
    data: foodItems,
  });
};

async function main() {
  // await insertFoodCategories();
  await insertFoodItems();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
