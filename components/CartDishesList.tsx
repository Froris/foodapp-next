'use client';
import * as React from 'react';
import { useContext } from 'react';
import { OrderDishCard } from '@/components/OrderDishCard';
import { CartContext } from '../context/CartContext';
import { CartDishControls } from '@/components/CartDishControls';

export const CartDishesList = () => {
  const { ordersList } = useContext(CartContext);

  return (
    <ul className='w-full h-full flex flex-col gap-y-3 overflow-y-auto px-5'>
      {ordersList.map((dish) => {
        return (
          <li key={dish.id} className='flex flex-raw flex-nowrap w-full'>
            <OrderDishCard dish={dish} />
            <CartDishControls
              id={dish.id.toString()}
              totalOrderPrice={dish.totalOrderPrice.toString()}
              amount={dish.amount}
            />
          </li>
        );
      })}
    </ul>
  );
};
