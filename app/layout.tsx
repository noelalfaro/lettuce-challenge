import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

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
	description: "This page is a challenge submission for lettuce entertain you",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${baskerville.variable} ${outfit.variable}`}
		>
			<body className={`${outfit.className} antialiased`}>{children}</body>
		</html>
	);
}
