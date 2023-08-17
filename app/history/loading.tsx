import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { DishesList } from '@/components/DishesList';

export default function Loading() {
  return (
    <>
      <Skeleton className='w-[300px] h-[40px] rounded-full mb-3' />
      <section className='overflow-y-auto mt-5 flex-1 flex flex-row flex-wrap gap-5'>
        <DishesList title='Main'>
          <Skeleton className='w-[240px] h-[345px] rounded-b-md' />
          <Skeleton className='w-[240px] h-[345px] rounded-b-md' />
          <Skeleton className='w-[240px] h-[345px] rounded-b-md' />
          <Skeleton className='w-[240px] h-[345px] rounded-b-md' />
          <Skeleton className='w-[240px] h-[345px] rounded-b-md' />
        </DishesList>
      </section>
    </>
  );
}
