import { useEffect, useState } from 'react';
import { OrderedDish } from '@/components/CartDishesList';

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

  useEffect(() => {}, []);

  return { ordersList, addOrder, removeOrder, getOrdersFromStorage } as {
    ordersList: OrderedDish[];
    addOrder: (dish: OrderedDish) => void;
    removeOrder: (id: string) => void;
    getOrdersFromStorage: () => void;
  };
};

export default useCartStorage;
