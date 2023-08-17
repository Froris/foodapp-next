import React from 'react';
import { SelectRestaurantBtn } from '@/components/SelectRestaurantBtn';
import { db } from '@/lib/PrismaClientSetup';
import { menuSelect } from '@/menu/[restaurantId]/types';
import { MenuDishCard } from '@/components/MenuDishCard';
import { DishesList } from '@/components/DishesList';

const getRestaurantData = async (id: string) => {
  const [restaurant, menu] = await db.$transaction([
    db.restaurant.findUnique({
      where: {
        id,
      },
    }),
    db.menu.findUnique({
      where: {
        restaurantId: id,
      },
      select: menuSelect,
    }),
  ]);

  return { restaurant, menu };
};

export default async function Page({
  params,
}: {
  params: { restaurantId: string };
}) {
  const { restaurant, menu } = await getRestaurantData(params.restaurantId);

  if (!restaurant || !menu) {
    throw new Error('Ooops... Something went wrong. Try again later');
  }

  return (
    <>
      <h1
        className='text-4xl text-white mb-3'
        style={{ backgroundColor: restaurant.brandColor }}
      >
        {restaurant.name}
      </h1>
      <SelectRestaurantBtn />
      <section className='overflow-y-auto mt-5 pr-2 flex-1 flex flex-row flex-wrap gap-5'>
        <DishesList title='Main'>
          {menu.mainDishes.map((dish) => (
            <MenuDishCard
              key={dish.id}
              dish={dish}
              menuId={params.restaurantId}
            />
          ))}
        </DishesList>
        <DishesList title='Desserts'>
          {menu.desserts.map((dish) => (
            <MenuDishCard
              key={dish.id}
              dish={dish}
              menuId={params.restaurantId}
            />
          ))}
        </DishesList>
        <DishesList title='Drinks'>
          {menu.drinks.map((dish) => (
            <MenuDishCard
              key={dish.id}
              dish={dish}
              menuId={params.restaurantId}
            />
          ))}
        </DishesList>
      </section>
    </>
  );
}
