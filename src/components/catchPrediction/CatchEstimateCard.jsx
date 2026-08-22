import React from 'react';
import { TrendingUp, Info, ShieldCheck, Sparkles } from 'lucide-react';

export const CatchEstimateCard = ({ prediction, zoneName }) => {
  const statusStyles = {
    success: {
      border: "border-emerald-500/30",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      text: "text-emerald-300",
      bg: "bg-gradient-to-br from-emerald-950/25 via-slate-950 to-slate-900"
    },
    warning: {
      border: "border-amber-500/30",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      text: "text-amber-300",
      bg: "bg-gradient-to-br from-amber-950/25 via-slate-950 to-slate-900"
    },
    danger: {
      border: "border-rose-500/30",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      text: "text-rose-300",
      bg: "bg-gradient-to-br from-rose-950/25 via-slate-950 to-slate-900"
    }
  };

  const st = statusStyles[prediction.statusType] || statusStyles.success;

  return (
    <div className={`glass-card rounded-3xl p-6 sm:p-8 border ${st.border} ${st.bg} relative overflow-hidden space-y-6 flex flex-col justify-between h-full`}>
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">🐟 Estimated Catch Potential</h2>
              <span className="text-[10px] text-slate-400 font-medium">Active Zone: {zoneName}</span>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${st.badge}`}>
            {prediction.badgeText}
          </span>
        </div>

        {/* Big Catch Display */}
        <div className="my-6 text-center p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Estimated Yield Range</span>
          <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${st.text}`}>
            {prediction.estimatedRange}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 mt-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Confidence: {prediction.confidenceScore}% ({prediction.confidenceBadge})</span>
          </div>
        </div>

        {/* Dynamic Prediction Summary */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Prediction Summary</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            "{prediction.summary}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Prototype estimate based on selected zone and environmental indicators.</span>
        </span>
        <span className="text-[10px] text-slate-500 uppercase tracking-wide">Phase 5</span>
      </div>
    </div>
  );
};

export default CatchEstimateCard;
