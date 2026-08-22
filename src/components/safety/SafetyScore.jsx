import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const SafetyScore = ({ scoreData }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 relative flex flex-col justify-between h-full space-y-5">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">🛡️ Safety Score Indicator</h3>
              <span className="text-[10px] text-slate-400">Composite Risk Assessment Score</span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            {scoreData.status}
          </span>
        </div>

        {/* Big Score Gauge */}
        <div className="my-4 text-center p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-4xl font-extrabold text-emerald-300 tracking-tight">
            {scoreData.score} <span className="text-sm font-semibold text-slate-500">/ {scoreData.maxScore}</span>
          </div>

          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mt-3 p-0.5 border border-slate-700">
            <div
              className="bg-emerald-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${(scoreData.score / scoreData.maxScore) * 100}%` }}
            />
          </div>

          <p className="text-xs text-slate-300 mt-2.5">
            "{scoreData.explanation}"
          </p>
        </div>

        {/* Factor Weights List */}
        <div className="space-y-2 text-xs">
          <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Factor Weighting Breakdown</h4>
          {scoreData.weights.map((w, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400">{w.factor} ({w.weight})</span>
              <span className="font-semibold text-slate-200">{w.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>Prototype safety indicator scoring framework. Not an official marine clearance.</span>
      </div>
    </div>
  );
};

export default SafetyScore;
