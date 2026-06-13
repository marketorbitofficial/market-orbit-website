import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/layout/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Market Orbit | Youth Marketing Agency",
  description: "The leading youth marketing agency in Central India. We build brands, we drive growth, we connect with Gen Z.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-lime-orbit selection:text-black">
        <CursorGlow />
        <Navbar />
        <main className="flex-grow pt-[76px] flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
