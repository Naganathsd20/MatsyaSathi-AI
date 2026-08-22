import React from 'react';
import { Sparkles, Info } from 'lucide-react';

export const DemandSupplyCard = ({ activeSpecies }) => {
  if (!activeSpecies) return null;

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">⚖️ Demand & Supply Status</h3>
              <span className="text-[10px] text-slate-400">{activeSpecies.species} Dynamics</span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            {activeSpecies.demand}
          </span>
        </div>

        {/* Status Indicators */}
        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Demand Level</span>
            <span className="text-xs font-bold text-emerald-300">{activeSpecies.demand}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Supply Level</span>
            <span className="text-xs font-bold text-cyan-300">{activeSpecies.supply}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Market Activity</span>
            <span className="text-xs font-bold text-amber-300">Active Bidding</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Selling Opportunity</span>
            <span className="text-xs font-extrabold text-emerald-400">{activeSpecies.sellingOpportunity} Opportunity</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>Demand & supply status evaluated against regional buyer auction activity.</span>
      </div>
    </div>
  );
};

export default DemandSupplyCard;
