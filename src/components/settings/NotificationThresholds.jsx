import React, { useState } from 'react';
import { Bell, ShieldAlert, Sliders } from 'lucide-react';

export const NotificationThresholds = ({ initialThresholds }) => {
  const [thresholds, setThresholds] = useState(initialThresholds);

  const toggleSwitch = (key) => {
    setThresholds(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNumberChange = (key, value) => {
    setThresholds(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 flex flex-col justify-between space-y-4 h-full">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">🚨 Alert & Safety Thresholds</h3>
              <span className="text-[10px] text-slate-400">Custom Hazard Notification Limits</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-mono border border-slate-700">
            Active Rules
          </span>
        </div>

        <div className="space-y-3 my-3 text-xs">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
            <div>
              <span className="font-semibold text-slate-100 block">High Wave Advisory Threshold</span>
              <span className="text-[10px] text-slate-400">Alert when sea swell exceeds limit</span>
            </div>
            <select
              value={thresholds.maxWaveHeight}
              onChange={(e) => handleNumberChange('maxWaveHeight', Number(e.target.value))}
              className="p-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300 focus:outline-none"
            >
              <option value={1.0}>1.0 meters</option>
              <option value={1.5}>1.5 meters</option>
              <option value={2.0}>2.0 meters</option>
            </select>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
            <div>
              <span className="font-semibold text-slate-100 block">Wind Velocity Threshold</span>
              <span className="text-[10px] text-slate-400">Alert when wind speed exceeds limit</span>
            </div>
            <select
              value={thresholds.maxWindSpeed}
              onChange={(e) => handleNumberChange('maxWindSpeed', Number(e.target.value))}
              className="p-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300 focus:outline-none"
            >
              <option value={15}>15 km/h</option>
              <option value={18}>18 km/h</option>
              <option value={22}>22 km/h</option>
            </select>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
            <div>
              <span className="font-semibold text-slate-100 block">Pre-Departure Safety Reminder</span>
              <span className="text-[10px] text-slate-400">Prompt safety gear checklist before sailing</span>
            </div>
            <button
              onClick={() => toggleSwitch('preDepartureReminder')}
              className={`px-3 py-1 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                thresholds.preDepartureReminder
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {thresholds.preDepartureReminder ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
        Alerts trigger visual badges and audio tones in the Safety Center & Dashboard.
      </div>
    </div>
  );
};

export default NotificationThresholds;
