import React from 'react';
import { Sliders, Info, ShieldCheck } from 'lucide-react';

export const SuitabilityScore = ({ weights }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">⚖️ Suitability Scoring Framework</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
              Scoring Weights
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Transparent weighting factors used to calculate suitability scores out of 100.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {weights.map((w, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-[#0B253C] border border-cyan-900/40 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">{w.factor}</span>
                <span className="text-xs font-extrabold text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                  {w.weight}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">{w.description}</p>
            </div>

            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mt-3 border border-cyan-900/40">
              <div
                className="bg-cyan-400 h-full rounded-full"
                style={{ width: w.weight }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-cyan-900/30 font-medium">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Decision-support weighting framework based on oceanographic factors.</span>
        </span>
      </div>
    </div>
  );
};

export default SuitabilityScore;
