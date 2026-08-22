import React from 'react';
import { ShieldCheck, Anchor, Target, Fuel, DollarSign, TrendingUp } from 'lucide-react';

export const TripSummaryCard = ({
  vesselName,
  zoneName,
  departureTime,
  returnTime,
  oneWayKm,
  fuelBurnL,
  expectedCatchStr,
  estimatedGrossStr,
  safetyStatus
}) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">📋 Master Voyage Summary</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Consolidated voyage plan parameters across safety, catch yield, and market rates.
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
          🟢 READY FOR VOYAGE
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-slate-400 block">Vessel Category</span>
          <span className="font-bold text-slate-100 mt-0.5 block">{vesselName}</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-slate-400 block">Target Sector</span>
          <span className="font-bold text-cyan-300 mt-0.5 block">{zoneName} ({oneWayKm} km)</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-slate-400 block">Window Schedule</span>
          <span className="font-bold text-slate-100 mt-0.5 block">{departureTime} – {returnTime}</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-slate-400 block">Est Fuel Required</span>
          <span className="font-bold text-amber-300 mt-0.5 block">{fuelBurnL > 0 ? `${fuelBurnL} L` : 'N/A (Oars)'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">Predicted Yield Range:</span>
          </div>
          <span className="font-extrabold text-slate-100">{expectedCatchStr}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">Estimated Gross Valuation:</span>
          </div>
          <span className="font-extrabold text-emerald-300">{estimatedGrossStr}</span>
        </div>
      </div>
    </div>
  );
};

export default TripSummaryCard;
