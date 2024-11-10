import { Montserrat_Alternates } from 'next/font/google'
import localFont from "next/font/local";
import type { Metadata } from "next";

import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montSerrat =  Montserrat_Alternates({
  weight: ["100", "200","300", "400", "500"], 
  variable: "--font-montserrat",
  subsets: ["latin"],
  preload: true
})

export const metadata: Metadata = {
  title: "HONRA",
  description: "CONFERÊNCIA HONRA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${montSerrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
