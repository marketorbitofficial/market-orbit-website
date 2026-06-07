import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import PreferToTalkDirectly from "@/components/PreferToTalkDirectly";
import RatherChat from "@/components/RatherChat";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto p-10 grid grid-cols-[1fr_2fr] gap-8 items-start">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* CTA Section */}
      <PreferToTalkDirectly />

      {/* WhatsApp Section */}
      <RatherChat />

    </div>
  );
}