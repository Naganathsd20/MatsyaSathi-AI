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
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-[#0B2A1E]/90 relative overflow-hidden space-y-6 shadow-md text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-500/30">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-md">
            <Compass className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              Optimal Voyage Recommendation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tracking-tight">
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
        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Recommended Departure</span>
          <span className="text-base sm:text-lg font-extrabold text-cyan-300 mt-1 block">{departureTime}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Zone Arrival</span>
          <span className="text-base sm:text-lg font-extrabold text-white mt-1 block">{arrivalTime}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Fishing Window</span>
          <span className="text-xs sm:text-sm font-extrabold text-emerald-300 mt-1 block">{durationHours} Hours</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Harbor Return</span>
          <span className="text-base sm:text-lg font-extrabold text-cyan-300 mt-1 block">{returnTime}</span>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-[#0B253C] border border-cyan-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-slate-200 font-medium">
            Total Voyage Time: <strong className="text-emerald-300">{totalDurationStr}</strong> (includes {travelTimeMins * 2} mins roundtrip transit at optimal cruise speed).
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono font-bold shrink-0">Zone Distance: {zoneDistance}</span>
      </div>
    </div>
  );
};

export default TripRecommendationCard;
