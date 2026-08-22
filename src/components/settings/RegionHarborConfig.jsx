import React from 'react';
import { MapPin, Anchor } from 'lucide-react';

export const RegionHarborConfig = ({
  coastalRegions,
  selectedRegionId,
  onSelectRegion,
  selectedHarbor,
  onSelectHarbor
}) => {
  const activeRegion = coastalRegions.find(r => r.id === selectedRegionId) || coastalRegions[0];

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Anchor className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">📍 Primary Region & Home Jetty</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Set default harbor location for telemetry ingestion, auction prices, and trip distance calculations.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Coastal Operating Region */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Primary Coastal Region
          </label>
          <select
            value={selectedRegionId}
            onChange={(e) => {
              const regId = e.target.value;
              onSelectRegion(regId);
              const newReg = coastalRegions.find(r => r.id === regId);
              if (newReg && newReg.harbors.length > 0) {
                onSelectHarbor(newReg.harbors[0]);
              }
            }}
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:outline-none focus:border-cyan-400"
          >
            {coastalRegions.map((reg) => (
              <option key={reg.id} value={reg.id}>
                {reg.name} ({reg.state})
              </option>
            ))}
          </select>
        </div>

        {/* Primary Home Harbor Jetty */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Anchor className="w-3.5 h-3.5 text-amber-400" /> Home Landing Jetty / Harbor
          </label>
          <select
            value={selectedHarbor}
            onChange={(e) => onSelectHarbor(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:outline-none focus:border-cyan-400"
          >
            {activeRegion.harbors.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RegionHarborConfig;
