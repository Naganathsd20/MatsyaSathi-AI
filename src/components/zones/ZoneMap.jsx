import React from 'react';
import { MapPin, Navigation, Compass, Info } from 'lucide-react';

export const ZoneMap = ({ zones, onSelectZone }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">🗺️ Coastal Zone Map</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
              Visual Illustration
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Distance vectors and spatial alignment relative to Mangaluru Main Harbor.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-medium">
          <span className="flex items-center gap-1 text-slate-300"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Zone A (8km)</span>
          <span className="flex items-center gap-1 text-slate-300"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Zone B (12km)</span>
          <span className="flex items-center gap-1 text-slate-300"><span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span> Zone C (18km)</span>
        </div>
      </div>

      {/* Stylized SVG Map Display Container */}
      <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-[#03111F] border border-cyan-900/40 overflow-hidden flex items-center justify-center">
        {/* Ocean Radial Grids SVG */}
        <svg className="absolute inset-0 w-full h-full text-cyan-500/30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="oceanGlow" cx="10%" cy="50%" r="90%">
              <stop offset="0%" stopColor="#08253D" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#03111F" stopOpacity="1" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#oceanGlow)" />

          {/* Concentric Distance Rings from Harbor (10%, 50%) */}
          <circle cx="10%" cy="50%" r="100" fill="none" stroke="#06b6d4" strokeOpacity="0.3" strokeDasharray="4 4" strokeWidth="1.5" />
          <circle cx="10%" cy="50%" r="180" fill="none" stroke="#06b6d4" strokeOpacity="0.3" strokeDasharray="4 4" strokeWidth="1.5" />
          <circle cx="10%" cy="50%" r="260" fill="none" stroke="#06b6d4" strokeOpacity="0.3" strokeDasharray="4 4" strokeWidth="1.5" />

          {/* Bearing Ray Lines */}
          <line x1="10%" y1="50%" x2="90%" y2="80%" stroke="#06b6d4" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#06b6d4" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="10%" y1="50%" x2="90%" y2="20%" stroke="#06b6d4" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Distance Labels */}
          <text x="25%" y="47%" fill="#22d3ee" fontSize="10" fontWeight="bold" fontFamily="monospace">8 km radius</text>
          <text x="45%" y="47%" fill="#22d3ee" fontSize="10" fontWeight="bold" fontFamily="monospace">12 km radius</text>
          <text x="65%" y="47%" fill="#22d3ee" fontSize="10" fontWeight="bold" fontFamily="monospace">18 km radius</text>
        </svg>

        {/* Coastline Polygon Graphic */}
        <div className="absolute left-0 top-0 bottom-0 w-[12%] bg-[#071F33] border-r border-cyan-900/40 flex flex-col justify-between p-2 z-10">
          <span className="text-[10px] font-extrabold text-cyan-300 tracking-widest rotate-90 origin-left translate-y-12">
            KARNATAKA COASTLINE
          </span>
        </div>

        {/* Mangaluru Harbor Origin Pin */}
        <div className="absolute left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="p-2 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg">
            <AnchorIcon className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold text-cyan-300 bg-[#0B253C] px-2 py-0.5 rounded border border-cyan-900/40 mt-1 shadow-md whitespace-nowrap">
            📍 Mangaluru Harbor
          </span>
        </div>

        {/* Zone Pins */}
        {/* Zone A (8km, 220 SW) */}
        <button
          onClick={() => onSelectZone("zone-a")}
          className="absolute left-[34%] top-[65%] -translate-x-1/2 -translate-y-1/2 z-20 group text-left cursor-pointer focus:outline-none"
        >
          <div className="p-2 rounded-xl bg-emerald-500 text-slate-950 shadow-lg group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 fill-slate-950 text-emerald-500" />
          </div>
          <div className="bg-[#0B253C] p-2 rounded-xl border border-emerald-500/40 mt-1.5 shadow-xl">
            <div className="text-xs font-extrabold text-emerald-300">Zone A ⭐</div>
            <div className="text-[10px] text-slate-300 font-medium">8 km • 28m • Good</div>
          </div>
        </button>

        {/* Zone B (12km, 245 SW) */}
        <button
          onClick={() => onSelectZone("zone-b")}
          className="absolute left-[54%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-20 group text-left cursor-pointer focus:outline-none"
        >
          <div className="p-2 rounded-xl bg-amber-500 text-slate-950 shadow-lg group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 fill-slate-950 text-amber-500" />
          </div>
          <div className="bg-[#0B253C] p-2 rounded-xl border border-amber-500/40 mt-1.5 shadow-xl">
            <div className="text-xs font-extrabold text-amber-300">Zone B ⚠️</div>
            <div className="text-[10px] text-slate-300 font-medium">12 km • 36m • Moderate</div>
          </div>
        </button>

        {/* Zone C (18km, 270 W) */}
        <button
          onClick={() => onSelectZone("zone-c")}
          className="absolute left-[78%] top-[35%] -translate-x-1/2 -translate-y-1/2 z-20 group text-left cursor-pointer focus:outline-none"
        >
          <div className="p-2 rounded-xl bg-rose-500 text-slate-950 shadow-lg group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 fill-slate-950 text-rose-500" />
          </div>
          <div className="bg-[#0B253C] p-2 rounded-xl border border-rose-500/40 mt-1.5 shadow-xl">
            <div className="text-xs font-extrabold text-rose-300">Zone C ❌</div>
            <div className="text-[10px] text-slate-300 font-medium">18 km • 45m • Rough</div>
          </div>
        </button>
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Interactive spatial map representation. Click any pin to open zone details.</span>
        </span>
      </div>
    </div>
  );
};

const AnchorIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m0 0l-4-4m4 4l4-4M5 12h14" />
  </svg>
);

export default ZoneMap;
