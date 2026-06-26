import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Market Orbit",
  description: "Explore Market Orbit's services including Content Marketing, PR & Personal Branding, Government Marketing, and Social Media Marketing.",
  openGraph: {
    title: "Our Services | Market Orbit",
    description: "Explore Market Orbit's services including Content Marketing, PR & Personal Branding, Government Marketing, and Social Media Marketing.",
    url: "https://marketorbit.in/services",
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
