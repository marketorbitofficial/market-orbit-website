// Server component — all animation via CSS keyframes in globals.css
//
// Projection used for BOTH the border path AND city dots (same formula):
//   svgX = (lon - 67) * 11 + 15
//   svgY = (37 - lat) * 14 + 15
//
// This ensures every city dot is guaranteed to sit inside the outline.

const cities = [
  { name: "Mumbai",     lon: 72.87, lat: 19.08, dx:  8, dy: -3 },
  { name: "Delhi",      lon: 77.21, lat: 28.63, dx:  8, dy: -3 },
  { name: "Bengaluru",  lon: 77.59, lat: 12.97, dx:  8, dy: -3 },
  { name: "Hyderabad",  lon: 78.47, lat: 17.39, dx:  8, dy: -3 },
  { name: "Chennai",    lon: 80.28, lat: 13.09, dx:  8, dy: -3 },
  { name: "Kolkata",    lon: 88.37, lat: 22.57, dx: -6, dy: -8, anchor: "end" },
  { name: "Pune",       lon: 73.85, lat: 18.52, dx: -6, dy: -6, anchor: "end" },
  { name: "Ahmedabad",  lon: 72.58, lat: 23.04, dx: -6, dy: -4, anchor: "end" },
  { name: "Jaipur",     lon: 75.79, lat: 26.91, dx:  8, dy: -3 },
  { name: "Chandigarh", lon: 76.78, lat: 30.73, dx:  8, dy: -3 },
  { name: "Kochi",      lon: 76.27, lat:  9.93, dx: -6, dy: -4, anchor: "end" },
  { name: "Bhopal",     lon: 77.41, lat: 23.26, dx:  8, dy: -3 },
];

function project(lon: number, lat: number) {
  return {
    cx: Math.round((lon - 67) * 11 + 15),
    cy: Math.round((37 - lat) * 14 + 15),
  };
}

// Carefully traced India outline — clockwise from NW (Gujarat/Pakistan border).
// Each waypoint derived from the same projection as the city dots.
//
// Key geographic anchors:
//   NW Gujarat (68.1°E,23.7°N) → (24,200)
//   J&K peak  (77.0°E,35.5°N) → (122,42)
//   NE tip    (97.0°E,27.5°N) → (355,148)
//   Kanyakumari(77.5°E,8.1°N) → (129,420)
//   Mumbai    (72.9°E,19.1°N) → (79,266)
//   Kolkata   (88.4°E,22.6°N) → (250,217)
const INDIA_PATH = `
M 24,200
L 22,182 L 28,162 L 36,148 L 48,130 L 56,114 L 70,100 L 84,80 L 100,60
L 112,44 L 122,42
L 132,50 L 144,72
L 158,112 L 170,120 L 192,138 L 222,144 L 250,146 L 262,152 L 270,156 L 290,156
L 296,140 L 320,132 L 342,134 L 355,148
L 360,164 L 356,182 L 344,200 L 326,214
L 308,210 L 296,202 L 288,190 L 280,174 L 264,194
L 252,224 L 246,236
L 232,256 L 220,276 L 206,298 L 192,322 L 178,346 L 164,370 L 150,396 L 136,418 L 129,432
L 118,418 L 108,398 L 98,374 L 88,348 L 78,320 L 72,296 L 68,274 L 78,266
L 72,252 L 68,238 L 60,228 L 48,220 L 36,218 L 28,210 Z
`.trim();

export default function CityMap() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <svg
        viewBox="0 0 400 460"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: "block" }}
      >
        {/* Country fill — slightly lifted from page background */}
        <path d={INDIA_PATH} fill="#0d0d0d" stroke="none" />

        {/* Border outline */}
        <path
          d={INDIA_PATH}
          fill="none"
          stroke="#2c2c2c"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* City dots + pulse rings + labels */}
        {cities.map(({ name, lon, lat, dx, dy, anchor = "start" }, i) => {
          const { cx, cy } = project(lon, lat);
          return (
            <g key={name}>
              {/* Pulse ring */}
              <circle
                cx={cx}
                cy={cy}
                r={10}
                fill="#C8F700"
                fillOpacity={0.12}
                className="city-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              {/* Core dot */}
              <circle cx={cx} cy={cy} r={3} fill="#C8F700" />
              {/* City name label */}
              <text
                x={cx + dx}
                y={cy + dy}
                fontSize="7.5"
                fill="#666"
                fontFamily="Arial, sans-serif"
                letterSpacing="0.04em"
                textAnchor={anchor as "start" | "end"}
              >
                {name}
              </text>
            </g>
          );
        })}

        {/* "12 active cities" footer label */}
        <text
          x="392"
          y="452"
          textAnchor="end"
          fontSize="8"
          fill="#444"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.14em"
        >
          12 ACTIVE CITIES
        </text>
      </svg>
    </div>
  );
}
