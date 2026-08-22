import React from 'react';
import { BarChart2 } from 'lucide-react';

export const ZoneComparison = ({ zones }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">📊 Side-by-Side Zone Comparison</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Compare prototype indicators to select the safest and most efficient fishing sector.
          </p>
        </div>
      </div>

      {/* Desktop & Tablet Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <th className="pb-3 pl-2">Factor</th>
              <th className="pb-3 text-emerald-400">Zone A (⭐ Recommended)</th>
              <th className="pb-3 text-amber-400">Zone B (⚠️ Caution)</th>
              <th className="pb-3 text-rose-400">Zone C (❌ Avoid)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Suitability</td>
              <td className="py-3 font-bold text-emerald-300">High</td>
              <td className="py-3 font-bold text-amber-300">Moderate</td>
              <td className="py-3 font-bold text-rose-300">Low</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Suitability Score</td>
              <td className="py-3 font-bold text-emerald-300">86 / 100</td>
              <td className="py-3 font-bold text-amber-300">68 / 100</td>
              <td className="py-3 font-bold text-rose-300">38 / 100</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Distance</td>
              <td className="py-3 font-semibold">8 km</td>
              <td className="py-3 font-semibold">12 km</td>
              <td className="py-3 font-semibold">18 km</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Depth</td>
              <td className="py-3 font-semibold">28 m</td>
              <td className="py-3 font-semibold">36 m</td>
              <td className="py-3 font-semibold">45 m</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Wind Velocity</td>
              <td className="py-3 font-semibold">12 km/h</td>
              <td className="py-3 font-semibold">17 km/h</td>
              <td className="py-3 font-semibold">24 km/h</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Wave Height</td>
              <td className="py-3 font-semibold">0.7 m</td>
              <td className="py-3 font-semibold">1.1 m</td>
              <td className="py-3 font-semibold">1.8 m</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Sea Condition</td>
              <td className="py-3 font-semibold text-emerald-300">Good</td>
              <td className="py-3 font-semibold text-amber-300">Moderate</td>
              <td className="py-3 font-semibold text-rose-300">Rough</td>
            </tr>
            <tr>
              <td className="py-3 pl-2 font-medium text-slate-400">Best Window</td>
              <td className="py-3 font-semibold">05:30 AM – 09:30 AM</td>
              <td className="py-3 font-semibold">06:00 AM – 09:00 AM</td>
              <td className="py-3 font-semibold text-slate-500">Not Recommended</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View */}
      <div className="sm:hidden space-y-3">
        {zones.map((z) => (
          <div key={z.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="font-bold text-slate-100">{z.name}</span>
              <span className="font-bold text-cyan-300">{z.statusBadge}</span>
            </div>
            <div className="flex justify-between"><span className="text-slate-400">Score:</span><span className="font-bold">{z.score}/100</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Distance:</span><span>{z.distance}</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Depth:</span><span>{z.depth}</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Wind / Wave:</span><span>{z.windSpeed} • {z.waveHeight}</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Sea Condition:</span><span>{z.seaCondition}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoneComparison;
