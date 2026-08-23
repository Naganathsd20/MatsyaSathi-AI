import React from 'react';
import { BarChart2 } from 'lucide-react';

export const ZoneComparison = ({ zones }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl font-bold text-white">📊 Side-by-Side Zone Comparison</h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Compare zone indicators to select the safest and most efficient fishing sector.
          </p>
        </div>
      </div>

      {/* Desktop & Tablet Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-cyan-900/30 text-slate-400 font-bold uppercase tracking-wider">
              <th className="pb-3 pl-2">Factor</th>
              <th className="pb-3 text-emerald-400">Zone A (⭐ Recommended)</th>
              <th className="pb-3 text-amber-400">Zone B (⚠️ Caution)</th>
              <th className="pb-3 text-rose-400">Zone C (❌ Avoid)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-900/30 text-slate-200">
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Suitability</td>
              <td className="py-3 font-extrabold text-emerald-400">High</td>
              <td className="py-3 font-extrabold text-amber-400">Moderate</td>
              <td className="py-3 font-extrabold text-rose-400">Low</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Suitability Score</td>
              <td className="py-3 font-extrabold text-emerald-400">86 / 100</td>
              <td className="py-3 font-extrabold text-amber-400">68 / 100</td>
              <td className="py-3 font-extrabold text-rose-400">38 / 100</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Distance</td>
              <td className="py-3 font-bold text-white">8 km</td>
              <td className="py-3 font-bold text-white">12 km</td>
              <td className="py-3 font-bold text-white">18 km</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Depth</td>
              <td className="py-3 font-bold text-white">28 m</td>
              <td className="py-3 font-bold text-white">36 m</td>
              <td className="py-3 font-bold text-white">45 m</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Wind Velocity</td>
              <td className="py-3 font-bold text-white">12 km/h</td>
              <td className="py-3 font-bold text-white">17 km/h</td>
              <td className="py-3 font-bold text-white">24 km/h</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Wave Height</td>
              <td className="py-3 font-bold text-white">0.7 m</td>
              <td className="py-3 font-bold text-white">1.4 m</td>
              <td className="py-3 font-bold text-white">2.2 m</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Catch Potential</td>
              <td className="py-3 font-extrabold text-emerald-400">High Yield</td>
              <td className="py-3 font-bold text-amber-400">Moderate</td>
              <td className="py-3 font-bold text-rose-400">Low Yield</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-semibold text-slate-400">Primary Fish</td>
              <td className="py-3 font-bold text-white">Mackerel, Sardines</td>
              <td className="py-3 font-bold text-white">Kingfish, Tuna</td>
              <td className="py-3 font-bold text-white">Deep Pelagic</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Stack view */}
      <div className="sm:hidden space-y-3">
        {zones.map((z) => (
          <div key={z.id} className="p-4 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-2 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/30 font-bold text-white">
              <span>{z.name}</span>
              <span className="text-emerald-400">Score: {z.score}/100</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Distance:</span> <span className="font-bold text-white">{z.distance}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Wind:</span> <span className="font-bold text-white">{z.windSpeed}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Wave:</span> <span className="font-bold text-white">{z.waveHeight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoneComparison;
