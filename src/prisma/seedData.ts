import {
  BeerCategory,
  FoodCategory,
  SpiritCategory,
  WineCategory,
} from "@prisma/client";

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

export const beerCategories: Array<Omit<BeerCategory, "id">> = [
  {
    name: "Local Draught",
    description: null,
    price: 5.95,
    sizes: [
      {
        name: "12oz",
        price: 5.95,
      },
      {
        name: "16oz",
        price: 7.95,
      },
      {
        name: "20oz",
        price: 8.95,
      },
    ],
  },
  {
    name: "Domestic & Craft Draught",
    description: null,
    price: 5.95,
    sizes: [
      {
        name: "12oz",
        price: 5.95,
      },
      {
        name: "16oz",
        price: 7.95,
      },
      {
        name: "20oz",
        price: 8.95,
      },
    ],
  },
  {
    name: "Premium & Import Draught",
    description: null,
    price: 6.95,
    sizes: [
      {
        name: "12oz",
        price: 6.95,
      },
      {
        name: "16oz",
        price: 8.5,
      },
      {
        name: "20oz",
        price: 9.5,
      },
    ],
  },
  {
    name: "Domestic Bottles",
    description: null,
    price: 6.95,
    sizes: [],
  },
  {
    name: "Premium & Import Bottles",
    description: null,
    price: 7.95,
    sizes: [],
  },
  {
    name: "Beer Cocktails",
    description: null,
    price: 9.95,
    sizes: [
      {
        name: "20oz",
        price: 9.95,
      },
    ],
  },
];

export const wineCategories: Array<Omit<WineCategory, "id">> = [
  {
    name: "White Wine",
    description: null,
  },
  {
    name: "Red Wine",
    description: null,
  },
  {
    name: "Sparking Wine",
    description: null,
  },
  {
    name: "Wine Cocktails",
    description: null,
  },
];

export const spiritCategories: Array<Omit<SpiritCategory, "id">> = [
  {
    name: "Seltzers",
  },
  {
    name: "Scotch Whiskey",
  },
  {
    name: "Irish Whiskey",
  },
  {
    name: "Canadian Whiskey & Bourbon",
  },
  {
    name: "Premium Tequila",
  },
  {
    name: "Premium Rum",
  },
  {
    name: "Premium Vodka",
  },
  {
    name: "Premium Gin",
  },
  {
    name: "Cognacs & Specialty Liquors",
  },
  {
    name: "Martinis",
  },
  {
    name: "Cocktails",
  },
  {
    name: "Signature Coffees",
  },
];
