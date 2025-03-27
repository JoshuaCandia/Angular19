import { Product, taxCalculation } from "./06.function-destructuring";

const shoppingCart: Product[] = [];

shoppingCart.push({
  description: "Telefono 1",
  price: 100,
});

const total = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log("Total: ", total);
