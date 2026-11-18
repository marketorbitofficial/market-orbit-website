import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Market Orbit",
  description: "Explore Market Orbit's services including Content Marketing, PR & Personal Branding, Government Marketing, Social Media Marketing, and Influencer Marketing.",
  openGraph: {
    title: "Our Services | Market Orbit",
    description: "Explore Market Orbit's services including Content Marketing, PR & Personal Branding, Government Marketing, Social Media Marketing, and Influencer Marketing.",
    url: "https://marketorbit.in/services",
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
