'use client';
import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export const SelectRestaurantBtn = () => {
  const { removeAll } = useContext(CartContext);
  const router = useRouter();

  return (
    <Button
      variant='secondary'
      className='mr-auto border-2 border-amber-600'
      onClick={() => {
        const response = confirm(
          'Are you sure? Currently selected meals will be removed from the cart.'
        );

        if (response) {
          removeAll();
          router.push('/menu/');
        }
      }}
    >
      SELECT ANOTHER RESTAURANT
    </Button>
  );
};
