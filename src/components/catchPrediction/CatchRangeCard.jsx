import React from 'react';
import { Scale, Info } from 'lucide-react';

export const CatchRangeCard = ({ prediction }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">⚖️ Estimated Catch Range</h3>
              <span className="text-[10px] text-slate-400">Kilograms yield distribution</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Prototype Range
          </span>
        </div>

        {/* 3 Value Markers */}
        <div className="grid grid-cols-3 gap-2 text-center my-3">
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-medium block">Minimum</span>
            <span className="text-base font-bold text-slate-200">{prediction.minCatch} kg</span>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-950/80 border border-sky-500/40">
            <span className="text-[10px] text-cyan-300 font-medium block">Expected</span>
            <span className="text-lg font-extrabold text-cyan-300">{prediction.expectedCatch} kg</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-medium block">Maximum</span>
            <span className="text-base font-bold text-slate-200">{prediction.maxCatch} kg</span>
          </div>
        </div>

        {/* Visual Range Bar */}
        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <div className="bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-400 h-full rounded-full w-full" />
        </div>
      </div>

      <div className="pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Yield distribution represents expected voyage potential for standard small trawler/gillnetters.</span>
      </div>
    </div>
  );
};

export default CatchRangeCard;
