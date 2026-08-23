import React from 'react';
import { Tag, TrendingUp, TrendingDown, Clock } from 'lucide-react';

export const FishPriceTable = ({ speciesData, selectedSpeciesId, onSelectSpecies, activeHarborName, marketPricesMap, selectedHarborId }) => {
  const badgeStyles = {
    success: "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold",
    warning: "bg-amber-50 text-amber-800 border-amber-300 font-bold",
    danger: "bg-rose-50 text-rose-800 border-rose-300 font-bold",
    info: "bg-sky-50 text-sky-800 border-sky-300 font-bold"
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">💰 Coastal Fish Price Index</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
              Harbor Context: {activeHarborName}
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5 font-medium">
            Click any row to view its detailed price movement history and market comparison.
          </p>
        </div>
      </div>

      {/* Desktop & Tablet Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-cyan-900/30 text-slate-400 font-bold uppercase tracking-wider">
              <th className="pb-3 pl-2">Fish Species</th>
              <th className="pb-3">Price / kg</th>
              <th className="pb-3">Change</th>
              <th className="pb-3">Demand</th>
              <th className="pb-3">Supply</th>
              <th className="pb-3">Trend</th>
              <th className="pb-3">Recommended Market</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-900/30 text-slate-200">
            {speciesData.map((sp) => {
              const isSelected = sp.id === selectedSpeciesId;
              const harborPrice = marketPricesMap[selectedHarborId]?.[sp.id] || sp.price;

              return (
                <tr
                  key={sp.id}
                  onClick={() => onSelectSpecies(sp.id)}
                  className={`transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/15 border-l-4 border-l-cyan-400 font-semibold text-white'
                      : 'hover:bg-[#0E2F4C]'
                  }`}
                >
                  <td className="py-3.5 pl-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-extrabold text-white">{sp.species}</span>
                        <span className="text-[10px] text-slate-400 ml-1.5 font-medium">({sp.localName})</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5">
                    <span className="text-sm font-extrabold text-white">₹{harborPrice}/kg</span>
                  </td>

                  <td className="py-3.5">
                    <span className={`font-extrabold ${sp.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {sp.change}
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] border ${
                      sp.demandType === 'success' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                      sp.demandType === 'warning' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                      'bg-sky-500/20 text-sky-300 border-sky-500/40'
                    }`}>
                      {sp.demand}
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] border ${
                      sp.supplyType === 'success' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                      sp.supplyType === 'warning' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                      'bg-sky-500/20 text-sky-300 border-sky-500/40'
                    }`}>
                      {sp.supply}
                    </span>
                  </td>

                  <td className="py-3.5">
                    <span className={`font-bold text-xs ${sp.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {sp.trend}
                    </span>
                  </td>

                  <td className="py-3.5 text-slate-300 font-medium">
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
                  ? 'bg-cyan-500/15 border-cyan-400'
                  : 'bg-[#0B253C] border-cyan-900/40'
              }`}
            >
              <div className="flex justify-between items-center pb-2 border-b border-cyan-900/30">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-extrabold text-white">{sp.species}</span>
                </div>
                <span className="text-sm font-extrabold text-cyan-300">₹{harborPrice}/kg</span>
              </div>
              <div className="flex justify-between text-slate-400"><span>Change / Trend:</span><span className={sp.isPositive ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{sp.change} ({sp.trend})</span></div>
              <div className="flex justify-between text-slate-400"><span>Demand / Supply:</span><span className="font-bold text-white">{sp.demand} • {sp.supply}</span></div>
              <div className="flex justify-between text-slate-400"><span>Recommended Market:</span><span className="font-bold text-white">{sp.recommendedMarket}</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FishPriceTable;
