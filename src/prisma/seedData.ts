// import {
//   BeerCategory,
//   BeerItem,
//   FoodCategory,
//   FoodItem,
//   SpiritCategory,
//   SpiritItem,
//   WineCategory,
//   WineItem,
// } from "@prisma/client";

export {};

// /**
//  * FOOD
//  */
// export const foodCategories: Array<Omit<FoodCategory, "id">> = [
//   {
//     name: "Starters",
//     description: null,
//     additions: [],
//     substitutions: [],
//   },
//   {
//     name: "Soups & Salads",
//     description: null,
//     additions: [
//       {
//         name: "Chicken Breast",
//         price: 6.95,
//       },
//       {
//         name: "Prawns",
//         price: 6.95,
//       },
//       {
//         name: "CAB Sirloin Steak",
//         price: 9.95,
//       },
//       {
//         name: "Bacon",
//         price: 2.95,
//       },
//       {
//         name: "Garlic Focaccia",
//         price: 2.95,
//       },
//       {
//         name: "Cheese Toast",
//         price: 5.95,
//       },
//       {
//         name: "Avocado",
//         price: 3.95,
//       },
//     ],
//     substitutions: [],
//   },
//   {
//     name: "Flatbreads",
//     description: null,
//     additions: [],
//     substitutions: [],
//   },
//   {
//     name: "Features",
//     description: null,
//     additions: [],
//     substitutions: [],
//   },
//   {
//     name: "Mains",
//     description: null,
//     additions: [],
//     substitutions: [],
//   },
//   {
//     name: "Pasta",
//     description:
//       "All pasta is served with choice of sauce, salad and garlic toast",
//     additions: [],
//     substitutions: [],
//   },
//   {
//     name: "Burgers",
//     description:
//       "Ceili‘s is proud to serve a hand pressed 7oz ground chuck and brisket burger. All burgers and sandwiches are served with choice of house salad, soup of the day, or hand cut Kennebec fries.",
//     substitutions: [
//       {
//         name: "Classic caesar, sweet potato fries, tater tots or champ",
//         price: 2,
//       },
//       {
//         name: "Poutine",
//         price: 3,
//       },
//       {
//         name: "Lettuce Bun",
//         price: 2.9,
//       },
//       {
//         name: "Gluten Free Bun",
//         price: 1.95,
//       },
//     ],
//     additions: [
//       {
//         name: "Double smoked bacon",
//         price: 2.95,
//       },
//       {
//         name: "Goat cheese",
//         price: 1.95,
//       },
//       {
//         name: "Avocado",
//         price: 3.95,
//       },
//       {
//         name: "Sauteed garlic mushrooms",
//         price: 1.95,
//       },
//       {
//         name: "Sauteed onions",
//         price: 1.95,
//       },
//       {
//         name: "Pepper jack cheese",
//         price: 1.95,
//       },
//       {
//         name: "Aged Canadian white cheddar or swiss",
//         price: 1.95,
//       },
//       {
//         name: "Gravy",
//         price: 2.95,
//       },
//     ],
//   },
//   {
//     name: "Sandwiches",
//     description: null,
//     additions: [
//       {
//         name: "Double smoked bacon",
//         price: 2.95,
//       },
//       {
//         name: "Goat cheese",
//         price: 1.95,
//       },
//       {
//         name: "Avocado",
//         price: 3.95,
//       },
//       {
//         name: "Sauteed garlic mushrooms",
//         price: 1.95,
//       },
//       {
//         name: "Sauteed onions",
//         price: 1.95,
//       },
//       {
//         name: "Pepper jack cheese",
//         price: 1.95,
//       },
//       {
//         name: "Aged Canadian white cheddar or swiss",
//         price: 1.95,
//       },
//       {
//         name: "Gravy",
//         price: 2.95,
//       },
//     ],
//     substitutions: [],
//   },
//   {
//     name: "Dessert",
//     description: null,
//     additions: [],
//     substitutions: [],
//   },
// ];

