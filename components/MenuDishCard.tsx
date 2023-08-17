'use client';
import React from 'react';
import Image from 'next/image';
import { AddToCartBtn } from '@/components/AddToCartBtn';
import { Dish } from '.prisma/client';

export const MenuDishCard = ({
  dish,
  menuId,
}: {
  dish: Dish;
  menuId: string;
}) => {
  const { image, price, name, description } = dish;

  return (
    <article
      className='flex flex-col w-[240px] h-[345px] border
      border-gray-300 shadow-md rounded-md bg-white transition-shadow
      overflow-hidden'
    >
      <section className='w-full h-2/4 mb-1 rounded-t-md relative overflow-hidden'>
        <Image
          src={image}
          fill
          alt='Picture of dish'
          className='object-contain'
        />
      </section>

      <section className='flex flex-row mb-2 px-2 font-bold text-xl'>
        <h3 className='flex-1'>{name}</h3>
        <span>{price}</span>
        <span>$</span>
      </section>
      <p className='mb-2 px-2 font-light text-sm'>{description}</p>
      <section className='mt-auto mr-2 ml-auto mb-2'>
        <AddToCartBtn dish={dish} menuId={menuId} />
      </section>
    </article>
  );
};
