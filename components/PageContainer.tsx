import { clsx } from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const PageContainer = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(['container h-[calc(100vh-80px)] pt-5 pb-2', className])}
    >
      {children}
    </div>
  );
};
