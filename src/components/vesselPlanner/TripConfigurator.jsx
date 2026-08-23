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
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">⚙️ Trip Configuration</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Customize parameters to recalculate recommended voyage timeline & fuel estimates.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Target Fishing Zone */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-white flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-cyan-400" /> Target Fishing Zone
          </label>
          <select
            value={selectedZoneId}
            onChange={(e) => onSelectZone(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 shadow-md"
          >
            {zones.map((z) => (
              <option key={z.id} value={z.id} className="bg-[#051726] text-white">
                {z.name} ({z.distance} • Score {z.score}/100)
              </option>
            ))}
          </select>
        </div>

        {/* 2. Departure Time */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-white flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> Departure Time
          </label>
          <select
            value={selectedDeparture}
            onChange={(e) => onSelectDeparture(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 shadow-md"
          >
            {departureTimes.map((t) => (
              <option key={t} value={t} className="bg-[#051726] text-white">
                {t} {t === "05:30 AM" ? "(Recommended)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Expected Fishing Duration */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-white flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> Fishing Window Duration
          </label>
          <select
            value={selectedDurationHours}
            onChange={(e) => onSelectDuration(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 shadow-md"
          >
            {durationOptions.map((d) => (
              <option key={d.hours} value={d.hours} className="bg-[#051726] text-white">
                {d.label} {d.hours === 4 ? "(Recommended)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Target Species */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-white flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-amber-400" /> Target Species
          </label>
          <select
            value={selectedSpecies}
            onChange={(e) => onSelectSpecies(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 shadow-md"
          >
            {speciesList.map((sp) => (
              <option key={sp} value={sp} className="bg-[#051726] text-white">
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
