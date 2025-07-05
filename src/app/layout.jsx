import { Geist, Geist_Mono } from 'next/font/google';
import { ReactLenis } from 'lenis/react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Alevtina Gordienko',
  description: "Alevtina Gordienko's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ReactLenis root /> */}
        {/* {children} */}
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
