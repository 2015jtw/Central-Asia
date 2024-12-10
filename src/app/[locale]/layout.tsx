import type { Metadata } from "next";
import { Inter, Fira_Sans } from "next/font/google";
import Head from "next/head";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={firaSans.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
