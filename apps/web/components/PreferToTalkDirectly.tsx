export default function PreferToTalkDirectly() {
  return (
    <section className="bg-black py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-[#C6FF00] text-[10px] tracking-[0.35em] uppercase mb-6">
          Book A Meeting
        </p>

        <h2 className="text-white text-5xl md:text-6xl font-serif leading-none mb-8">
          Prefer to talk directly?
        </h2>

        <button className="bg-[#C6FF00] text-black px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-white transition">
          Schedule A Call →
        </button>

        <p className="text-white/35 text-sm mt-8">
          30-minute intro call. No commitment required.
        </p>

      </div>
    </section>
  );
}