// const STARTERS_ID = "643ebf3e5764af167b88dec9";
// const SALAD_ID = "643ebf3e5764af167b88deca";
// const FLATBREAD_ID = "643ebf3e5764af167b88decb";
// const MAINS_ID = "643ebf3e5764af167b88decd";
// const BURGERS_ID = "643ebf3e5764af167b88decf";
// const SANDWICH_ID = "643ebf3e5764af167b88ded0";
// const DESSERT_ID = "643ebf3e5764af167b88ded1";

// export const foodItems: Array<Omit<FoodItem, "id">> = [
//   {
//     categoryId: STARTERS_ID,
//     name: "Calamari",
//     description: "Light batter, tzatziki, red onion",
//     price: 16.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Dry Ribs",
//     description: "Bone in, cracked black pepper, sea salt",
//     price: 16.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Poutine",
//     description: "Choice of tater tots or fries",
//     price: 16.95,
//     additions: [
//       {
//         name: "Double Smoked Bacon, Chorizo Sausage or Chipotle chicken",
//         price: 2,
//       },
//     ],
//     sizes: [],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Loaded Nachos",
//     description:
//       "Corn tortillas layered with lots of cheese, black beans, corn, jalapeños, black olive, topped with salsa and sour cream",
//     price: 18.95,
//     sizes: [
//       {
//         name: "Half Order",
//         price: 18.95,
//       },
//       {
//         name: "Full Order",
//         price: 24.95,
//       },
//     ],
//     additions: [
//       {
//         name: "Grilled chicken",
//         price: 6.95,
//       },
//       {
//         name: "Extra cheese",
//         price: 3.95,
//       },
//       {
//         name: "Spiced beef",
//         price: 5.95,
//       },
//       {
//         name: "Guacamole",
//         price: 2.95,
//       },
//     ],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Wings",
//     description:
//       "Celery sticks, carrot sticks, ranch or blue cheese dressing. Choose from: Franks Red Hot, Ceili’s house hot, honey garlic, salt & pepper, barbeque, sriracha honey lime",
//     price: 17.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Mini Yorkies",
//     description:
//       "Braised shaved Alberta beef, horseradish aioli, grainy dijon au jus, crispy onions",
//     price: 16.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Chili Lime Chicken Tacos",
//     description:
//       "3 soft flour tortillas topped with spicy pulled chicken, black bean corn salsa, pickled onions, goat cheese, lime wedge",
//     price: 16.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Mac & Cheese Sticks",
//     description: "Spicy sriracha ketchup",
//     price: 16.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: STARTERS_ID,
//     name: "Perogies",
//     description:
//       "Pan fried three cheese perogies topped with sour cream, bacon caramelized onions",
//     price: 15.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Soup of the Day",
//     description: null,
//     price: 5.95,
//     additions: [],
//     sizes: [
//       {
//         name: "Cup",
//         price: 5.95,
//       },
//       {
//         name: "Bowl",
//         price: 8.95,
//       },
//     ],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Classic Caesar",
//     description:
//       "Crisp romaine, croutons, parmesan, in a creamy caesar dressing",
//     price: 13.95,
//     sizes: [
//       {
//         name: "Side",
//         price: 13.95,
//       },
//       {
//         name: "Full",
//         price: 16.95,
//       },
//     ],
//     additions: [
//       {
//         name: "Grilled or blackened chicken",
//         price: 6.95,
//       },
//     ],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Ceili's House",
//     description:
//       "Organic Tuscan mix with cabbage, grainy mustard vinaigrette, tomato, pumpkin seeds, feta",
//     price: 12.95,
//     sizes: [
//       {
//         name: "Side",
//         price: 12.95,
//       },
//       {
//         name: "Full",
//         price: 15.95,
//       },
//     ],
//     additions: [],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Roasted Beet & Goat Cheese Salad",
//     description:
//       "Organic Tuscan mix with cabbage, grainy mustard vinaigrette, tomato, pumpkin seeds, feta",
//     price: 18.95,
//     sizes: [],
//     additions: [],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Soup & Salad Combo",
//     description: "Choice of house or caesar salad, soup and garlic focaccia",
//     price: 16.95,
//     sizes: [],
//     additions: [],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Kale & Quinoa Salad",
//     description:
//       "Agave lime dressing, tomato, corn, black beans, pumpkin seeds, goat cheese",
//     price: 18.95,
//     sizes: [],
//     additions: [],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Blackened Chicken Caesar",
//     description: "Entree size Ceili’s caesar, blackened chicken breast",
//     price: 19.95,
//     sizes: [],
//     additions: [],
//   },
//   {
//     categoryId: SALAD_ID,
//     name: "Hollywood Cobb",
//     description:
//       "Romaine, iceburg lettuce, double smoked bacon, red onions, avocado, tomato, grilled chicken breast, sliced egg, aged Canadian white cheddar, sweet honey bacon dressing",
//     price: 23.95,
//     sizes: [],
//     additions: [],
//   },
//   {
//     categoryId: FLATBREAD_ID,
//     name: "Wild Mushroom",
//     description:
//       "Wild mushrooms, caramelized onion, goat and aged white cheddar cheese, pesto, arugula (tossed in a grainy mustard dressing)",
//     price: 20.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: FLATBREAD_ID,
//     name: "Thai Chicken",
//     description:
//       "Spicy peanut sauce, bell peppers, red onion, Monterey and cheddar cheese",
//     price: 20.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: FLATBREAD_ID,
//     name: "Californian",
//     description:
//       "Avocado, sun-dried tomato sauce, aged white cheddar, fresh basil and tomato slices",
//     price: 20.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Buttermilk Fried Chicken Strips",
//     description: "Made in house, hand cut Kennebec fries, spicy ranch dip",
//     price: 19.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Mac & Cheese",
//     description:
//       "Parmesan, aged cheddar, gruyere, double smoked bacon, Ceili’s house salad",
//     price: 19.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Roasted Turkey Dip",
//     description: "Soft roll, gruyere, crispy onions, cranberry gravy",
//     price: 20.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Pineapple Masala Curry Bowl",
//     description:
//       "With grilled chicken or shrimp, seasonal veggies, coconut jasmine rice",
//     price: 22.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Steak Sandwich",
//     description:
//       "7oz CAB sirloin steak, crispy onions on toasted garlic focaccia bread",
//     price: 25.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Mom's Meatloaf",
//     description:
//       "Baked with spicy tomato glaze, served with mushroom gravy, green peas and mashed potatoes",
//     price: 23.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Thai Cashew Bowl",
//     description:
//       "Choice of grilled chicken or shrimp, spicy lemon grass sauce, egg noodles, seared vegetables, cashews, pineapple salsa",
//     price: 22.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Alexander Keith's Fish n' Chips",
//     description:
//       "Choice of grilled chicken or shrimp, spicy lemon grass sauce, egg noodles, seared vegetables, cashews, pineapple salsa",
//     price: 18.95,
//     additions: [],
//     sizes: [
//       {
//         name: "1 piece",
//         price: 18.95,
//       },
//       {
//         name: "2 piece",
//         price: 24.95,
//       },
//     ],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Shepherd's Pie",
//     description: "Ground beef, champ, parmesan, Ceili’s house salad",
//     price: 22.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: MAINS_ID,
//     name: "Chicken Pot Pie",
//     description:
//       "Pulled chicken, peas, carrots, light thyme cream puffed pastry, ceili’s house salad",
//     price: 22.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: BURGERS_ID,
//     name: "Ceili's Classic Burger",
//     description:
//       "Lettuce, tomato, red onion, garlic aioli, roasted pepper relish, pickle spear",
//     price: 19.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: BURGERS_ID,
//     name: "Belfast Burger",
//     description:
//       "Double smoked bacon, sautéed mushrooms, melted aged Canadian cheddar, crispy onions, lettuce, tomato, garlic aioli, roasted pepper relish, pickle spear",
//     price: 21.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: BURGERS_ID,
//     name: "Flames Burger",
//     description:
//       "Pepper jack cheese, sautéed jalapeños & onions, bacon, chipotle mayo, lettuce, tomato",
//     price: 21.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Reuben Sandwich",
//     description:
//       "Montreal smoked corned beef, sauerkraut, Swiss cheese, Russian dressing on grilled rye",
//     price: 20.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Chicken Clubhouse",
//     description:
//       "Grilled chicken breast, aged cheddar, bacon, garlic aioli, lettuce, tomato, on sourdough",
//     price: 20.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Spicy Crispy Chicken Sandwich",
//     description: "Jalapeño jack cheese, sriracha aioli, arugula",
//     price: 20.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Smoked Bacon Grilled Cheese Sandwich",
//     description:
//       "Sourdough, double smoked bacon, sun dried tomato, aged cheddar, mozzarella, sriracha ketchup dip",
//     price: 19.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Beef Dip",
//     description:
//       "Pepper jack, horseradish aioli, grainy dijon au jus, crispy onions, fresh baguette",
//     price: 21.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Montreal Smoked Meat",
//     description:
//       "Toasted rye bread, thin shaved beef, mustard, coleslaw & pickles",
//     price: 21.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Philly Cheese Steak Sandwich",
//     description:
//       "Thinly sliced beef, sautéed onions, red & green peppers, garlic mayo, spicy pepper jack cheese on fresh baguette",
//     price: 21.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: SANDWICH_ID,
//     name: "Vedge",
//     description:
//       "Housemade brown rice, black bean, pumpkin seeds, and mushroom patty, pepperjack cheese, avocado, chipotle mayo",
//     price: 19.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: DESSERT_ID,
//     name: "Guinness Brownie",
//     description:
//       "Served warm with vanilla ice cream, Jameson caramel and chocolate sauce",
//     price: 9.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: DESSERT_ID,
//     name: "Peanut Butter Stack Brownie",
//     description:
//       "Cookie crust, chewy peanut butter filled brownie, crispy milk chocolate ganache, topped with chocolate cake cubes and rich peanut butter topping",
//     price: 9.95,
//     additions: [],
//     sizes: [],
//   },
//   {
//     categoryId: DESSERT_ID,
//     name: "Apple Pie à la Mode",
//     description: "Served warm with butter rum sauce and vanilla ice cream",
//     price: 8.95,
//     additions: [],
//     sizes: [],
//   },
// ];

