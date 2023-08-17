'use client';
import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Dish } from '.prisma/client';
import { CartContext } from '../context/CartContext';

export const AddToCartBtn = ({
  dish,
  menuId,
}: {
  dish: Dish;
  menuId: string;
}) => {
  const { ordersList, addOrder, removeOrder } = useContext(CartContext);
  const isAdded = !ordersList.find((order) => dish.id === order.id);

  function addToCart() {
    try {
      addOrder(dish, menuId);
    } catch (err) {
      alert(err);
    }
  }

  function removeFromCart() {
    removeOrder(dish.id);
  }

  return (
    <>
      {isAdded ? (
        <Button size='sm' onClick={addToCart}>
          <span className='text-xs'>ADD TO CART</span>
        </Button>
      ) : (
        <Button size='sm' variant='destructive' onClick={removeFromCart}>
          <span className='text-xs'>REMOVE FROM CART</span>
        </Button>
      )}
    </>
  );
};
