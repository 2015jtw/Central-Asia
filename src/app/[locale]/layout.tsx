import type { Metadata } from "next";
import { Inter, Fira_Sans } from "next/font/google";
import Head from "next/head";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Central Asia Tours",
  description: "Travel Agency based in Central Asia",
};

const firaSans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const defaultLocale = "de";
  const currentLocale = locale || defaultLocale;
  const messages = await getMessages({ locale: currentLocale });

  return (
    <html lang={currentLocale}>
      <body className={firaSans.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
