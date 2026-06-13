import { useMemo } from "react";
import India from "@react-map/india";

// Key geographic anchors (lon°E, lat°N)
const cities = [
  { name: "Mumbai",     lon: 72.87, lat: 19.08 },
  { name: "Delhi",      lon: 77.21, lat: 28.63 },
  { name: "Bengaluru",  lon: 77.59, lat: 12.97 },
  { name: "Hyderabad",  lon: 78.47, lat: 17.39 },
  { name: "Chennai",    lon: 80.28, lat: 13.09 },
  { name: "Kolkata",    lon: 88.37, lat: 22.57 },
  { name: "Pune",       lon: 73.85, lat: 18.52 },
  { name: "Ahmedabad",  lon: 72.58, lat: 23.04 },
  { name: "Jaipur",     lon: 75.79, lat: 26.91 },
  { name: "Chandigarh", lon: 76.78, lat: 30.73 },
  { name: "Kochi",      lon: 76.27, lat:  9.93 },
  { name: "Bhopal",     lon: 77.41, lat: 23.26 },
];

export default function CityMap() {
  // Define bounding box to map lon/lat to percentages.
  // Note: These values might need slight tweaking depending on the exact SVG projection used in @react-map/india
  // By adjusting these 4 values, you can perfectly calibrate the city dots onto the map.
  const bounds = {
    minLon: 67.5,
    maxLon: 98.0,
    minLat: 7.5,
    maxLat: 37.5,
  };

  const getPos = (lon: number, lat: number) => {
    const left = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * 100;
    const top = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 100;
    return { left: `${left}%`, top: `${top}%` };
  };

  return (
    <div className="relative w-full max-w-lg mx-auto select-none" aria-hidden="true">
      {/* 
        Using the @react-map/india package as requested. 
        It provides a highly accurate state-by-state interactive map.
      */}
      <India
        type="select-single"
        size={400}
        mapColor="#0d0d0d"
        strokeColor="#2c2c2c"
        strokeWidth={1}
        hoverColor="#1a1a1a"
        selectColor="#C8F700"
        hints={true}
        hintBackgroundColor="#C8F700"
        hintTextColor="#000000"
      />

      {/* Overlay city dots dynamically scaled to the container */}
      <div className="absolute inset-0 pointer-events-none">
        {cities.map(({ name, lon, lat }, i) => {
          const { left, top } = getPos(lon, lat);
          return (
            <div
              key={name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left, top }}
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