// /**
//  * BEER
//  */
// const LOCAL_DRAFT_ID = "64404ebc2fbad4bfc15bdc31";
// const DOMESTIC_DRAFT_ID = "64404ebc2fbad4bfc15bdc32";
// const PREMIUM_DRAFT_ID = "64404ebc2fbad4bfc15bdc33";
// const DOMESTIC_BOTTLES_ID = "64404ebc2fbad4bfc15bdc34";
// const PREMIUM_BOTTLES_ID = "64404ebc2fbad4bfc15bdc35";
// const COCKTAILS_ID = "64404ebc2fbad4bfc15bdc36";

// export const beerCategories: Array<Omit<BeerCategory, "id">> = [
//   {
//     name: "Local Draught",
//     description: null,
//     price: 5.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 5.95,
//       },
//       {
//         name: "16oz",
//         price: 7.95,
//       },
//       {
//         name: "20oz",
//         price: 8.95,
//       },
//     ],
//   },
//   {
//     name: "Domestic & Craft Draught",
//     description: null,
//     price: 5.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 5.95,
//       },
//       {
//         name: "16oz",
//         price: 7.95,
//       },
//       {
//         name: "20oz",
//         price: 8.95,
//       },
//     ],
//   },
//   {
//     name: "Premium & Import Draught",
//     description: null,
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     name: "Domestic Bottles",
//     description: null,
//     price: 6.95,
//     sizes: [],
//   },
//   {
//     name: "Premium & Import Bottles",
//     description: null,
//     price: 7.95,
//     sizes: [],
//   },
//   {
//     name: "Beer Cocktails",
//     description: null,
//     price: 9.95,
//     sizes: [
//       {
//         name: "20oz",
//         price: 9.95,
//       },
//     ],
//   },
// ];

