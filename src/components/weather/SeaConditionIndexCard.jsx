import React from 'react';
import { Waves, Info, ShieldCheck } from 'lucide-react';

export const SeaConditionIndexCard = ({ seaIndex }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 relative overflow-hidden flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">🌊 Sea Condition Index</h2>
              <span className="text-[10px] text-slate-400 font-medium">Marine Safety Assessment</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/40">
            {seaIndex.label}
          </span>
        </div>

        {/* Big Score Display */}
        <div className="my-4 text-center p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-4xl sm:text-5xl font-extrabold text-teal-300 tracking-tight">
            {seaIndex.score} <span className="text-lg font-semibold text-slate-500">/ {seaIndex.maxScore}</span>
          </div>

          {/* Score Progress Bar */}
          <div className="w-full bg-slate-800 h-2.5 rounded-full mt-3 overflow-hidden p-0.5 border border-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-400 transition-all duration-500"
              style={{ width: `${(seaIndex.score / seaIndex.maxScore) * 100}%` }}
            />
          </div>

          <p className="text-xs text-slate-300 mt-3 leading-relaxed">
            "{seaIndex.explanation}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>Prototype indicator score</span>
        </span>
        <span className="text-[10px] text-slate-500 uppercase tracking-wide">Phase 3</span>
      </div>
    </div>
  );
};

export default SeaConditionIndexCard;
