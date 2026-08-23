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
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 bg-[#0B253C] flex flex-col justify-between space-y-4 h-full shadow-md">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-amber-500/40 text-amber-400">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">🚨 Alert & Safety Thresholds</h3>
              <span className="text-[10px] text-slate-400 font-medium">Custom Hazard Notification Limits</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/40">
            Active Rules
          </span>
        </div>

        <div className="space-y-3 my-3 text-xs">
          <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 flex justify-between items-center shadow-md">
            <div>
              <span className="font-extrabold text-white block">High Wave Advisory Threshold</span>
              <span className="text-[10px] text-slate-400 font-medium">Alert when sea swell exceeds limit</span>
            </div>
            <select
              value={thresholds.maxWaveHeight}
              onChange={(e) => handleNumberChange('maxWaveHeight', Number(e.target.value))}
              className="p-1.5 rounded-xl bg-[#0B253C] border border-amber-500/40 text-xs font-bold text-amber-300 focus:outline-none"
            >
              <option value={1.0} className="bg-[#051726]">1.0 meters</option>
              <option value={1.5} className="bg-[#051726]">1.5 meters</option>
              <option value={2.0} className="bg-[#051726]">2.0 meters</option>
            </select>
          </div>

          <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 flex justify-between items-center shadow-md">
            <div>
              <span className="font-extrabold text-white block">Wind Velocity Threshold</span>
              <span className="text-[10px] text-slate-400 font-medium">Alert when wind speed exceeds limit</span>
            </div>
            <select
              value={thresholds.maxWindSpeed}
              onChange={(e) => handleNumberChange('maxWindSpeed', Number(e.target.value))}
              className="p-1.5 rounded-xl bg-[#0B253C] border border-amber-500/40 text-xs font-bold text-amber-300 focus:outline-none"
            >
              <option value={15} className="bg-[#051726]">15 km/h</option>
              <option value={18} className="bg-[#051726]">18 km/h</option>
              <option value={22} className="bg-[#051726]">22 km/h</option>
            </select>
          </div>

          <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 flex justify-between items-center shadow-md">
            <div>
              <span className="font-extrabold text-white block">Pre-Departure Safety Reminder</span>
              <span className="text-[10px] text-slate-400 font-medium">Prompt safety gear checklist before sailing</span>
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

      <div className="pt-2 border-t border-cyan-900/30 text-[10px] text-slate-400 font-medium">
        Alerts trigger visual badges and audio tones in the Safety Center & Dashboard.
      </div>
    </div>
  );
};

export default NotificationThresholds;
