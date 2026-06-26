import { Metadata } from "next";
import ContactHero from "@/components/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us | Market Orbit",
  description: "Get in touch with Market Orbit to discuss your brand's growth and marketing needs.",
  openGraph: {
    title: "Contact Us | Market Orbit",
    description: "Get in touch with Market Orbit to discuss your brand's growth and marketing needs.",
    url: "https://marketorbit.in/contact",
  }
};
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import PreferToTalkDirectly from "@/components/PreferToTalkDirectly";
import RatherChat from "@/components/RatherChat";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form + Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

            <ContactForm />

            <ContactInfo />

          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <PreferToTalkDirectly />

      <RatherChat />

    </main>
  );
}