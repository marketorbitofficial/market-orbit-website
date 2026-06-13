export default function RatherChat() {
  return (
    <section className="bg-[#0a0a0a] py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-[#C6FF00] text-[10px] tracking-[0.35em] uppercase mb-6">
          WhatsApp Us
        </p>

        <div className="text-[#C6FF00] text-6xl mb-8">
          💬
        </div>

        <h2 className="text-white text-5xl md:text-6xl font-serif leading-none mb-6">
          Rather chat?
        </h2>

        <p className="text-white/35 max-w-xl mx-auto mb-10">
          Drop us a message on WhatsApp and we'll respond within the hour.
        </p>

        <button className="bg-[#C6FF00] text-black px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-white transition">
          Open WhatsApp →
        </button>

      </div>
    </section>
  );
}