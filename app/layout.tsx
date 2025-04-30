import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

const outfit = Outfit({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Lettuce Challenge ABA",
  description:
    "Recreating a section of the Mon Ami Gabi website with React, Next.js & Tailwind. Features include reservation form and dynamic upcoming events display.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baskerville.variable} ${outfit.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        <Providers>
          <main className="container flex min-h-screen w-full flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
