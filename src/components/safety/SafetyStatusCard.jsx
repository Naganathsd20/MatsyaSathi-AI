import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const SafetyStatusCard = ({ statusData }) => {
  const { indicators } = statusData;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-[#0B2A1E]/90 space-y-6 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-500/30">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-md">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              Overall Safety Level
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tracking-tight">
              🛡️ Current Safety Status: <span className="text-emerald-400">NORMAL</span>
            </h2>
          </div>
        </div>

        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
          {statusData.badgeText}
        </span>
      </div>

      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
        "{statusData.message}"
      </p>

      {/* Supporting Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
        <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Sea State</span>
          <span className="text-xs font-extrabold text-white mt-0.5 block">{indicators.seaCondition}</span>
        </div>
        <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Wind Speed</span>
          <span className="text-xs font-extrabold text-white mt-0.5 block">{indicators.windSpeed}</span>
        </div>
        <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Wave Height</span>
          <span className="text-xs font-extrabold text-white mt-0.5 block">{indicators.waveHeight}</span>
        </div>
        <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Visibility</span>
          <span className="text-xs font-extrabold text-white mt-0.5 block">{indicators.visibility}</span>
        </div>
        <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center col-span-2 sm:col-span-1 shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Rain Prob</span>
          <span className="text-xs font-extrabold text-white mt-0.5 block">{indicators.rainProbability}</span>
        </div>
      </div>

      <div className="pt-2 border-t border-emerald-500/30 flex items-center justify-between text-[11px] text-slate-300 font-medium">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Safety interpretation based on current marine telemetry.</span>
        </span>
        <span className="text-[10px] text-slate-500 uppercase tracking-wide">Maritime Guard</span>
      </div>
    </div>
  );
};

export default SafetyStatusCard;
