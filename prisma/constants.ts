import banana from "@/assets/images/banana.webp";
import chicken from "@/assets/images/chicken.webp";
import coffe from "@/assets/images/coffe.webp";
import coffe1 from "@/assets/images/coffe1.webp";
import coffe2 from "@/assets/images/coffee2.webp";
import coffe3 from "@/assets/images/coffee3.webp";
import coffe4 from "@/assets/images/coffee4.webp";
import free from "@/assets/images/free.webp";
import new1 from "@/assets/images/new1.webp";
import new2 from "@/assets/images/new2.webp";
import roll from "@/assets/images/roll.webp";
import roll2 from "@/assets/images/roll2.webp";
import sand from "@/assets/images/sand.webp";
import shake1 from "@/assets/images/shake1.webp";
import shake2 from "@/assets/images/shake2.webp";
import shake3 from "@/assets/images/shake3.webp";
import shake4 from "@/assets/images/shake4.webp";
export const categories = [
  {
    name: "Pizzas",
  },
  {
    name: "Breakfast",
  },
  {
    name: "Snacks",
  },
  {
    name: "Cocktails",
  },
  {
    name: "Drinks",
  },
];

export const _ingredients = [
  {
    name: "Cheese Crust",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Creamy Mozzarella",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Cheddar and Parmesan Cheese",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Spicy Jalapeño Pepper",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Tender Chicken",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Champignon Mushrooms",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Ham",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Spicy Pepperoni",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Spicy Chorizo",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Pickled Cucumbers",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Fresh Tomatoes",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Red Onion",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Juicy Pineapples",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Italian Herbs",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Sweet Pepper",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Feta Cheese Cubes",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Meatballs",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));
export const products = [
  {
    name: "Omelet with ham and mushrooms",
    imageUrl: String(new1),
    categoryId: 2,
  },
  {
    name: "Omelet with pepperoni",
    imageUrl: String(new2),
    categoryId: 2,
  },
  {
    name: "Coffee Latte",
    imageUrl: String(coffe2),
    categoryId: 2,
  },
  {
    name: "Denwich ham and cheese",
    imageUrl: String(sand),
    categoryId: 3,
  },
  {
    name: "Chicken nuggets",
    imageUrl: String(chicken),
    categoryId: 3,
  },
  {
    name: "Baked potatoes with sauce 🌱",
    imageUrl: String(free),
    categoryId: 3,
  },
  {
    name: "Dodster",
    imageUrl: String(roll2),
    categoryId: 3,
  },
  {
    name: "Spicy Dodster 🌶️🌶️",
    imageUrl: String(roll),
    categoryId: 3,
  },
  {
    name: "Banana milkshake",
    imageUrl: String(banana),
    categoryId: 4,
  },
  {
    name: "Caramel apple milkshake",
    imageUrl: String(shake1),
    categoryId: 4,
  },
  {
    name: "Milkshake with Oreo cookies",
    imageUrl: String(shake2),
    categoryId: 4,
  },
  {
    name: "Classic milkshake 👶",
    imageUrl: String(shake3),
    categoryId: 4,
  },
  {
    name: "Irish Cappuccino",
    imageUrl: String(shake4),
    categoryId: 5,
  },
  {
    name: "Caramel cappuccino coffee",
    imageUrl: String(coffe4),
    categoryId: 5,
  },
  {
    name: "Coconut latte coffee",
    imageUrl: String(coffe1),
    categoryId: 5,
  },
  {
    name: "Americano coffee",
    imageUrl: String(coffe),
    categoryId: 5,
  },
  {
    name: "Coffee Latte",
    imageUrl: String(coffe3),
    categoryId: 5,
  },
];
