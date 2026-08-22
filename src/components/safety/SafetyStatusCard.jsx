import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const SafetyStatusCard = ({ statusData }) => {
  const { indicators } = statusData;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/25 via-slate-950 to-slate-900 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              Overall Safety Level
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-0.5 tracking-tight">
              🛡️ Current Safety Status: <span className="text-emerald-300">NORMAL</span>
            </h2>
          </div>
        </div>

        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
          {statusData.badgeText}
        </span>
      </div>

      <p className="text-sm text-slate-200 leading-relaxed font-medium">
        "{statusData.message}"
      </p>

      {/* Supporting Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Sea State</span>
          <span className="text-xs font-bold text-slate-100 mt-0.5 block">{indicators.seaCondition}</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Wind Speed</span>
          <span className="text-xs font-bold text-slate-100 mt-0.5 block">{indicators.windSpeed}</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Wave Height</span>
          <span className="text-xs font-bold text-slate-100 mt-0.5 block">{indicators.waveHeight}</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Visibility</span>
          <span className="text-xs font-bold text-slate-100 mt-0.5 block">{indicators.visibility}</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center col-span-2 sm:col-span-1">
          <span className="text-[10px] text-slate-400 font-medium block">Rain Prob</span>
          <span className="text-xs font-bold text-slate-100 mt-0.5 block">{indicators.rainProbability}</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Prototype safety interpretation based on current marine telemetry.</span>
        </span>
        <span className="text-[10px] text-slate-500 uppercase tracking-wide">Phase 6</span>
      </div>
    </div>
  );
};

export default SafetyStatusCard;
