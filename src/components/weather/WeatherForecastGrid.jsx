import React from 'react';
import { CloudSun, Cloud, CloudRain, Calendar, Info } from 'lucide-react';

export const WeatherForecastGrid = ({ forecast }) => {
  const iconMap = {
    CloudSun,
    Cloud,
    CloudRain
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">📅 Weather Forecast</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium">
                Prototype Forecast
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              3-day coastal marine forecast summary for fishermen.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {forecast.map((dayItem, idx) => {
          const IconComp = iconMap[dayItem.icon] || CloudSun;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-bold text-base text-slate-100">{dayItem.day}</span>
                    <span className="text-xs text-slate-400 font-mono ml-2">({dayItem.date})</span>
                  </div>
                  <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-cyan-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-3xl font-extrabold text-slate-100 tracking-tight mb-2">
                  {dayItem.temp}
                </div>

                <div className="text-xs font-semibold text-cyan-300 mb-3">
                  {dayItem.condition}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Rain Probability:</span>
                  <span className="font-semibold text-slate-200">{dayItem.rainProb}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Wind Velocity:</span>
                  <span className="font-semibold text-slate-200">{dayItem.wind}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Wave Height:</span>
                  <span className="font-semibold text-slate-200">{dayItem.waveHeight}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecastGrid;
