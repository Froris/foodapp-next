import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

export const getItemsFromLocalStorage = (name: string) => {
  const items = localStorage.getItem(name);
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

export class DishOrder {
  constructor(
    public name: string,
    public image: string,
    public description: string | null,
    public price: number,
    public amount: number,
    public totalOrderPrice: number
  ) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.amount = amount;
    this.totalOrderPrice = totalOrderPrice;
  }
}
