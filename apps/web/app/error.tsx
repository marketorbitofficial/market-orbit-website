"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-black text-white px-4">
      <h2 className="text-4xl font-black text-red-500 mb-4">Something went wrong!</h2>
      <p className="text-zinc-400 mb-8 max-w-md text-center">
        An unexpected error occurred. Our team has been notified.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 border border-lime-orbit text-lime-orbit font-black uppercase tracking-widest hover:bg-lime-orbit hover:text-black transition-all duration-300"
      >
        Try again
      </button>
    </div>
  );
}
