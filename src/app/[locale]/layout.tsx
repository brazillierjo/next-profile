import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "../globals.css";

import StarsCanvas from "@/src/components/main/StarsBackground";
import Navbar from "@/src/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RINCON BRAZILLIER Johan | Portfolio",
  description:
    "Hi there! I'm Johan, a passionate developer showcasing my work in this portfolio. Explore my projects and get in touch! 📱",
  keywords: ["Developer", "Portfolio", "Developer Portflio"],
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.className} overflow-x-hidden overflow-y-scroll bg-[#111]`}>
        <NextIntlClientProvider messages={messages}>
          <StarsCanvas />
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
