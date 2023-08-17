import { clsx } from 'clsx';

export const Divider = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className='sticky top-0 z-50'>
    <div
      className={clsx([
        'flex flex-row before:w-[10%] after:w-[90%] divider',
        'bg-white',
        className,
      ])}
    >
      <span className='mx-1.5'>{children}</span>
    </div>
    <div className='h-5 w-full bg-gradient-to-b from-white' />
  </div>
);
