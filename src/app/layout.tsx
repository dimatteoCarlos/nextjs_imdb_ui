import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Search from './search/page';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IMDb ui clone',
  description: 'IMDb ui clone using next js typescript and Tailwind css',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <Header></Header>
        <Navbar></Navbar>
        <Search></Search>
        {children}
      </body>
    </html>
  );
}
