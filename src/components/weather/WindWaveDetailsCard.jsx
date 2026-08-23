import React from 'react';
import { Wind, Waves, Navigation, Compass } from 'lucide-react';

export const WindWaveDetailsCard = ({ marineDetails }) => {
  const { wind, waves } = marineDetails;

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">🌊 Wind & Wave Marine Metrics</h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
            Dedicated hydrodynamic parameters for coastal boat operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Wind Metrics Sub-card */}
        <div className="p-5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-3 shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Wind Parameters</h3>
              <span className="text-xs text-slate-400 font-semibold">{wind.BeaufortScale}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs sm:text-sm font-medium pt-2">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400 font-medium">Sustained Wind Speed:</span>
              <span className="font-extrabold text-white">{wind.speed}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400 font-medium">Wind Direction:</span>
              <span className="font-extrabold text-white">{wind.direction}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400 font-medium">Peak Gust Velocity:</span>
              <span className="font-extrabold text-white">{wind.gustSpeed}</span>
            </div>
          </div>
        </div>

        {/* Wave Metrics Sub-card */}
        <div className="p-5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-3 shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Wave & Swell Parameters</h3>
              <span className="text-xs text-slate-400 font-semibold">{waves.seaState}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs sm:text-sm font-medium pt-2">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400 font-medium">Significant Wave Height:</span>
              <span className="font-extrabold text-white">{waves.significantHeight}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400 font-medium">Dominant Swell Period:</span>
              <span className="font-extrabold text-white">{waves.swellPeriod}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400 font-medium">Swell Direction:</span>
              <span className="font-extrabold text-white">{waves.swellDirection}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindWaveDetailsCard;
