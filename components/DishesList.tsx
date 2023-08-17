import React from 'react';
import { Divider } from '@/components/Divider';

export const DishesList = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <article className='mt-5 w-full'>
    <Divider>
      <h3 className='text-xl'>{title}</h3>
    </Divider>
    <div className='flex gap-5 flex-wrap'>{children}</div>
  </article>
);
