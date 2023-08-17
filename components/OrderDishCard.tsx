import Image from 'next/image';
import { ClientOrderedDish } from '../context/CartContext';
import { OrderedDish } from '.prisma/client';

export const OrderDishCard = ({
  dish,
}: {
  dish: OrderedDish | ClientOrderedDish;
}) => {
  const { id, image, price, name, description, amount, totalOrderPrice } = dish;

  return (
    <article className='w-[240px] h-[245px] shrink-0 flex flex-col border border-gray-300 rounded-md shadow-md transition-shadow bg-white'>
      <section className='w-full h-2/4 mb-1 relative overflow-hidden'>
        <Image
          src={image}
          fill
          alt='Picture of dish'
          className='object-cover'
        />
      </section>
      <section className='flex flex-row mb-2 px-2 font-bold text-xl '>
        <h3 className='flex-1'>{name}</h3>
        <span>{price.toString()}</span>
        <span>$</span>
      </section>
      <p className='mb-2 px-2 font-light text-sm'>{description}</p>
    </article>
  );
};
