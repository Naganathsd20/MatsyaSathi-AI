import React from 'react';
import { CloudSun, Cloud, CloudRain, Calendar, Info } from 'lucide-react';

export const WeatherForecastGrid = ({ forecast }) => {
  const iconMap = {
    CloudSun,
    Cloud,
    CloudRain
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">📅 Weather Forecast</h2>
              <span className="text-xs px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                3-Day Forecast
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
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
              className="p-5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 hover:border-cyan-400/50 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-extrabold text-lg text-white">{dayItem.day}</span>
                    <span className="text-xs text-slate-400 font-mono font-bold ml-2">({dayItem.date})</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                  {dayItem.temp}
                </div>

                <div className="text-sm font-extrabold text-cyan-300 mb-3">
                  {dayItem.condition}
                </div>
              </div>

              <div className="pt-3 border-t border-cyan-900/30 space-y-1.5 text-xs sm:text-sm font-medium text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Wind Speed:</span>
                  <span className="font-extrabold text-white">{dayItem.wind}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Wave Height:</span>
                  <span className="font-extrabold text-white">{dayItem.waveHeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Rain Prob:</span>
                  <span className="font-extrabold text-white">{dayItem.rainProbability}</span>
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
