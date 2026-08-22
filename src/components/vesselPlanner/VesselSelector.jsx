import React from 'react';
import { Ship, CheckCircle2, Fuel, ShieldCheck } from 'lucide-react';

export const VesselSelector = ({ vessels, selectedVesselId, onSelectVessel }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Ship className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">⛵ Select Vessel Category</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Choose your boat specifications to calculate range, fuel burn, and voyage limits.
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400">
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
                  ? 'bg-cyan-500/20 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-950/60 scale-[1.02]'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-100">{v.name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </div>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800 font-mono inline-block mb-3">
                  {v.category}
                </span>

                <div className="text-xs text-slate-300 space-y-1.5">
                  <div className="flex justify-between"><span className="text-slate-400">Capacity:</span><span className="font-semibold text-slate-100">{v.capacity} {v.capacityUnit}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Max Range:</span><span>{v.range} {v.rangeUnit}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Fuel Tank:</span><span>{v.fuelCapacity > 0 ? `${v.fuelCapacity} L` : 'N/A'}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Wave Limit:</span><span>{v.waveLimit} m</span></div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{v.status}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VesselSelector;
