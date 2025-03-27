export interface Product {
  description: string;
  price: number;
}

export interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250,
};

const shoppingCart = [phone, tablet];

const tax = 0.15;

export function taxCalculation({
  tax,
  products,
}: TaxCalculationOptions): [number, number] {
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log("Total: ", total);
console.log("Tax: ", taxTotal);

export {};
