import React from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";

const stats = [
  { value: "50+", label: "Brands Partnered" },
  { value: "3",   label: "Countries" },
  { value: "4",   label: "Service Verticals" },
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
