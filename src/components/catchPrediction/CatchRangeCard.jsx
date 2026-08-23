import React from 'react';
import { Scale, Info } from 'lucide-react';

export const CatchRangeCard = ({ prediction }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">⚖️ Estimated Catch Range</h3>
              <span className="text-[10px] text-slate-400 font-medium">Kilograms yield distribution</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
            Estimated Range
          </span>
        </div>

        {/* 3 Value Markers */}
        <div className="grid grid-cols-3 gap-2 text-center my-3">
          <div className="p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40">
            <span className="text-[10px] text-slate-400 font-bold block">Minimum</span>
            <span className="text-base font-extrabold text-white">{prediction.minCatch} kg</span>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-400/50">
            <span className="text-[10px] text-cyan-300 font-bold block">Expected</span>
            <span className="text-lg font-extrabold text-white">{prediction.expectedCatch} kg</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40">
            <span className="text-[10px] text-slate-400 font-bold block">Maximum</span>
            <span className="text-base font-extrabold text-white">{prediction.maxCatch} kg</span>
          </div>
        </div>

        {/* Visual Range Bar */}
        <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden p-0.5 border border-cyan-900/40">
          <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 h-full rounded-full w-full" />
        </div>
      </div>

      <div className="pt-2.5 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Yield distribution represents expected voyage potential for standard small trawler/gillnetters.</span>
      </div>
    </div>
  );
};

export default CatchRangeCard;
