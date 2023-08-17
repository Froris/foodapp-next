import * as React from 'react';
import { OrderDishCard } from '@/components/OrderDishCard';
import { OrderedDish } from '.prisma/client';

export const HistoryDishesList = ({
  dishesList,
}: {
  dishesList: OrderedDish[];
}) => {
  return (
    <ul className='w-full max-h-[400px] flex flex-row flex-wrap gap-3 px-2 py-3 overflow-y-auto'>
      {dishesList.map((dish) => {
        return (
          <li key={dish.id}>
            <OrderDishCard dish={dish} />
          </li>
        );
      })}
    </ul>
  );
};