// export const beerItems: Array<Omit<BeerItem, "id">> = [
//   {
//     categoryId: LOCAL_DRAFT_ID,
//     name: "Grasshopper Wheat Ale",
//     description: "Big Rock",
//     location: "Calgary",
//     style: "Wheat Ale",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: LOCAL_DRAFT_ID,
//     name: "Tokyo Drift IPA",
//     description: "Last Best",
//     location: "Calgary",
//     style: "Hazy IPA",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: LOCAL_DRAFT_ID,
//     name: "Black Pilsner",
//     description: "Banff Ave",
//     location: "Banff",
//     style: "Pilsner",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: LOCAL_DRAFT_ID,
//     name: "Wheat Ale",
//     description: "Common Crown",
//     location: "Calgary",
//     style: "Wheat Ale",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Canadian",
//     description: null,
//     location: "Canada",
//     style: "Pale Lager",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Coors Banquet",
//     description: null,
//     location: "USA",
//     style: "Lager",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Coors Light",
//     description: null,
//     location: "USA",
//     style: "Light Lager",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Alexander Keith's",
//     description: null,
//     location: "Canada",
//     style: "India Pale Ale",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Stanley Park Pilsner",
//     description: null,
//     location: "Canada",
//     style: "Pilsner",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Stanley Park Amber",
//     description: null,
//     location: "Canada",
//     style: "Amber Ale",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Mill Street Tankhouse",
//     description: null,
//     location: "Canada",
//     style: "Red Ale",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Fat Tire",
//     description: null,
//     location: "USA",
//     style: "Amber Ale",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_DRAFT_ID,
//     name: "Pabst Blue Ribbon",
//     description: null,
//     location: "USA",
//     style: "Lager",
//     price: 5.95,
//     sizes: [],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Belgian Moon",
//     location: "USA",
//     style: "Wheat Ale",
//     description:
//       "Unfiltered wheat ale spiced in the Belgian tradition for an uncommonly smooth taste",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Lagunitas IPA",
//     location: "USA",
//     style: "IPA",
//     description:
//       "Crafted with 100% Canadian Barley, Lagunitas IPA is a palette pleasing balance of malt and hops",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Dos Equis",
//     location: "USA",
//     style: "Pale Lager",
//     description:
//       "A crisp, refreshing, light-bodied, malt-flavored beer with a well-balanced finish. A Lager that drinks like a Pilsner",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Guinness",
//     location: "Ireland",
//     style: "Stout",
//     description:
//       "Guinness is creamy and smooth with a taste of coffee, dark malts and hints of chocolate",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Heineken",
//     location: "Netherlands",
//     style: "Dutch Lager",
//     description:
//       "A pale golden lager that is light bodied with a great balance between fruit and hop bitterness",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Kilkenny",
//     location: "Ireland",
//     style: "Cream Ale",
//     description:
//       "Irish cream ale that delivers a smooth, flavourful taste with less carbonation than regular beers",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Strongbow",
//     location: "United Kingdom",
//     style: "Cider",
//     description:
//       "A perfectly balanced English apple cider that is light in body, crisp and refreshingly dry. Best served over ice",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Innis & Gunn",
//     location: "Scotland",
//     style: "Scottish Ale",
//     description: "A smooth Scottish beer with hints of toffee, vanilla & oak",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Kronenbourg 1664 Blanc",
//     location: "France",
//     style: "Wheat Ale",
//     description: "Fruity and refreshing wheat ale",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: PREMIUM_DRAFT_ID,
//     name: "Stella Artois",
//     location: "Belgium",
//     style: "Lager",
//     description:
//       "A premium lager that symbolizes European style and sophistication",
//     price: 6.95,
//     sizes: [
//       {
//         name: "12oz",
//         price: 6.95,
//       },
//       {
//         name: "16oz",
//         price: 8.5,
//       },
//       {
//         name: "20oz",
//         price: 9.5,
//       },
//     ],
//   },
//   {
//     categoryId: DOMESTIC_BOTTLES_ID,
//     name: "Budweiser",
//     description: null,
//     style: null,
//     location: null,
//     price: 6.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_BOTTLES_ID,
//     name: "Bug Light",
//     description: null,
//     style: null,
//     location: null,
//     price: 6.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_BOTTLES_ID,
//     name: "Canadian",
//     description: null,
//     style: null,
//     location: null,
//     price: 6.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_BOTTLES_ID,
//     name: "Coors Light",
//     description: null,
//     style: null,
//     location: null,
//     price: 6.95,
//     sizes: [],
//   },
//   {
//     categoryId: DOMESTIC_BOTTLES_ID,
//     name: "Kokanee",
//     description: null,
//     style: null,
//     location: null,
//     price: 6.95,
//     sizes: [],
//   },
//   {
//     categoryId: PREMIUM_BOTTLES_ID,
//     name: "Corona",
//     description: null,
//     style: null,
//     location: null,
//     price: 7.95,
//     sizes: [],
//   },
//   {
//     categoryId: PREMIUM_BOTTLES_ID,
//     name: "Sleeman Honey Brown",
//     description: null,
//     style: null,
//     location: null,
//     price: 7.95,
//     sizes: [],
//   },
//   {
//     categoryId: PREMIUM_BOTTLES_ID,
//     name: "Schofferhofer Grapefruit Radler",
//     description: null,
//     style: null,
//     location: null,
//     price: 7.95,
//     sizes: [],
//   },
//   {
//     categoryId: PREMIUM_BOTTLES_ID,
//     name: "Mongozo (Gluten Free)",
//     description: null,
//     style: null,
//     location: null,
//     price: 7.95,
//     sizes: [],
//   },
//   {
//     categoryId: PREMIUM_BOTTLES_ID,
//     name: "Magners",
//     description: null,
//     style: null,
//     location: null,
//     price: 9.5,
//     sizes: [],
//   },
//   {
//     categoryId: PREMIUM_BOTTLES_ID,
//     name: "Big Rock Rose Cider",
//     description: null,
//     style: null,
//     location: null,
//     price: 9.5,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "Half & Half",
//     description: "Harp and Guinness",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "Snakebite",
//     description: "Harp and Strongbow",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "Crown Float",
//     description: "Guinness and Strongbow",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "Creamsicle",
//     description: "Kilkenny and Strongbow",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "Shandy",
//     description: "Stella and Ginger Ale",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "White Summer",
//     description: "Kronenbourg Blanc and Strongbow",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "Dark Knight",
//     description: "Guinness and Kronenbourg Blanc",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
//   {
//     categoryId: COCKTAILS_ID,
//     name: "Guinness & Gunn",
//     description: "Guinness and Innis & Gunn",
//     style: null,
//     location: null,
//     price: 9.95,
//     sizes: [],
//   },
// ];

