import type { Metadata } from "next";
import { Instrument_Sans, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["italic"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: "Product Owner with 7+ years delivering scalable banking and regulatory solutions.",
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSans.variable} ${fraunces.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

