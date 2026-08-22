import React from 'react';
import { Anchor, Sparkles } from 'lucide-react';

export const MarketComparison = ({ harbors, marketPricesMap, activeSpeciesId, activeSpeciesName }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">📊 Harbor Market Comparison: {activeSpeciesName}</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Compare prototype prices and selling opportunities across coastal harbors.
          </p>
        </div>
      </div>

      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <th className="pb-3 pl-2">Market / Harbor</th>
              <th className="pb-3">Distance</th>
              <th className="pb-3">Price / kg</th>
              <th className="pb-3">Selling Opportunity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {harbors.map((h, idx) => {
              const price = marketPricesMap[h.id]?.[activeSpeciesId] || 0;
              const isBest = idx === 0;

              return (
                <tr key={h.id} className={isBest ? 'bg-amber-500/10 font-semibold' : ''}>
                  <td className="py-3.5 pl-3">
                    <div className="flex items-center gap-2">
                      <Anchor className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-bold text-slate-100">{h.name}</span>
                      {isBest && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          ⭐ Best Rate
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 text-slate-400 font-mono">{h.distance}</td>
                  <td className="py-3.5">
                    <span className="text-sm font-extrabold text-amber-300">₹{price}/kg</span>
                  </td>
                  <td className="py-3.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isBest
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
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

      {/* Mobile Stack View */}
      <div className="sm:hidden space-y-3">
        {harbors.map((h, idx) => {
          const price = marketPricesMap[h.id]?.[activeSpeciesId] || 0;
          const isBest = idx === 0;

          return (
            <div key={h.id} className={`p-4 rounded-2xl border text-xs space-y-2 ${isBest ? 'bg-amber-950/20 border-amber-500/40' : 'bg-slate-900/80 border-slate-800'}`}>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="font-bold text-slate-100">{h.name}</span>
                <span className="font-extrabold text-amber-300">₹{price}/kg</span>
              </div>
              <div className="flex justify-between"><span className="text-slate-400">Distance:</span><span>{h.distance}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Opportunity:</span><span>{isBest ? '⭐ Best Option' : 'Standard'}</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketComparison;
