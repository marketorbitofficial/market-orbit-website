import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

export const metadata: Metadata = {
  title: "Market Orbit",
  description:
    "Campus activations, Gen Z content strategy, creator campaigns and meme marketing - built for the next generation of consumers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
