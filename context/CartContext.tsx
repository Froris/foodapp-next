import { createContext, useEffect, useState } from 'react';
import { Dish } from '.prisma/client';
import { getItemsFromLocalStorage } from '@/lib/utils';

export interface ClientOrderedDish extends Dish {
  amount: number;
  totalOrderPrice: number;
}

export const CartContext = createContext({
  ordersList: {} as ClientOrderedDish[],
  addOrder: (dish: Dish, menuId: string) => {},
  removeOrder: (id: string | number) => {},
  changeAmount: (id: string, value: string) => {},
  removeAll: () => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ordersList, setOrdersList] = useState<ClientOrderedDish[]>([]);

  function addOrder(dish: Dish, menuId: string) {
    const currentRestaurantId = localStorage.getItem('menuId');

    if (currentRestaurantId === null) {
      localStorage.setItem('menuId', menuId);
    } else if (currentRestaurantId !== menuId) {
      throw new Error(
        'When placing an order from one restaurant, please complete or cancel your previous order before selecting items from a different restaurant.'
      );
    }

    const newOrder: ClientOrderedDish = {
      ...dish,
      amount: 1,
      totalOrderPrice: dish.price,
    };

    if (ordersList.length > 0) {
      const newArr: ClientOrderedDish[] = [...ordersList];

      newArr.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(newArr));
      setOrdersList((prev) => newArr);
      return;
    }

    localStorage.setItem('orders', JSON.stringify([newOrder]));
    setOrdersList([newOrder]);
  }

  function removeOrder(id: string | number) {
    const updatedOrders = ordersList.filter((order) => order.id !== id);
    setOrdersList(updatedOrders);
    localStorage.setItem('orders', JSON.stringify([...updatedOrders]));
    if (updatedOrders.length <= 0) {
      localStorage.removeItem('menuId');
    }
  }

  function removeAll() {
    setOrdersList((prev) => []);
    localStorage.removeItem('orders');
    localStorage.removeItem('menuId');
  }

  function changeAmount(id: string, value: string) {
    const amount = Number(value);
    if (Number(value) > 1) {
      const updatedArray: ClientOrderedDish[] = ordersList.map((order) => {
        if (order.id === id) {
          const calculatedPrice = order.price * amount;
          const totalOrderPrice = Number(calculatedPrice.toFixed(2));
          return {
            ...order,
            amount,
            totalOrderPrice,
          };
        }
        return order;
      });

      localStorage.setItem('orders', JSON.stringify(updatedArray));
      setOrdersList(updatedArray);
    }
  }

  useEffect(() => {
    const orders = getItemsFromLocalStorage('orders');
    if (orders) {
      setOrdersList((prev) => orders);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        ordersList,
        addOrder,
        removeOrder,
        changeAmount,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