// /**
//  * WINE
//  */
// export const wineCategories: Array<Omit<WineCategory, "id">> = [
//   {
//     name: "White Wine",
//     description: null,
//   },
//   {
//     name: "Red Wine",
//     description: null,
//   },
//   {
//     name: "Sparking Wine",
//     description: null,
//   },
//   {
//     name: "Wine Cocktails",
//     description: null,
//   },
// ];

// const WHITE_ID = "64405e0da02a53d7e0fde889";
// const RED_ID = "64405e0da02a53d7e0fde88a";
// const SPARKING_ID = "64405e0da02a53d7e0fde88b";
// const WINE_COCKTAIL_ID = "64405e0da02a53d7e0fde88c";

// export const wineItems: Array<Omit<WineItem, "id">> = [
//   /**
//    * Whites
//    */
//   {
//     categoryId: WHITE_ID,
//     name: "House White Sauvignon Blanc",
//     location: null,
//     description: null,
//     sizes: [],
//   },
//   {
//     categoryId: WHITE_ID,
//     name: "Lamberti Pinot Grigio",
//     location: "Venito, Italy",
//     description: null,
//     sizes: [],
//   },
//   {
//     categoryId: WHITE_ID,
//     name: "The Original Chardonnay",
//     location: "Languedoc, France",
//     description: null,
//     sizes: [],
//   },
//   {
//     categoryId: WHITE_ID,
//     name: "Perigord Sauvignon Blanc",
//     location: "Perigord, France",
//     description: null,
//     sizes: [],
//   },
//   {
//     categoryId: WHITE_ID,
//     name: "Bear Flag (Blend)",
//     location: "California, USA",
//     description: null,
//     sizes: [],
//   },
//   {
//     categoryId: WHITE_ID,
//     name: "Long Shot Rose",
//     location: "California, USA",
//     description: null,
//     sizes: [],
//   },

