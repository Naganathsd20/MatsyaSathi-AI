import React from 'react';
import { BarChart3, Info } from 'lucide-react';

export const PredictionFactors = ({ factors }) => {
  const badgeStyles = {
    success: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    warning: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    danger: "bg-rose-500/15 text-rose-300 border-rose-500/30"
  };

  const progressColors = {
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    danger: "bg-rose-400"
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">📊 Contributing Prediction Factors</h3>
              <span className="text-[10px] text-slate-400">Environmental & Spatial Parameter Weights</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Factor Matrix
          </span>
        </div>

        <div className="space-y-3 my-3">
          {factors.map((f, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-200">{f.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${badgeStyles[f.type] || badgeStyles.success}`}>
                  {f.contribution} ({f.status})
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${progressColors[f.type] || progressColors.success}`}
                  style={{ width: `${f.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Factor scores influence active prototype yield estimation.</span>
        </span>
      </div>
    </div>
  );
};

export default PredictionFactors;
