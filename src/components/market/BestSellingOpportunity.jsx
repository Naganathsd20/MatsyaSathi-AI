import React from 'react';
import { Star, CheckCircle2, Sparkles, Anchor } from 'lucide-react';

export const BestSellingOpportunity = ({ opportunity }) => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/40 bg-[#2E1F0A]/90 relative overflow-hidden space-y-5 shadow-md text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/30">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#071F33] border border-amber-500/40 text-amber-400 shadow-md">
            <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              Top Selling Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tracking-tight">
              {opportunity.species} — <span className="text-amber-300">Strong Opportunity</span>
            </h2>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-amber-500/40 text-center shrink-0 shadow-md">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Best Harbor Rate</span>
          <span className="text-3xl font-black text-amber-300 tracking-tight">{opportunity.priceFormatted}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Why {opportunity.species} at {opportunity.market}?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {opportunity.reasons.map((r, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-slate-200 font-medium flex items-center gap-2 shadow-md">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 p-4 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-2 text-xs shadow-md">
          <div className="flex justify-between items-center"><span className="text-slate-400 font-medium">Recommended Harbor:</span><span className="font-extrabold text-amber-300">{opportunity.market}</span></div>
          <div className="flex justify-between items-center"><span className="text-slate-400 font-medium">Price Trend:</span><span className="font-extrabold text-emerald-400">{opportunity.change}</span></div>
          <div className="flex justify-between items-center"><span className="text-slate-400 font-medium">Buyer Demand:</span><span className="font-extrabold text-cyan-300">{opportunity.demand}</span></div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingOpportunity;
