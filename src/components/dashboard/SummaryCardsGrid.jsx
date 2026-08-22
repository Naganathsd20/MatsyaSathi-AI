import React from 'react';
import { Waves, CloudSun, ShieldCheck, Clock, Info } from 'lucide-react';

export const SummaryCardsGrid = ({ summaryData }) => {
  const { seaCondition, weather, safetyStatus, bestTimeToGo } = summaryData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Sea Condition Card */}
      <div className="glass-card rounded-2xl p-5 border border-sky-500/20 relative flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Waves className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30">
              {seaCondition.trend}
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sea Condition</h3>
          <div className="text-2xl font-bold text-slate-100 mt-1 mb-2 tracking-tight">
            {seaCondition.status}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800/80 space-y-1 text-xs">
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">Wave Height:</span>
            <span className="font-semibold text-slate-200">{seaCondition.waveHeight}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">Wind:</span>
            <span className="font-semibold text-slate-200">{seaCondition.windSpeed}</span>
          </div>
        </div>
      </div>

      {/* 2. Weather Card */}
      <div className="glass-card rounded-2xl p-5 border border-sky-500/20 relative flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <CloudSun className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {weather.condition}
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Weather</h3>
          <div className="text-2xl font-bold text-slate-100 mt-1 mb-2 tracking-tight">
            {weather.temperature}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800/80 space-y-1 text-xs">
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">Rain Probability:</span>
            <span className="font-semibold text-slate-200">{weather.rainProbability}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">Visibility:</span>
            <span className="font-semibold text-slate-200">Good (8.5 NM)</span>
          </div>
        </div>
      </div>

      {/* 3. Safety Status Card */}
      <div className="glass-card rounded-2xl p-5 border border-emerald-500/20 relative flex flex-col justify-between bg-gradient-to-br from-emerald-950/20 to-transparent">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {safetyStatus.statusBadge}
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Safety Status</h3>
          <div className="text-xl font-bold text-emerald-300 mt-1 mb-1 tracking-tight">
            {safetyStatus.status}
          </div>
        </div>

        <div>
          <p className="text-[11px] text-slate-300 leading-snug mt-1">
            "{safetyStatus.message}"
          </p>
          <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center gap-1 text-[10px] text-slate-400">
            <Info className="w-3 h-3 text-emerald-400" />
            <span>Prototype safety indicator</span>
          </div>
        </div>
      </div>

      {/* 4. Best Fishing Time Card */}
      <div className="glass-card rounded-2xl p-5 border border-sky-500/20 relative flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Clock className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30">
              Optimal Window
            </span>
          </div>

          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Best Fishing Time</h3>
          <div className="text-base sm:text-lg font-bold text-slate-100 mt-1 mb-1 tracking-tight">
            {bestTimeToGo.window}
          </div>
        </div>

        <div>
          <p className="text-[11px] text-slate-400 mt-1">
            {bestTimeToGo.recommendationNote}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-800/80 flex justify-between text-xs text-slate-300">
            <span className="text-slate-400">Tide Window:</span>
            <span className="font-semibold text-slate-200">Low tide 06:15 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCardsGrid;
