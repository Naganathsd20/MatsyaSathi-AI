import React from 'react';
import { Sliders, Info, ShieldCheck } from 'lucide-react';

export const SuitabilityScore = ({ weights }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-100">⚖️ Suitability Scoring Framework</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium">
              Prototype Scoring Framework
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Transparent weighting factors used to calculate suitability scores out of 100.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {weights.map((w, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200">{w.factor}</span>
                <span className="text-xs font-extrabold text-cyan-300 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30">
                  {w.weight}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">{w.description}</p>
            </div>

            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
              <div
                className="bg-cyan-400 h-full rounded-full"
                style={{ width: w.weight }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>This is a prototype decision-support weighting rule, not a scientifically validated machine learning model.</span>
        </span>
      </div>
    </div>
  );
};

export default SuitabilityScore;