//   /**
//    * Reds
//    */
//   {
//     categoryId: RED_ID,
//     name: "House Red Cabernet Sauvignon",
//     description: null,
//     location: null,
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "Norton Barrel Select Malbec",
//     description: null,
//     location: "Mendoza, Argentina",
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "Perigord Merlot",
//     description: null,
//     location: "Perigord, France",
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "Nugan Scruffy Shiraz",
//     description: null,
//     location: "New West Wales, Australia",
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "Chateau La Besage Merlot Cab Sauv",
//     description: null,
//     location: "Bergerac, France",
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "Novas Cabernet Sauvignon",
//     description: null,
//     location: "Maipo Valley, Chile",
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "The Original Pinot Noir",
//     description: null,
//     location: "Languedoc, France",
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "Privada Malbec",
//     description: null,
//     location: "Mendoza, Argentina",
//     sizes: [],
//   },
//   {
//     categoryId: RED_ID,
//     name: "Meiomi Pinot Noir",
//     description: null,
//     location: "California, USA",
//     sizes: [],
//   },
// ];

// /**
//  * SPIRITS
//  */

// const SELTZER_ID = "6441604cce75cf2a563d65a1";
// const SCOTCH_WHISKEY_ID = "6441604cce75cf2a563d65a2";

// export const spiritItems: Array<Omit<SpiritItem, "id">> = [
//   {
//     categoryId: SCOTCH_WHISKEY_ID,
//     name: "Lagavulin 16 Year",
//     price: 13.95,
//     description: null,
//   },
//   {
//     categoryId: SCOTCH_WHISKEY_ID,
//     name: "Talisker",
//     price: 9.95,
//     description: null,
//   },
//   {
//     categoryId: SCOTCH_WHISKEY_ID,
//     name: "Glenlivet 12 Year",
//     price: 7.95,
//     description: null,
//   },
//   {
//     categoryId: SCOTCH_WHISKEY_ID,
//     name: "Glenlivet 15 Year",
//     price: 9.95,
//     description: null,
//   },
//   {
//     categoryId: SCOTCH_WHISKEY_ID,
//     name: "Glenlivet 18 Year",
//     price: 13.95,
//     description: null,
//   },
// ];

// export const spiritCategories: Array<Omit<SpiritCategory, "id">> = [
//   {
//     name: "Seltzers",
//   },
//   {
//     name: "Scotch Whiskey",
//   },
//   {
//     name: "Irish Whiskey",
//   },
//   {
//     name: "Canadian Whiskey & Bourbon",
//   },
//   {
//     name: "Premium Tequila",
//   },
//   {
//     name: "Premium Rum",
//   },
//   {
//     name: "Premium Vodka",
//   },
//   {
//     name: "Premium Gin",
//   },
//   {
//     name: "Cognacs & Specialty Liquors",
//   },
//   {
//     name: "Martinis",
//   },
//   {
//     name: "Cocktails",
//   },
//   {
//     name: "Signature Coffees",
//   },
// ];
