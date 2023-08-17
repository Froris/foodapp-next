import React from 'react';
import { Restaurant } from '.prisma/client';
import { SidebarLink } from '@/components/SidebarLink';

interface SidebarProps {
  restaurants: Restaurant[];
}

const Sidebar = ({ restaurants }: SidebarProps) => {
  return (
    <section
      className={'w-2/3 h-full md:w-1/2 xl:w-1/3 flex flex-col justify-between'}
    >
      <nav className='px-2 flex-1 overflow-y-auto'>
        <ul className={'w-full h-full'}>
          {restaurants.map((restaurant) => (
            <SidebarLink key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
