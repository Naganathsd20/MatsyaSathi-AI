import React from 'react';
import { Bot, CheckCircle2, AlertTriangle, Info, Sparkles } from 'lucide-react';

export const PredictionReasoning = ({ reasoningPoints, zoneName }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 bg-[#071F33] space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-cyan-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">🤖 Why this estimate?</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                Model Rationale
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Transparent rule-based breakdown for {zoneName}.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {reasoningPoints.map((pt, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-2xl border text-xs flex items-start gap-2.5 ${
              pt.positive
                ? 'bg-[#0B253C] border-cyan-900/40 text-slate-200 font-medium'
                : 'bg-[#2E1F0A]/90 border-amber-500/30 text-amber-300 font-medium'
            }`}
          >
            {pt.positive ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            )}
            <span>{pt.text}</span>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Decision-support logic explaining the indicator weighting.</span>
        </span>
      </div>
    </div>
  );
};

export default PredictionReasoning;
