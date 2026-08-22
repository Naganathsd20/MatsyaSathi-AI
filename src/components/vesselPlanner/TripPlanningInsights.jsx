import React from 'react';
import { Sparkles, CheckCircle2, Info } from 'lucide-react';

export const TripPlanningInsights = ({ insights }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">💡 Trip Planning Insights</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                Decision Support
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Transparent rule-based rationale supporting your recommended voyage plan.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-100 block mb-0.5">Departure Rationale</span>
            <span className="text-slate-300">{insights.departureRationale}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-100 block mb-0.5">Zone Choice Rationale</span>
            <span className="text-slate-300">{insights.zoneRationale}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-100 block mb-0.5">Weather & Swell Alignment</span>
            <span className="text-slate-300">{insights.weatherConsideration}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-100 block mb-0.5">Market & Auction Advantage</span>
            <span className="text-slate-300">{insights.marketConsideration}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span>Decision-support indicators synthesize Phase 3 weather, Phase 4 zones, Phase 5 yield, Phase 6 safety, and Phase 7 market rates.</span>
      </div>
    </div>
  );
};

export default TripPlanningInsights;
