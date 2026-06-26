import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Market Orbit",
  description: "Learn about Market Orbit, a full-service marketing agency bridging the gap between brands and measurable market growth.",
  openGraph: {
    title: "About Us | Market Orbit",
    description: "Learn about Market Orbit, a full-service marketing agency bridging the gap between brands and measurable market growth.",
    url: "https://marketorbit.in/about",
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
