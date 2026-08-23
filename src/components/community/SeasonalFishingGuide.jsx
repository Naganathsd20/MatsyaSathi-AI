import React from 'react';
import { Calendar, Compass, ShieldCheck, Tag } from 'lucide-react';

export const SeasonalFishingGuide = ({ guide }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-emerald-500/40 bg-[#0B2A1E]/90 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-500/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-md">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">📅 Seasonal Fishing Guide</h2>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Current seasonal marine conditions and recommended gear for Mangaluru waters.
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
          {guide.seasonName}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Season Timeframe</span>
          <span className="text-sm font-extrabold text-emerald-300 mt-0.5 block">{guide.timeframe}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Recommended Depths</span>
          <span className="text-sm font-extrabold text-cyan-300 mt-0.5 block">{guide.depthZone}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 sm:col-span-2 shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Recommended Fishing Gear</span>
          <span className="text-xs font-extrabold text-white mt-0.5 block">{guide.gearAdvice}</span>
        </div>
      </div>

      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-xs flex items-center gap-2 shadow-md">
        <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="text-slate-200 font-medium">
          Key Consideration: <strong className="text-emerald-300">{guide.keyConsideration}</strong>
        </span>
      </div>
    </div>
  );
};

export default SeasonalFishingGuide;
