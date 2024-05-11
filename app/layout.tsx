import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RINCON BRAZILLIER Johan | Portfolio",
  description:
    "Hi there! I'm Johan, a passionate developer showcasing my work in this portfolio. Explore my projects and get in touch! 📱",
  keywords: ["Developer", "Portfolio", "Developer Portflio"],
  openGraph: {
    title: "RINCON BRAZILLIER Johan",
    description: "JavaScript Software Engineer",
    images: "/OpenGraph.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden overflow-y-scroll bg-[#111]`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
