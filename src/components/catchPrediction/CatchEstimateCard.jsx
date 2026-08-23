import React from 'react';
import { TrendingUp, Info, ShieldCheck, Sparkles } from 'lucide-react';

export const CatchEstimateCard = ({ prediction, zoneName }) => {
  const statusStyles = {
    success: {
      border: "border-emerald-500/30",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold",
      text: "text-emerald-400",
      bg: "bg-[#0B253C]"
    },
    warning: {
      border: "border-amber-500/30",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold",
      text: "text-amber-400",
      bg: "bg-[#0B253C]"
    },
    danger: {
      border: "border-rose-500/30",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold",
      text: "text-rose-400",
      bg: "bg-[#0B253C]"
    }
  };

  const st = statusStyles[prediction.statusType] || statusStyles.success;

  return (
    <div className={`glass-card rounded-3xl p-6 sm:p-8 border ${st.border} ${st.bg} relative overflow-hidden space-y-6 flex flex-col justify-between h-full shadow-md text-slate-100`}>
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-cyan-900/30">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-md">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">🐟 Estimated Catch Potential</h2>
              <span className="text-[10px] text-slate-400 font-medium">Active Zone: {zoneName}</span>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs border ${st.badge}`}>
            {prediction.badgeText}
          </span>
        </div>

        {/* Big Catch Display */}
        <div className="my-6 text-center p-6 rounded-2xl bg-[#071F33] border border-cyan-900/40 space-y-2 shadow-md">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Estimated Yield Range</span>
          <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${st.text}`}>
            {prediction.estimatedRange}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/30 mt-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Confidence: {prediction.confidenceScore}% ({prediction.confidenceBadge})</span>
          </div>
        </div>

        {/* Dynamic Prediction Summary */}
        <div className="p-4 rounded-2xl bg-[#071F33] border border-cyan-900/40 space-y-1 shadow-md">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Prediction Summary</h4>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            "{prediction.summary}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-cyan-900/30 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Calculated estimate based on selected zone and environmental indicators.</span>
        </span>
        <span className="text-[10px] text-slate-400 uppercase tracking-wide">AI Forecast</span>
      </div>
    </div>
  );
};

export default CatchEstimateCard;
