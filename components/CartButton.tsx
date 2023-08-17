'use client';
import Link from 'next/link';
import { clsx } from 'clsx';
import { buttonVariants } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartButton = () => {
  const { ordersList } = useContext(CartContext);

  return (
    <Link
      href='/cart'
      className={clsx([
        buttonVariants({ variant: 'link', size: 'icon' }),
        'flex items-center relative',
      ])}
    >
      <ShoppingCart
        size='35'
        strokeWidth='2'
        color='white'
        className='hover:stroke-yellow-200'
      />
      {ordersList.length > 0 && (
        <div className='absolute inline-flex items-center justify-center w-6 h-6 text-md font-bold text-white bg-red-600 rounded-full -top-1 -right-3 dark:border-gray-900'>
          {ordersList.length}
        </div>
      )}
    </Link>
  );
};
