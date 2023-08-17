import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';
import { buttonVariants } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';
import { CartButton } from '@/components/CartButton';
import { HistoryBtn } from '@/components/HistoryBtn';

const Logo = () => {
  return (
    <Link
      href='/menu'
      className={clsx([
        buttonVariants({ variant: 'link' }),
        'flex items-center gap-x-1.5',
      ])}
    >
      <Image src={logo} alt='Picture of the author' width='60' />
      <span className='text-3xl text-white hover:text-yellow-200'>FoodApp</span>
    </Link>
  );
};

export const Header = () => {
  return (
    <header className='w-full h-20 bg-amber-400 p-10'>
      <nav className='container h-full flex items-center'>
        <Logo />
        <div className='w-1/4 ml-auto flex items-center justify-center'>
          <CartButton />
          <div className='w-[2px] h-[40px] mx-6 bg-white' />
          <HistoryBtn />
        </div>
      </nav>
    </header>
  );
};
