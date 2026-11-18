import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Stats = dynamic(() => import("@/components/sections/Stats"));

export const metadata = {
  title: "Market Orbit | Marketing Agency",
  description: "A growth-focused marketing agency in Central India. We build brands, drive measurable growth, and connect businesses with the right customers.",
};

const stats = [
  { value: "50+", label: "Brands Partnered" },
  { value: "3",   label: "Countries" },
  { value: "5",   label: "Service Verticals" },
  { value: "100%", label: "Client Retention" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Hero />
      <Stats stats={stats} />
    </div>
  );
}
