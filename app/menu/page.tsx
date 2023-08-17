import React from 'react';
import bg from '@/assets/mainbg.png';
import Image from 'next/image';
import { ArrowBigLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className='flex gap-x-2 relative'>
      <Image src={bg} alt='bg' className='absolute left-0 top-0 -z-50' />
      <div className='flex items-center p-5 bg-yellow-400'>
        <ArrowBigLeft size={60} color='white' />
        <h1 className='text-4xl font-bold text-white'>Select restaurant!</h1>
      </div>
    </div>
  );
}
