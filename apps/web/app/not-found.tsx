import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-black text-white px-4">
      <h2 className="text-6xl font-black text-lime-orbit mb-4">404</h2>
      <h3 className="text-2xl font-bold mb-6">Page Not Found</h3>
      <p className="text-zinc-400 mb-8 max-w-md text-center">
        The page you are looking for doesn't exist or has been moved. Let's get you back to safety.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-lime-orbit text-black font-black uppercase tracking-widest hover:bg-white transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
