import React from 'react';
import { TrendingUp, Wind, Waves, CloudRain } from 'lucide-react';

export const ConditionTrendCard = ({ hourlyTrend }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">📈 Next 12 Hours Condition Trend</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Hourly progression of wind speed, wave height, and precipitation chance.
          </p>
        </div>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
          Lightweight Telemetry
        </span>
      </div>

      {/* Hourly Bar Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
        {hourlyTrend.map((pt, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between items-center text-center space-y-3"
          >
            <span className="text-xs font-mono font-bold text-sky-300">{pt.time}</span>

            {/* Visual Mini Bars */}
            <div className="w-full space-y-2 py-1">
              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span className="flex items-center gap-1"><Wind className="w-2.5 h-2.5 text-cyan-400" /> Wind</span>
                  <span className="font-bold text-slate-200">{pt.wind}k/h</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${(pt.wind / 25) * 100}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span className="flex items-center gap-1"><Waves className="w-2.5 h-2.5 text-sky-400" /> Wave</span>
                  <span className="font-bold text-slate-200">{pt.wave}m</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full rounded-full" style={{ width: `${(pt.wave / 2.5) * 100}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span className="flex items-center gap-1"><CloudRain className="w-2.5 h-2.5 text-teal-400" /> Rain</span>
                  <span className="font-bold text-slate-200">{pt.rain}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-teal-400 h-full rounded-full" style={{ width: `${pt.rain}%` }}></div>
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
