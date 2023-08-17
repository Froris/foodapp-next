import React from 'react';
import { ClientForm } from '@/cart/Form';
import { CartDishesList } from '@/components/CartDishesList';
import { PageContainer } from '@/components/PageContainer';

export default function Page() {
  return (
    <PageContainer>
      <main className='w-full h-full flex flex-1 flex-row'>
        <section className='flex-1 flex flex-col'>
          {/*<article className='flex-1 bg-pink-400'>/!*map here*!/</article>*/}
          <article className='flex-[1.5]'>
            <ClientForm />
          </article>
        </section>
        <section className='flex-1'>
          <CartDishesList />
        </section>
      </main>
    </PageContainer>
  );
}
