import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const PredictionConfidence = ({ confidenceScore }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">🛡️ Prediction Confidence</h3>
              <span className="text-[10px] text-slate-400">Input Data Completeness Index</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
            Prototype Confidence
          </span>
        </div>

        <div className="my-3 text-center p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-3xl font-extrabold text-cyan-300">
            {confidenceScore}%
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2 p-0.5">
            <div
              className="bg-cyan-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${confidenceScore}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          "Confidence reflects the completeness and consistency of the prototype input indicators. It is not model accuracy."
        </p>
      </div>

      <div className="pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Completeness rating evaluates sea state, wind, depth, and species presence data availability.</span>
      </div>
    </div>
  );
};

export default PredictionConfidence;
