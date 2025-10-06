import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Revora Ride - Motorcycle-Inspired Children's Balance Bikes",
  description:
    "Revora Ride creates motorcycle-inspired balance bikes that are as durable as they are timeless. Crafted from steel, each bike is built to last generations, designed not just as a toy, but as a cherished icon of childhood adventure.",
  keywords:
    "children's bikes, balance bikes, motorcycle inspired, steel bikes, durable bikes, kids bicycles, toddler bikes",
  authors: [{ name: "Revora Ride" }],
  openGraph: {
    title: "Revora Ride - Motorcycle-Inspired Children's Balance Bikes",
    description:
      "Revora Ride creates motorcycle-inspired balance bikes that are as durable as they are timeless. Crafted from steel, each bike is built to last generations, designed not just as a toy, but as a cherished icon of childhood adventure.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
