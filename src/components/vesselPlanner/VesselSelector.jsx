import React from 'react';
import { Ship, CheckCircle2, Fuel, ShieldCheck } from 'lucide-react';

export const VesselSelector = ({ vessels, selectedVesselId, onSelectVessel }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Ship className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">⛵ Select Vessel Category</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Choose your boat specifications to calculate range, fuel burn, and voyage limits.
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Click to switch vessel specification
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {vessels.map((v) => {
          const isSelected = v.id === selectedVesselId;

          return (
            <button
              key={v.id}
              onClick={() => onSelectVessel(v.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg scale-[1.02]'
                  : 'bg-[#0B253C] border-cyan-900/40 hover:border-cyan-400/50 hover:bg-[#0E2F4C]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-white">{v.name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                  </div>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono font-bold inline-block mb-3">
                  {v.category}
                </span>

                <div className="text-xs text-slate-300 font-medium space-y-1.5">
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Capacity:</span><span className="font-extrabold text-white">{v.capacity} {v.capacityUnit}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Max Range:</span><span className="font-bold text-white">{v.range} {v.rangeUnit}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Fuel Tank:</span><span className="font-bold text-white">{v.fuelCapacity > 0 ? `${v.fuelCapacity} L` : 'N/A'}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-medium">Wave Limit:</span><span className="font-bold text-white">{v.waveLimit} m</span></div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-cyan-900/30 text-[10px] text-slate-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>Safety Cap: {v.waveLimit}m wave limit</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VesselSelector;
