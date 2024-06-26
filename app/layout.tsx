import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alina Velani's Portfolio",
  description: "Alina Velani is a copywriter and creative strategist based in Toronto, Canada.",
  keywords: ["copywriter", "creative", "strategist", "Toronto", "Canada", "Alina", "Velani", "Account", "Co-ordinator"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}

// <Image
//         src='/bg.png'
//         fill
//         alt='background'
//         sizes="100vw"
//         className='object-cover z-[-1]'
//       />