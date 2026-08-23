import React from 'react';
import { ArrowRight, Tag, Waves, Wind, Clock, Compass } from 'lucide-react';
import Button from '../Button';

export const ZoneCard = ({ zone, onSelectZone }) => {
  const statusStyles = {
    success: {
      border: "border-emerald-500/30 hover:border-emerald-400",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold",
      score: "text-emerald-400",
      bg: "bg-[#0B253C]"
    },
    warning: {
      border: "border-amber-500/30 hover:border-amber-400",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold",
      score: "text-amber-400",
      bg: "bg-[#0B253C]"
    },
    danger: {
      border: "border-rose-500/30 hover:border-rose-400",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold",
      score: "text-rose-400",
      bg: "bg-[#0B253C]"
    }
  };

  const st = statusStyles[zone.statusType] || statusStyles.success;

  return (
    <div className={`glass-card rounded-3xl p-6 border ${st.border} ${st.bg} flex flex-col justify-between h-full space-y-5 transition-all duration-200 shadow-md`}>
      <div>
        {/* Header: Zone Name & Status Badge */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-cyan-900/30">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-white">{zone.name}</h3>
              <span className="text-xs text-slate-400 font-mono">({zone.direction})</span>
            </div>
            <span className="text-xs text-slate-400">Depth: {zone.depth}</span>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs border ${st.badge}`}>
            {zone.statusBadge}
          </span>
        </div>

        {/* Score & Main Metrics */}
        <div className="flex items-center justify-between my-4 p-3.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 shadow-xs">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Suitability Score</span>
            <span className={`text-2xl font-extrabold ${st.score}`}>
              {zone.score} <span className="text-xs font-bold text-slate-400">/ 100</span>
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Distance</span>
            <span className="text-lg font-extrabold text-white">{zone.distance}</span>
          </div>
        </div>

        {/* Breakdown Metric Rows */}
        <div className="space-y-2 text-xs py-1">
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400 flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-cyan-400" /> Sea Condition:</span>
            <span className="font-bold text-white">{zone.seaCondition}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400 flex items-center gap-1.5"><Wind className="w-3.5 h-3.5 text-cyan-400" /> Wind Velocity:</span>
            <span className="font-bold text-white">{zone.windSpeed}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400 flex items-center gap-1.5"><Waves className="w-3.5 h-3.5 text-cyan-400" /> Wave Height:</span>
            <span className="font-bold text-white">{zone.waveHeight}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> Best Time:</span>
            <span className="font-bold text-white">{zone.bestTime}</span>
          </div>
        </div>

        {/* Target Species Pills */}
        <div className="mt-4 pt-3 border-t border-cyan-900/30">
          <span className="text-[11px] text-slate-400 font-semibold block mb-1.5">Target Species:</span>
          <div className="flex flex-wrap gap-1.5">
            {zone.targetSpecies.map((sp, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-semibold border border-cyan-500/30">
                <Tag className="w-3 h-3 text-cyan-400" />
                {sp}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action Button */}
      <div className="pt-3 border-t border-cyan-900/30">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onSelectZone(zone.id)}
          icon={ArrowRight}
          iconPosition="right"
          className="w-full"
        >
          View Zone Details
        </Button>
      </div>
    </div>
  );
};

export default ZoneCard;
