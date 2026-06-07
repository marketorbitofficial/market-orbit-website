export default function ContactForm() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto border border-zinc-900 p-8 bg-[#0a0a0a]">

        <p className="text-lime-400 text-xs tracking-[4px] uppercase mb-8">
          Send Us A Message
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block text-lime-400 text-xs tracking-[3px] uppercase mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-black border border-zinc-800 p-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-lime-400 text-xs tracking-[3px] uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-black border border-zinc-800 p-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-lime-400 text-xs tracking-[3px] uppercase mb-2">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+91"
              className="w-full bg-black border border-zinc-800 p-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-lime-400 text-xs tracking-[3px] uppercase mb-2">
              Service Interest
            </label>
            <input placeholder="Select a Service" ></input>
            <select className="w-full bg-black border border-zinc-800 p-3">
              <option>Select Service</option>
              <option>Youth Marketing</option>
              <option>PR & Personal Branding</option>
              <option>Government Marketing</option>
              <option>Social Media Marketing</option>
            </select>
          </div>

        </div>

        <div className="mt-6">
          <label className="block text-lime-400 text-xs tracking-[3px] uppercase mb-2">
            Budget Range
          </label>
          <input placeholder="Under 50k"></input>
          <select className="w-full bg-black border border-zinc-800 p-3">
            <option>Under ₹50K</option>
            <option>₹50K - ₹2L</option>
            <option>₹2L - ₹5L</option>
            <option>₹5L+</option>
          </select>
        </div>

        <div className="mt-6">
          <label className="block text-lime-400 text-xs tracking-[3px] uppercase mb-2">
            Message
          </label>
          <textarea
            rows={6}
            className="w-full bg-black border border-zinc-800 p-3 outline-none">
            
         </textarea>
        </div>

        <button className="mt-8 bg-lime-400 text-black px-10 py-4 font-semibold hover:opacity-90">
          SEND MESSAGE
        </button>

      </div>
    </div>
  );
}