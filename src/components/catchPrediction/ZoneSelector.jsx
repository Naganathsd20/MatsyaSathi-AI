import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { fishingZonesData } from '../../data/fishingZonesData';

export const ZoneSelector = ({ selectedZoneId, onSelectZone }) => {
  const zones = fishingZonesData.zones;

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">🎯 Selected Fishing Zone</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Select a fishing zone to view its specific catch potential estimates.
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Click any zone below to switch prediction view
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {zones.map((zone) => {
          const isSelected = zone.id === selectedZoneId;

          return (
            <button
              key={zone.id}
              onClick={() => onSelectZone(zone.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg scale-[1.02]'
                  : 'bg-[#0B253C] border-cyan-900/40 hover:border-cyan-400/50 hover:bg-[#0E2F4C]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-extrabold text-base text-white">{zone.name}</span>
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                )}
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Score:</span> <span className="font-extrabold text-cyan-300">{zone.score}/100</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Distance:</span> <span className="font-bold text-white">{zone.distance}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ZoneSelector;
