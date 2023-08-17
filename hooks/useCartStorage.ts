import { useState } from 'react';
import { OrderedDish } from '.prisma/client';

const useCartStorage = (key: string) => {
  const [ordersList, setOrdersList] = useState([]);

  function addOrder() {}

  function removeOrder() {}

  function getOrdersFromStorage() {
    const orders = localStorage.getItem('orders');
    if (orders) {
      const userOrders = JSON.parse(orders);
      setOrdersList(userOrders);
    }
  }

  return { ordersList, addOrder, removeOrder, getOrdersFromStorage } as {
    ordersList: OrderedDish[];
    addOrder: (dish: OrderedDish) => void;
    removeOrder: (id: string) => void;
    getOrdersFromStorage: () => void;
  };
};

export default useCartStorage;
