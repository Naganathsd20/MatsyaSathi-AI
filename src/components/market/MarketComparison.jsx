import React from 'react';
import { Anchor, Sparkles } from 'lucide-react';

export const MarketComparison = ({ harbors, marketPricesMap, activeSpeciesId, activeSpeciesName }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl font-bold text-white">📊 Harbor Market Comparison: {activeSpeciesName}</h2>
          <p className="text-xs text-slate-300 mt-0.5 font-medium">
            Compare harbor prices and selling opportunities across coastal harbors.
          </p>
        </div>
      </div>

      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-cyan-900/30 text-slate-400 font-bold uppercase tracking-wider">
              <th className="pb-3 pl-2">Market / Harbor</th>
              <th className="pb-3">Distance</th>
              <th className="pb-3">Price / kg</th>
              <th className="pb-3">Selling Opportunity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-900/30 text-slate-200">
            {harbors.map((h, idx) => {
              const price = marketPricesMap[h.id]?.[activeSpeciesId] || 0;
              const isBest = idx === 0;

              return (
                <tr key={h.id} className={isBest ? 'bg-amber-500/15 font-semibold' : 'hover:bg-[#0E2F4C]'}>
                  <td className="py-3.5 pl-3">
                    <div className="flex items-center gap-2">
                      <Anchor className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-extrabold text-white">{h.name}</span>
                      {isBest && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          ⭐ Best Rate
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 text-slate-300 font-mono font-bold">{h.distance}</td>
                  <td className="py-3.5">
                    <span className="text-sm font-extrabold text-amber-300">₹{price}/kg</span>
                  </td>
                  <td className="py-3.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isBest
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-300 border border-cyan-900/40'
                    }`}>
                      {isBest ? 'Strong Opportunity' : 'Standard Rate'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked View */}
      <div className="sm:hidden space-y-3">
        {harbors.map((h, idx) => {
          const price = marketPricesMap[h.id]?.[activeSpeciesId] || 0;
          const isBest = idx === 0;

          return (
            <div key={h.id} className={`p-4 rounded-2xl border space-y-2 text-xs ${isBest ? 'bg-amber-500/15 border-amber-500/40' : 'bg-[#0B253C] border-cyan-900/40'}`}>
              <div className="flex justify-between items-center pb-2 border-b border-cyan-900/30 font-bold text-white">
                <span className="flex items-center gap-1.5"><Anchor className="w-3.5 h-3.5 text-amber-400" />{h.name}</span>
                <span className="text-amber-300 text-sm font-black">₹{price}/kg</span>
              </div>
              <div className="flex justify-between text-slate-400"><span>Distance:</span> <span className="font-bold text-white">{h.distance}</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketComparison;
