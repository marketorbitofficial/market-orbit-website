import { Metadata } from "next";
import WhyClient from "./WhyClient";

export const metadata: Metadata = {
  title: "Why Market Orbit | Growth Marketing Agency",
  description: "Discover what makes Market Orbit different and why we are the right choice for your brand's growth journey.",
  openGraph: {
    title: "Why Market Orbit | Growth Marketing Agency",
    description: "Discover what makes Market Orbit different and why we are the right choice for your brand's growth journey.",
    url: "https://marketorbit.in/why-market-orbit",
  }
};

export default function WhyPage() {
  return <WhyClient />;
}
