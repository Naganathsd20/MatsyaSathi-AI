import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { fishingZonesData } from '../../data/fishingZonesData';

export const ZoneSelector = ({ selectedZoneId, onSelectZone }) => {
  const zones = fishingZonesData.zones;

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-cyan-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">🎯 Selected Fishing Zone</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Select a prototype zone to view its specific catch potential estimates.
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400">
          Click any zone below to switch prediction view
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {zones.map((zone) => {
          const isSelected = zone.id === selectedZoneId;
          const statusColors = {
            success: "border-emerald-500/40 text-emerald-300",
            warning: "border-amber-500/40 text-amber-300",
            danger: "border-rose-500/40 text-rose-300"
          };

          return (
            <button
              key={zone.id}
              onClick={() => onSelectZone(zone.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-sky-500/20 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-sky-950/60 scale-[1.02]'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-slate-100">{zone.name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-950 border ${statusColors[zone.statusType]}`}>
                    {zone.statusBadge}
                  </span>
                </div>

                <div className="text-xs text-slate-300 space-y-1 mt-2">
                  <div className="flex justify-between"><span className="text-slate-400">Score:</span><span className="font-semibold">{zone.score}/100</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Distance:</span><span>{zone.distance}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Sea State:</span><span>{zone.seaCondition}</span></div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                Species: {zone.targetSpecies.join(', ')}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ZoneSelector;
