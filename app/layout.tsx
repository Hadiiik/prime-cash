// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PrimeCash',
  description: 'PrimeCash',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
          if (typeof navigator.serviceWorker !== 'undefined') {
            navigator.serviceWorker.register('sw.js')
          }
  }, [])

  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        
      </body>
    </html>
  );
}