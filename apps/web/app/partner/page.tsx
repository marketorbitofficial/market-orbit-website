import { Metadata } from "next";
import PartnerClient from "./PartnerClient";

export const metadata: Metadata = {
  title: "Partner With Us | Market Orbit",
  description: "Partner with Market Orbit. We work with forward-thinking organizations across industries to drive mutual growth and market reach.",
  openGraph: {
    title: "Partner With Us | Market Orbit",
    description: "Partner with Market Orbit. We work with forward-thinking organizations across industries to drive mutual growth and market reach.",
    url: "https://marketorbit.in/partner",
  }
};

export default function PartnerPage() {
  return <PartnerClient />;
}
