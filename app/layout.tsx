import '@/styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import RootProviders from '@/RootProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | FoodApp',
    default: 'FoodApp',
  },
  description: 'Your all favourite restaurants in one place!',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RootProviders>
          <Header />
          {children}
        </RootProviders>
      </body>
    </html>
  );
}
