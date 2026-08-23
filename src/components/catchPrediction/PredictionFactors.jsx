import React from 'react';
import { BarChart3, Info } from 'lucide-react';

export const PredictionFactors = ({ factors }) => {
  const badgeStyles = {
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold"
  };

  const progressColors = {
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    danger: "bg-rose-400"
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">📊 Contributing Prediction Factors</h3>
              <span className="text-[10px] text-slate-400 font-medium">Environmental & Spatial Parameter Weights</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
            Factor Matrix
          </span>
        </div>

        <div className="space-y-3 my-3">
          {factors.map((f, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-xs space-y-1.5 shadow-md">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">{f.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${badgeStyles[f.type] || badgeStyles.success}`}>
                  {f.contribution} ({f.status})
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-cyan-900/40">
                <div
                  className={`h-full rounded-full ${progressColors[f.type] || progressColors.success}`}
                  style={{ width: `${f.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-cyan-900/30 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Factor scores influence active yield estimation.</span>
        </span>
      </div>
    </div>
  );
};

export default PredictionFactors;
