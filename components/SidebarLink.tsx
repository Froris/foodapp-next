'use client';
import { Restaurant } from '.prisma/client';
import Image from 'next/image';
import React from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
  restaurant: Restaurant;
}

const RestaurantBlock = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <>
      <Image
        className='w-full h-full object-cover'
        src={restaurant.image}
        alt={`${restaurant.name} logo`}
        priority
        fill
      />
      <span
        style={{ color: restaurant.brandColor }}
        className='absolute z-40 bottom-0 items-center pl-5 py-1.5 w-full bg-black bg-opacity-80 font-bold text-2xl '
      >
        {restaurant.name}
      </span>
    </>
  );
};

export const SidebarLink = ({ restaurant }: LinkProps) => {
  const urlRestaurantId = usePathname().split('/menu/')[1] || '';

  const isActive = urlRestaurantId === restaurant.id || urlRestaurantId === '';

  return (
    <li
      className={clsx([
        `w-full min-h-[200px] max-h-[250px]
         shrink-0 mb-4 border-4 rounded-md overflow-hidden
         focus:outline focus:outline-offset-2 focus:outline-4
         relative`,
        {
          ['border-amber-500']: isActive,
          [`hover:border-McDonalds`]:
            restaurant.name === "McDonald's" && !isActive,
          [`hover:border-KFC`]: restaurant.name === 'KFC' && !isActive,
          [`hover:border-ChelentanoPizza`]:
            restaurant.name === 'Chelentano Pizza' && !isActive,
        },
      ])}
    >
      {isActive ? (
        <Link className={'block w-full h-full'} href={`/menu/${restaurant.id}`}>
          <RestaurantBlock restaurant={restaurant} />
        </Link>
      ) : (
        <div className='block w-full h-full restaurant_disabled'>
          <RestaurantBlock restaurant={restaurant} />
        </div>
      )}
    </li>
  );
};
