import React from 'react';
import { Sliders, Clock, Target, Tag, Ship } from 'lucide-react';
import { fishingZonesData } from '../../data/fishingZonesData';

export const TripConfigurator = ({
  vessels,
  selectedVesselId,
  onSelectVessel,
  selectedZoneId,
  onSelectZone,
  selectedDeparture,
  onSelectDeparture,
  selectedDurationHours,
  onSelectDuration,
  selectedSpecies,
  onSelectSpecies,
  departureTimes,
  durationOptions
}) => {
  const zones = fishingZonesData.zones;
  const speciesList = ["Indian Mackerel", "Sardine", "Tuna", "Pomfret"];

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">⚙️ Trip Configuration</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Customize parameters to recalculate recommended voyage timeline & fuel estimates.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Target Fishing Zone */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-cyan-400" /> Target Fishing Zone
          </label>
          <select
            value={selectedZoneId}
            onChange={(e) => onSelectZone(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:outline-none focus:border-cyan-400"
          >
            {zones.map((z) => (
              <option key={z.id} value={z.id}>
                {z.name} ({z.distance} • Score {z.score}/100)
              </option>
            ))}
          </select>
        </div>

        {/* 2. Departure Time */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> Departure Time
          </label>
          <select
            value={selectedDeparture}
            onChange={(e) => onSelectDeparture(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:outline-none focus:border-cyan-400"
          >
            {departureTimes.map((t) => (
              <option key={t} value={t}>
                {t} {t === "05:30 AM" ? "(Recommended)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Expected Fishing Duration */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> Fishing Window Duration
          </label>
          <select
            value={selectedDurationHours}
            onChange={(e) => onSelectDuration(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:outline-none focus:border-cyan-400"
          >
            {durationOptions.map((d) => (
              <option key={d.hours} value={d.hours}>
                {d.label} {d.hours === 4 ? "(Recommended)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Target Species */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-amber-400" /> Target Species
          </label>
          <select
            value={selectedSpecies}
            onChange={(e) => onSelectSpecies(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:outline-none focus:border-cyan-400"
          >
            {speciesList.map((sp) => (
              <option key={sp} value={sp}>
                {sp}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TripConfigurator;
