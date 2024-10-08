import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import './globals.css';
import SearchBox from '@/components/SearchBox';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IMDb UI',
  description: 'IMDb ui using next js typescript and tailwind css',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='author' content='CADR' />
      </Head>
      <body className={font.className}>
        <ThemeContextProvider>
          <Header></Header>
          <Navbar></Navbar>
          <SearchBox></SearchBox>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
