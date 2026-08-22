import React from 'react';
import { Compass, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';

export const TripRecommendationCard = ({
  vesselName,
  zoneName,
  zoneDistance,
  departureTime,
  durationHours,
  travelTimeMins,
  arrivalTime,
  returnTime,
  totalDurationStr
}) => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/25 via-slate-950 to-slate-900 relative overflow-hidden space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
            <Compass className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              Optimal Voyage Recommendation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-0.5 tracking-tight">
              ⛵ {vesselName} → <span className="text-emerald-300">{zoneName}</span>
            </h2>
          </div>
        </div>

        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
          🟢 RECOMMENDED VOYAGE PLAN
        </span>
      </div>

      {/* Recommended Milestones Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Recommended Departure</span>
          <span className="text-base sm:text-lg font-bold text-cyan-300 mt-1 block">{departureTime}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Zone Arrival</span>
          <span className="text-base sm:text-lg font-bold text-slate-100 mt-1 block">{arrivalTime}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Fishing Window</span>
          <span className="text-xs sm:text-sm font-bold text-emerald-300 mt-1 block">{durationHours} Hours</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 font-medium block">Harbor Return</span>
          <span className="text-base sm:text-lg font-bold text-cyan-300 mt-1 block">{returnTime}</span>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-slate-200">
            Total Voyage Time: <strong className="text-emerald-300">{totalDurationStr}</strong> (includes {travelTimeMins * 2} mins roundtrip transit at optimal cruise speed).
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono shrink-0">Zone Distance: {zoneDistance}</span>
      </div>
    </div>
  );
};

export default TripRecommendationCard;
