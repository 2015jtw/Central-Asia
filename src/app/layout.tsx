import type { Metadata } from "next";
import { Inter, Fira_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Central Asia Tours",
	description: "Travel Agency based in Central Asia",
};

const firaSans = Fira_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={firaSans.className}>{children}</body>
		</html>
	);
}
