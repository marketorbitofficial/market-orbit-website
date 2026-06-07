export default function ContactInfo() {
  return (
    <div className="bg-[#0a0a0a] border border-zinc-900 p-6 text-white">

      <p className="text-lime-400 text-xs tracking-[4px] uppercase mb-12">
        Contact Information
      </p>

      <div className="space-y-8">

        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-4">
            Headquarters Address
          </h3>

          <p className="text-lg leading-8 text-zinc-200">
            404 Orbit Tower,
            <br />
            Vijay Nagar, Indore, MP
            <br />
            452010
          </p>
        </div>

        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-4">
            Email
          </h3>

          <p className="text-lg text-zinc-200">
            hello@marketorbit.in
          </p>
        </div>

        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-4">
            Phone
          </h3>

          <p className="text-lg text-zinc-200">
            +91 98765 43210
          </p>
        </div>

        <div>
          <h3 className="text-lime-400 text-xs tracking-[3px] uppercase mb-4">
            Business Hours
          </h3>

          <p className="text-lg text-zinc-200">
            Mon – Sat · 10:00 AM – 7:00 PM IST
          </p>
        </div>

        <button className="w-full bg-lime-400 text-black py-4 font-medium tracking-wide hover:opacity-90 transition">
          CHAT ON WHATSAPP
        </button>

      </div>
    </div>
  );
}