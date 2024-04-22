import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
