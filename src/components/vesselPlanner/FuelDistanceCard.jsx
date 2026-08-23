import React from 'react';
import { Fuel, Navigation, Clock, ShieldCheck, Info } from 'lucide-react';

export const FuelDistanceCard = ({ oneWayKm, roundTripKm, travelTimeMins, fuelBurnL, fuelReserveL, fuelTankL }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 flex flex-col justify-between h-full space-y-4 shadow-md">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-amber-400">
              <Fuel className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">⚓ Distance & Fuel Estimator</h3>
              <span className="text-[10px] text-slate-400 font-medium">Voyage Logistics Breakdown</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold">
            Calculated Estimate
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
          <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
            <span className="text-[10px] text-slate-400 font-bold block">One-Way Distance</span>
            <span className="text-base font-extrabold text-white mt-0.5 block">{oneWayKm} km</span>
          </div>
          <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
            <span className="text-[10px] text-slate-400 font-bold block">Round-Trip Distance</span>
            <span className="text-base font-extrabold text-cyan-300 mt-0.5 block">{roundTripKm} km</span>
          </div>
          <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
            <span className="text-[10px] text-slate-400 font-bold block">Est Transit Time</span>
            <span className="text-base font-extrabold text-white mt-0.5 block">{travelTimeMins * 2} mins</span>
          </div>
          <div className="p-3 rounded-2xl bg-[#2E1F0A]/90 border border-amber-500/30 text-center shadow-md">
            <span className="text-[10px] text-amber-300 font-bold block">Fuel Required</span>
            <span className="text-base font-black text-amber-400 mt-0.5 block">{fuelBurnL > 0 ? `${fuelBurnL} L` : 'Manual / Oars'}</span>
          </div>
        </div>

        {fuelTankL > 0 && (
          <div className="p-3.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 font-medium">Tank Capacity:</span>
              <span className="font-extrabold text-white">{fuelTankL} Liters</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300 font-medium">Safety Fuel Reserve (+30%):</span>
              <span className="font-extrabold text-emerald-400">+{fuelReserveL} Liters</span>
            </div>
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center gap-1">
        <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>Fuel estimates assume normal cruising speed & calm coastal swell.</span>
      </div>
    </div>
  );
};

export default FuelDistanceCard;
