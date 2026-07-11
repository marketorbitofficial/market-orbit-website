import { useEffect, useRef, useState } from "react";
import India from "@react-map/india";

const MAP_SIZE = 400;

type City = {
  name: string;
  state: string;
  fallback: { left: number; top: number };
  anchor: { x: number; y: number };
};

// Anchors are visual positions within each state's rendered SVG bounds. They
// follow the reference political map, but stay inside the matching state shape.
const cities = [
  { name: "Mumbai", state: "Maharashtra", fallback: { left: 27.0, top: 59.5 }, anchor: { x: 0.16, y: 0.58 } },
  { name: "Delhi", state: "Delhi", fallback: { left: 32.8, top: 31.0 }, anchor: { x: 0.5, y: 0.5 } },
  { name: "Bengaluru", state: "Karnataka", fallback: { left: 34.8, top: 76.0 }, anchor: { x: 0.52, y: 0.7 } },
  { name: "Hyderabad", state: "Telangana", fallback: { left: 39.0, top: 63.6 }, anchor: { x: 0.48, y: 0.56 } },
  { name: "Chennai", state: "Tamil Nadu", fallback: { left: 40.0, top: 74.7 }, anchor: { x: 0.82, y: 0.42 } },
  { name: "Kolkata", state: "West Bengal", fallback: { left: 67.4, top: 50.4 }, anchor: { x: 0.64, y: 0.72 } },
  { name: "Pune", state: "Maharashtra", fallback: { left: 29.2, top: 61.8 }, anchor: { x: 0.28, y: 0.62 } },
  { name: "Ahmedabad", state: "Gujarat", fallback: { left: 23.6, top: 49.6 }, anchor: { x: 0.52, y: 0.47 } },
  { name: "Jaipur", state: "Rajasthan", fallback: { left: 28.6, top: 39.2 }, anchor: { x: 0.58, y: 0.39 } },
  { name: "Chandigarh", state: "Chandigarh", fallback: { left: 31.5, top: 25.4 }, anchor: { x: 0.5, y: 0.5 } },
  { name: "Kochi", state: "Kerala", fallback: { left: 31.6, top: 84.8 }, anchor: { x: 0.58, y: 0.72 } },
  { name: "Bhopal", state: "Madhya Pradesh", fallback: { left: 36.8, top: 48.6 }, anchor: { x: 0.52, y: 0.55 } },
] satisfies City[];

export default function CityMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState(() =>
    Object.fromEntries(cities.map(({ name, fallback }) => [name, fallback]))
  );

  useEffect(() => {
    let frame = 0;

    const placeMarkers = () => {
      const svg = mapRef.current?.querySelector("svg");
      const viewBox = svg?.viewBox.baseVal;

      if (!svg || !viewBox?.width || !viewBox.height) return;

      const nextPositions = Object.fromEntries(
        cities.map(({ name, state, fallback, anchor }) => {
          const path = Array.from(svg.querySelectorAll("path")).find((item) =>
            item.id.startsWith(`${state}-`)
          );

          if (!(path instanceof SVGGraphicsElement)) {
            return [name, fallback];
          }

          const box = path.getBBox();
          const x = box.x + box.width * anchor.x;
          const y = box.y + box.height * anchor.y;

          return [
            name,
            {
              left: ((x - viewBox.x) / viewBox.width) * 100,
              top: ((y - viewBox.y) / viewBox.height) * 100,
            },
          ];
        })
      );

      setPositions(nextPositions);
    };

    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(placeMarkers);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={mapRef}
      className="relative mx-auto aspect-square w-full max-w-[400px] select-none [&_.map]:!h-full [&_.map]:!w-full [&_svg]:!h-auto [&_svg]:!w-full [&_svg]:!max-w-full"
      aria-hidden="true"
    >
      {/* 
        Using the @react-map/india package as requested. 
        It provides a highly accurate state-by-state interactive map.
      */}
      <India
        type="select-single"
        size={MAP_SIZE}
        mapColor="#0d0d0d"
        strokeColor="#2c2c2c"
        strokeWidth={1}
        hoverColor="#1a1a1a"
        selectColor="#C8F700"
        hints={true}
        hintBackgroundColor="#C8F700"
        hintTextColor="#000000"
      />

      {/* Overlay city dots in the same square plane as the SVG map */}
      <div className="absolute inset-0 pointer-events-none">
        {cities.map(({ name }, i) => {
          const { left, top } = positions[name];

          return (
            <div
              key={name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full bg-[#C8F700] opacity-30 city-pulse"
                  style={{ animationDelay: `${i * 0.2}s`, width: 16, height: 16, top: -4, left: -4 }}
                />
                <div className="w-2 h-2 rounded-full bg-[#C8F700]" />
                <span className="absolute left-4 top-[-6px] text-[#666] text-[10px] tracking-wider font-sans bg-[#000]/50 px-1 rounded whitespace-nowrap">
                  {name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-2 right-2 text-[10px] text-[#444] tracking-[0.14em] font-sans">
        12 ACTIVE CITIES
      </div>
    </div>
  );
}
