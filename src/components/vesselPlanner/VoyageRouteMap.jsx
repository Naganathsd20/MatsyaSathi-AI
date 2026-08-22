import React from 'react';
import { Map, Info } from 'lucide-react';

export const VoyageRouteMap = ({ selectedZone }) => {
  // SVG spatial positions based on selected zone
  const zoneCoords = {
    "zone-a": { x: 340, y: 160, distance: "8 km" },
    "zone-b": { x: 440, y: 120, distance: "12 km" },
    "zone-c": { x: 540, y: 80, distance: "18 km" }
  };

  const target = zoneCoords[selectedZone?.id] || zoneCoords["zone-a"];
  const harbor = { x: 180, y: 240, name: "Mangaluru Harbor Jetty" };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">🗺️ Spatial Voyage Track</h3>
              <span className="text-[10px] text-slate-400">Mangaluru Coast → {selectedZone?.name}</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
            Prototype Route Vector
          </span>
        </div>

        {/* Polished SVG Map Graphic */}
        <div className="relative w-full h-56 rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden my-3">
          <svg className="w-full h-full" viewBox="0 0 600 300">
            <defs>
              <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#030712" />
                <stop offset="100%" stopColor="#0b192c" />
              </linearGradient>

              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>

              <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
            </defs>

            {/* Ocean Background & Grid */}
            <rect width="600" height="300" fill="url(#oceanGrad)" />
            <rect width="600" height="300" fill="url(#gridPattern)" />

            {/* Coastline Polygon */}
            <path
              d="M 0,0 L 150,0 Q 170,100 160,200 T 180,300 L 0,300 Z"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1.5"
            />
            <text x="30" y="150" fill="#64748b" fontSize="12" fontWeight="bold">KARNATAKA COAST</text>

            {/* Distance Radial Rings from Harbor */}
            <circle cx={harbor.x} cy={harbor.y} r="80" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
            <text x={harbor.x + 60} y={harbor.y - 50} fill="#0284c7" fontSize="9">8 km</text>

            <circle cx={harbor.x} cy={harbor.y} r="140" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
            <text x={harbor.x + 110} y={harbor.y - 90} fill="#0284c7" fontSize="9">12 km</text>

            <circle cx={harbor.x} cy={harbor.y} r="200" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
            <text x={harbor.x + 160} y={harbor.y - 130} fill="#0284c7" fontSize="9">18 km</text>

            {/* Voyage Vector Track */}
            <line
              x1={harbor.x}
              y1={harbor.y}
              x2={target.x}
              y2={target.y}
              stroke="url(#routeGrad)"
              strokeWidth="3"
              strokeDasharray="6,4"
            />

            {/* Harbor Pin */}
            <circle cx={harbor.x} cy={harbor.y} r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
            <text x={harbor.x - 30} y={harbor.y + 20} fill="#cbd5e1" fontSize="10" fontWeight="bold">Mangaluru Jetty</text>

            {/* Destination Pin */}
            <circle cx={target.x} cy={target.y} r="9" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            <circle cx={target.x} cy={target.y} r="16" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
            <text x={target.x + 15} y={target.y + 4} fill="#34d399" fontSize="11" fontWeight="bold">{selectedZone?.name}</text>
          </svg>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span>Custom spatial prototype graphic. Does not replace live GPS chart plotters.</span>
      </div>
    </div>
  );
};

export default VoyageRouteMap;
