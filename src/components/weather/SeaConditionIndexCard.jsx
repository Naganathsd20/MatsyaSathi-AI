import React from 'react';
import { Waves, Info, ShieldCheck } from 'lucide-react';

export const SeaConditionIndexCard = ({ seaIndex }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 relative overflow-hidden flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">🌊 Sea Condition Index</h2>
              <span className="text-xs text-slate-400 font-semibold">Marine Safety Assessment</span>
            </div>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            {seaIndex.label}
          </span>
        </div>

        {/* Big Score Display */}
        <div className="my-4 text-center p-4 rounded-2xl bg-[#071F33] border border-cyan-900/40">
          <div className="text-4xl sm:text-5xl font-black text-cyan-400 tracking-tight">
            {seaIndex.score} <span className="text-xl font-bold text-slate-400">/ {seaIndex.maxScore}</span>
          </div>

          {/* Score Progress Bar */}
          <div className="w-full bg-slate-900 h-3 rounded-full mt-3 overflow-hidden p-0.5 border border-cyan-900/50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-sky-400 transition-all duration-500"
              style={{ width: `${(seaIndex.score / seaIndex.maxScore) * 100}%` }}
            />
          </div>

          <p className="text-xs sm:text-sm text-slate-200 font-medium mt-3 leading-relaxed">
            "{seaIndex.explanation}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-cyan-900/30 flex items-center justify-between text-xs text-slate-400 font-medium">
        <span className="flex items-center gap-1.5">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Calculated indicator score</span>
        </span>
        <span className="text-xs text-slate-400 uppercase tracking-wider font-extrabold">Sensor Index</span>
      </div>
    </div>
  );
};

export default SeaConditionIndexCard;
