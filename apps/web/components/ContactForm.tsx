export default function ContactForm() {
  return (
    <div>
      <h1>Contact Form</h1>
    </div>
  );
}
export default function ContactInfo() {
  return (
    <div className="bg-[#0a0a0a] border border-zinc-900 p-8 text-white">
      <p className="text-lime-400 text-xs tracking-[4px] uppercase mb-8">
        Contact Information
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-2">
            Headquarters Address
          </h3>
          <p className="text-zinc-400">
            Bengaluru, Karnataka, India
          </p>
        </div>

        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-2">
            Email
          </h3>
          <p className="text-zinc-400">
            hello@marketorbit.in
          </p>
        </div>

        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-2">
            Phone
          </h3>
          <p className="text-zinc-400">
            +91 XXXXX XXXXX
          </p>
        </div>

        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-2">
            Business Hours
          </h3>
          <p className="text-zinc-400">
            Mon - Fri, 9 AM - 6 PM
          </p>
        </div>

        <button className="bg-lime-400 text-black px-6 py-3 font-semibold">
          CHAT ON WHATSAPP
        </button>
      </div>
    </div>
  );
}