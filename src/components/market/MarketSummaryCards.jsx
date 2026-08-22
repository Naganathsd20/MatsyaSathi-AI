import React from 'react';
import { Tag, TrendingUp, Sparkles, Anchor, Info } from 'lucide-react';

export const MarketSummaryCards = ({ summaryData }) => {
  const { bestPriceToday, highestDemand, priceTrend, recommendedMarket } = summaryData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Best Price Today */}
      <div className="glass-card rounded-2xl p-5 border border-amber-500/20 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Tag className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              {bestPriceToday.change}
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Best Price Today</h3>
          <div className="text-2xl font-bold text-slate-100 mt-1 mb-1 tracking-tight">
            {bestPriceToday.price}
          </div>
          <span className="text-xs font-semibold text-amber-300">{bestPriceToday.species}</span>
        </div>

        <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Highest Value Catch</span>
          <span className="text-amber-400 font-medium">Demo Data</span>
        </div>
      </div>

      {/* 2. Highest Demand */}
      <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30">
              {highestDemand.demandLevel}
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Highest Demand</h3>
          <div className="text-2xl font-bold text-slate-100 mt-1 mb-1 tracking-tight">
            {highestDemand.species}
          </div>
          <span className="text-xs font-semibold text-cyan-300">Rate: {highestDemand.price}</span>
        </div>

        <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Fastest Auction Clearing</span>
          <span className="text-cyan-400 font-medium">Demo Data</span>
        </div>
      </div>

      {/* 3. Price Trend */}
      <div className="glass-card rounded-2xl p-5 border border-cyan-500/20 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {priceTrend.status}
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Price Trend</h3>
          <div className="text-2xl font-bold text-slate-100 mt-1 mb-1 tracking-tight">
            {priceTrend.rate}
          </div>
          <span className="text-xs text-slate-400">{priceTrend.label}</span>
        </div>

        <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>7-Day Moving Avg</span>
          <span className="text-teal-400 font-medium">Demo Data</span>
        </div>
      </div>

      {/* 4. Recommended Market */}
      <div className="glass-card rounded-2xl p-5 border border-emerald-500/20 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Anchor className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              Top Selling
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Recommended Market</h3>
          <div className="text-base sm:text-lg font-bold text-emerald-300 mt-1 mb-1 tracking-tight">
            {recommendedMarket.harbor}
          </div>
        </div>

        <div>
          <p className="text-[11px] text-slate-400 mt-1">
            "{recommendedMarket.reason}"
          </p>
          <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between mt-2">
            <span>Harbor Priority</span>
            <span className="text-emerald-400 font-medium">Demo Data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSummaryCards;
