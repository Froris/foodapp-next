import Sidebar from '@/components/Sidebar';
import { db } from '@/lib/PrismaClientSetup';
import { Metadata } from 'next';
import { PageContainer } from '@/components/PageContainer';

export const metadata: Metadata = {
  title: 'Menu',
};

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const restaurants = await db.restaurant.findMany();

  return (
    <PageContainer className='flex flex-row gap-x-2'>
      <Sidebar restaurants={restaurants} />
      <main className='w-full h-full px-3 flex flex-col'>{children}</main>
    </PageContainer>
  );
}
