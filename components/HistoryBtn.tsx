import { History } from 'lucide-react';
import { clsx } from 'clsx';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export const HistoryBtn = () => {
  return (
    <Link
      href='/history'
      className={clsx([
        buttonVariants({ variant: 'link', size: 'icon' }),
        'flex items-center relative',
      ])}
    >
      <History
        size='35'
        strokeWidth='2'
        color='white'
        className='hover:stroke-yellow-200'
      />
    </Link>
  );
};
