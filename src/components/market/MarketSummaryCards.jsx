import React from 'react';
import { Tag, TrendingUp, Sparkles, Anchor, Info } from 'lucide-react';

export const MarketSummaryCards = ({ summaryData }) => {
  const { bestPriceToday, highestDemand, priceTrend, recommendedMarket } = summaryData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Best Price Today */}
      <div className="glass-card rounded-2xl p-5 border border-amber-500/30 bg-[#0B253C] flex flex-col justify-between shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-amber-500/40 text-amber-400">
              <Tag className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {bestPriceToday.change}
            </span>
          </div>

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Best Price Today</h3>
          <div className="text-2xl font-black text-amber-400 mt-1 mb-1 tracking-tight">
            {bestPriceToday.price}
          </div>
          <span className="text-xs font-bold text-amber-300">{bestPriceToday.species}</span>
        </div>

        <div className="pt-3 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center justify-between">
          <span>Highest Value Catch</span>
          <span className="text-amber-400 font-bold">Harbor Feed</span>
        </div>
      </div>

      {/* 2. Highest Demand */}
      <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 bg-[#0B253C] flex flex-col justify-between shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {highestDemand.demandLevel}
            </span>
          </div>

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Highest Demand</h3>
          <div className="text-2xl font-black text-white mt-1 mb-1 tracking-tight">
            {highestDemand.species}
          </div>
          <span className="text-xs font-bold text-cyan-300">Rate: {highestDemand.price}</span>
        </div>

        <div className="pt-3 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center justify-between">
          <span>Fastest Auction Clearing</span>
          <span className="text-cyan-400 font-bold">Demand Index</span>
        </div>
      </div>

      {/* 3. Price Trend */}
      <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 bg-[#0B253C] flex flex-col justify-between shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {priceTrend.status}
            </span>
          </div>

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Price Trend</h3>
          <div className="text-2xl font-black text-white mt-1 mb-1 tracking-tight">
            {priceTrend.rate}
          </div>
          <span className="text-xs text-slate-300 font-medium">{priceTrend.label}</span>
        </div>

        <div className="pt-3 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center justify-between">
          <span>7-Day Moving Avg</span>
          <span className="text-emerald-400 font-bold">Trend Index</span>
        </div>
      </div>

      {/* 4. Recommended Market */}
      <div className="glass-card rounded-2xl p-5 border border-emerald-500/40 bg-[#0B2A1E]/90 flex flex-col justify-between shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-xs">
              <Anchor className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Top Selling
            </span>
          </div>

          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Recommended Market</h3>
          <div className="text-base sm:text-lg font-black text-emerald-300 mt-1 mb-1 tracking-tight">
            {recommendedMarket.harbor}
          </div>
        </div>

        <div>
          <p className="text-[11px] text-slate-200 font-medium mt-1">
            "{recommendedMarket.reason}"
          </p>
          <div className="pt-3 border-t border-emerald-500/30 text-[11px] text-slate-300 font-medium flex items-center justify-between mt-2">
            <span>Harbor Priority</span>
            <span className="text-emerald-400 font-bold">Priority Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSummaryCards;
