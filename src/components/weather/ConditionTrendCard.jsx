import React from 'react';
import { TrendingUp, Wind, Waves, CloudRain } from 'lucide-react';

export const ConditionTrendCard = ({ hourlyTrend }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">📈 Next 12 Hours Condition Trend</h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
            Hourly progression of wind speed, wave height, and precipitation chance.
          </p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
          Lightweight Telemetry
        </span>
      </div>

      {/* Hourly Bar Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
        {hourlyTrend.map((pt, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 flex flex-col justify-between items-center text-center space-y-3 shadow-md"
          >
            <span className="text-xs sm:text-sm font-mono font-black text-cyan-400">{pt.time}</span>

            {/* Visual Mini Bars */}
            <div className="w-full space-y-2 py-1">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-400 mb-0.5">
                  <span className="flex items-center gap-1"><Wind className="w-3 h-3 text-cyan-400" /> Wind</span>
                  <span className="font-extrabold text-white">{pt.wind}k/h</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-cyan-900/40">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${(pt.wind / 25) * 100}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-400 mb-0.5">
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3 text-cyan-400" /> Wave</span>
                  <span className="font-extrabold text-white">{pt.wave}m</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-cyan-900/40">
                  <div className="bg-sky-400 h-full rounded-full" style={{ width: `${(pt.wave / 2.5) * 100}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-400 mb-0.5">
                  <span className="flex items-center gap-1"><CloudRain className="w-3 h-3 text-emerald-400" /> Rain</span>
                  <span className="font-extrabold text-white">{pt.rain}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-cyan-900/40">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${pt.rain}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionTrendCard;
