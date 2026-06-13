"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth spring follow — lerp factor 0.07 for the signature "lag" feel
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${currentX - 210}px, ${currentY - 210}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={blobRef} className="cursor-glow" aria-hidden="true" />;
}
