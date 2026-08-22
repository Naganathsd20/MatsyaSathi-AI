import React from 'react';
import { Tag, TrendingUp, TrendingDown, Clock } from 'lucide-react';

export const FishPriceTable = ({ speciesData, selectedSpeciesId, onSelectSpecies, activeHarborName, marketPricesMap, selectedHarborId }) => {
  const badgeStyles = {
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    info: "bg-sky-500/20 text-cyan-300 border-sky-500/40"
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-100">💰 Prototype Fish Price Index</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium">
              Harbor Context: {activeHarborName}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Click any row to view its detailed price movement history and market comparison.
          </p>
        </div>
      </div>

      {/* Desktop & Tablet Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <th className="pb-3 pl-2">Fish Species</th>
              <th className="pb-3">Price / kg</th>
              <th className="pb-3">Change</th>
              <th className="pb-3">Demand</th>
              <th className="pb-3">Supply</th>
              <th className="pb-3">Trend</th>
              <th className="pb-3">Recommended Market</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {speciesData.map((sp) => {
              const isSelected = sp.id === selectedSpeciesId;
              const harborPrice = marketPricesMap[selectedHarborId]?.[sp.id] || sp.price;

              return (
                <tr
                  key={sp.id}
                  onClick={() => onSelectSpecies(sp.id)}
                  className={`transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-sky-500/15 border-l-4 border-l-cyan-400 font-semibold'
                      : 'hover:bg-slate-900/80'
                  }`}
                >
                  <td className="py-3.5 pl-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-bold text-slate-100">{sp.species}</span>
                        <span className="text-[10px] text-slate-400 ml-1.5 font-normal">({sp.localName})</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5">
                    <span className="text-sm font-extrabold text-slate-100">₹{harborPrice}/kg</span>
                  </td>

                  <td className="py-3.5">
                    <span className={`font-bold ${sp.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {sp.change}
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${badgeStyles[sp.demandType]}`}>
                      {sp.demand}
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeStyles[sp.supplyType]}`}>
                      {sp.supply}
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className={`font-semibold text-xs ${sp.isPositive ? 'text-emerald-300' : 'text-rose-300'}`}>
                      {sp.trend}
                    </span>
                  </td>

                  <td className="py-3.5 text-slate-300">
                    <span className="text-xs">{sp.recommendedMarket}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View */}
      <div className="sm:hidden space-y-3">
        {speciesData.map((sp) => {
          const isSelected = sp.id === selectedSpeciesId;
          const harborPrice = marketPricesMap[selectedHarborId]?.[sp.id] || sp.price;

          return (
            <div
              key={sp.id}
              onClick={() => onSelectSpecies(sp.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 text-xs ${
                isSelected
                  ? 'bg-sky-500/20 border-cyan-400'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-bold text-slate-100">{sp.species}</span>
                </div>
                <span className="text-sm font-extrabold text-cyan-300">₹{harborPrice}/kg</span>
              </div>
              <div className="flex justify-between"><span className="text-slate-400">Change / Trend:</span><span className={sp.isPositive ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{sp.change} ({sp.trend})</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Demand / Supply:</span><span>{sp.demand} • {sp.supply}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Recommended Market:</span><span className="font-semibold text-slate-200">{sp.recommendedMarket}</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FishPriceTable;
