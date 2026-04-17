import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// @ts-expect-error - CSS side-effect import
import "./globals.css";
import clsx from "clsx";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "NYPOT",
  description: "Rediscover your posture. The NYPOT Solace Kneeling Chair engineered for active sitting and deep focus.",
  openGraph: {
    title: "NYPOT",
    description: "Rediscover your posture. Engineered for active sitting and deep focus.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx("scroll-smooth", inter.variable, playfair.variable)}>
      <body className={clsx(inter.className, "tracking-tight antialiased")}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
