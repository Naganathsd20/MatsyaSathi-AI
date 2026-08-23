import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const PredictionConfidence = ({ confidenceScore }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">🛡️ Prediction Confidence</h3>
              <span className="text-[10px] text-slate-400 font-medium">Input Data Completeness Index</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono font-bold">
            Model Confidence
          </span>
        </div>

        <div className="my-3 text-center p-3 rounded-xl bg-[#071F33] border border-cyan-900/40">
          <div className="text-3xl font-extrabold text-cyan-400">
            {confidenceScore}%
          </div>
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mt-2 p-0.5 border border-cyan-900/40">
            <div
              className="bg-cyan-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${confidenceScore}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-slate-300 font-medium leading-relaxed">
          "Confidence reflects the completeness and consistency of input indicators. It is not model accuracy."
        </p>
      </div>

      <div className="pt-2.5 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Completeness rating evaluates sea state, wind, depth, and species presence data availability.</span>
      </div>
    </div>
  );
};

export default PredictionConfidence;
