import React from 'react';
import { TrendingUp, Info } from 'lucide-react';

export const PriceTrendChart = ({ trendData, activeSpeciesName }) => {
  if (!trendData || trendData.length === 0) return null;

  const minPrice = Math.min(...trendData.map(d => d.price));
  const maxPrice = Math.max(...trendData.map(d => d.price));
  const range = maxPrice - minPrice || 1;

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">📈 Fish Price Trend</h3>
              <span className="text-[10px] text-slate-400 font-medium">7-Day Rate Movement for {activeSpeciesName}</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold font-mono">
            Price Chart
          </span>
        </div>

        {/* Visual Bar Chart */}
        <div className="grid grid-cols-7 gap-2 items-end h-40 pt-4 pb-2 px-1">
          {trendData.map((pt, idx) => {
            const heightPercent = Math.max(20, Math.round(((pt.price - minPrice) / range) * 80 + 20));

            return (
              <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end">
                <span className="text-[10px] font-extrabold text-cyan-300">₹{pt.price}</span>
                <div className="w-full bg-slate-900 rounded-t-lg overflow-hidden flex items-end h-28 p-0.5 border border-cyan-900/40">
                  <div
                    className="w-full bg-gradient-to-t from-cyan-500 to-sky-400 rounded-t-md transition-all duration-300"
                    style={{ height: `${heightPercent}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 font-mono font-bold whitespace-nowrap">{pt.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-2 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Price trend illustration based on historical auction logs.</span>
        </span>
      </div>
    </div>
  );
};

export default PriceTrendChart;
