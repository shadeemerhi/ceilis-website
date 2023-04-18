import { FoodCategory, FoodItem } from "@prisma/client";

export const foodCategories: Array<Omit<FoodCategory, "id">> = [
  {
    name: "Starters",
    description: null,
    additions: [],
    substitutions: [],
  },
  {
    name: "Soups & Salads",
    description: null,
    additions: [
      {
        name: "Chicken Breast",
        price: 6.95,
      },
      {
        name: "Prawns",
        price: 6.95,
      },
      {
        name: "CAB Sirloin Steak",
        price: 9.95,
      },
      {
        name: "Bacon",
        price: 2.95,
      },
      {
        name: "Garlic Focaccia",
        price: 2.95,
      },
      {
        name: "Cheese Toast",
        price: 5.95,
      },
      {
        name: "Avocado",
        price: 3.95,
      },
    ],
    substitutions: [],
  },
  {
    name: "Flatbreads",
    description: null,
    additions: [],
    substitutions: [],
  },
  {
    name: "Features",
    description: null,
    additions: [],
    substitutions: [],
  },
  {
    name: "Mains",
    description: null,
    additions: [],
    substitutions: [],
  },
  {
    name: "Pasta",
    description:
      "All pasta is served with choice of sauce, salad and garlic toast",
    additions: [],
    substitutions: [],
  },
  {
    name: "Burgers",
    description:
      "Ceili‘s is proud to serve a hand pressed 7oz ground chuck and brisket burger. All burgers and sandwiches are served with choice of house salad, soup of the day, or hand cut Kennebec fries.",
    substitutions: [
      {
        name: "Classic caesar, sweet potato fries, tater tots or champ",
        price: 2,
      },
      {
        name: "Poutine",
        price: 3,
      },
      {
        name: "Lettuce Bun",
        price: 2.9,
      },
      {
        name: "Gluten Free Bun",
        price: 1.95,
      },
    ],
    additions: [
      {
        name: "Double smoked bacon",
        price: 2.95,
      },
      {
        name: "Goat cheese",
        price: 1.95,
      },
      {
        name: "Avocado",
        price: 3.95,
      },
      {
        name: "Sauteed garlic mushrooms",
        price: 1.95,
      },
      {
        name: "Sauteed onions",
        price: 1.95,
      },
      {
        name: "Pepper jack cheese",
        price: 1.95,
      },
      {
        name: "Aged Canadian white cheddar or swiss",
        price: 1.95,
      },
      {
        name: "Gravy",
        price: 2.95,
      },
    ],
  },
  {
    name: "Sandwiches",
    description: null,
    additions: [
      {
        name: "Double smoked bacon",
        price: 2.95,
      },
      {
        name: "Goat cheese",
        price: 1.95,
      },
      {
        name: "Avocado",
        price: 3.95,
      },
      {
        name: "Sauteed garlic mushrooms",
        price: 1.95,
      },
      {
        name: "Sauteed onions",
        price: 1.95,
      },
      {
        name: "Pepper jack cheese",
        price: 1.95,
      },
      {
        name: "Aged Canadian white cheddar or swiss",
        price: 1.95,
      },
      {
        name: "Gravy",
        price: 2.95,
      },
    ],
    substitutions: [],
  },
  {
    name: "Dessert",
    description: null,
    additions: [],
    substitutions: [],
  },
];

const STARTERS_ID = "643ebf3e5764af167b88dec9";
const SALAD_ID = "643ebf3e5764af167b88deca";

export const foodItems: Array<Omit<FoodItem, "id">> = [
  {
    categoryId: STARTERS_ID,
    name: "Calamari",
    description: "Light batter, tzatziki, red onion",
    price: 16.95,
    additions: [],
    sizes: [],
  },
  {
    categoryId: STARTERS_ID,
    name: "Dry Ribs",
    description: "Bone in, cracked black pepper, sea salt",
    price: 16.95,
    additions: [],
    sizes: [],
  },
  {
    categoryId: STARTERS_ID,
    name: "Poutine",
    description: "Choice of tater tots or fries",
    price: 16.95,
    additions: [
      {
        name: "Double Smoked Bacon, Chorizo Sausage or Chipotle chicken",
        price: 2,
      },
    ],
    sizes: [],
  },
  {
    categoryId: STARTERS_ID,
    name: "Loaded Nachos",
    description:
      "Corn tortillas layered with lots of cheese, black beans, corn, jalapeños, black olive, topped with salsa and sour cream",
    price: 18.95,
    sizes: [
      {
        name: "Half Order",
        price: 18.95,
      },
      {
        name: "Full Order",
        price: 24.95,
      },
    ],
    additions: [
      {
        name: "Grilled chicken",
        price: 6.95,
      },
      {
        name: "Extra cheese",
        price: 3.95,
      },
      {
        name: "Spiced beef",
        price: 5.95,
      },
      {
        name: "Guacamole",
        price: 2.95,
      },
    ],
  },
  {
    categoryId: STARTERS_ID,
    name: "Wings",
    description:
      "Celery sticks, carrot sticks, ranch or blue cheese dressing. Choose from: Franks Red Hot, Ceili’s house hot, honey garlic, salt & pepper, barbeque, sriracha honey lime",
    price: 17.95,
    additions: [],
    sizes: [],
  },
  {
    categoryId: STARTERS_ID,
    name: "Mini Yorkies",
    description:
      "Braised shaved Alberta beef, horseradish aioli, grainy dijon au jus, crispy onions",
    price: 16.95,
    additions: [],
    sizes: [],
  },
  {
    categoryId: STARTERS_ID,
    name: "Chili Lime Chicken Tacos",
    description:
      "3 soft flour tortillas topped with spicy pulled chicken, black bean corn salsa, pickled onions, goat cheese, lime wedge",
    price: 16.95,
    additions: [],
    sizes: [],
  },
  {
    categoryId: STARTERS_ID,
    name: "Mac & Cheese Sticks",
    description: "Spicy sriracha ketchup",
    price: 16.95,
    additions: [],
    sizes: [],
  },
  {
    categoryId: STARTERS_ID,
    name: "Perogies",
    description:
      "Pan fried three cheese perogies topped with sour cream, bacon caramelized onions",
    price: 15.95,
    additions: [],
    sizes: [],
  },
];
