import React from 'react';
import { Wind, Waves, Navigation, Compass } from 'lucide-react';

export const WindWaveDetailsCard = ({ marineDetails }) => {
  const { wind, waves } = marineDetails;

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">🌊 Wind & Wave Marine Metrics</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Dedicated hydrodynamic parameters for coastal boat operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Wind Metrics Sub-card */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Wind Parameters</h3>
              <span className="text-[10px] text-slate-400">{wind.BeaufortScale}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs pt-2">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Sustained Wind Speed:</span>
              <span className="font-bold text-slate-100">{wind.speed}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Wind Direction:</span>
              <span className="font-bold text-slate-100">{wind.direction}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Peak Gust Velocity:</span>
              <span className="font-bold text-slate-100">{wind.gustSpeed}</span>
            </div>
          </div>
        </div>

        {/* Wave Metrics Sub-card */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Wave & Swell Parameters</h3>
              <span className="text-[10px] text-slate-400">{waves.seaState}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs pt-2">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Significant Wave Height:</span>
              <span className="font-bold text-slate-100">{waves.height}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Wave Period (Interval):</span>
              <span className="font-bold text-slate-100">{waves.period}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Swell Direction:</span>
              <span className="font-bold text-slate-100">{waves.swellDirection}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindWaveDetailsCard;
