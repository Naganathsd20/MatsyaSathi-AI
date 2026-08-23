import React from 'react';
import { Clock, Info } from 'lucide-react';

export const SafetyTimeline = ({ timeline }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">⏱️ Safety Timeline</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
              Safety Schedule
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Key departure, fishing, and safety checkpoint milestones throughout the day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
        {timeline.map((item, idx) => (
          <div key={idx} className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-2 shadow-md">
            <div className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs w-fit">
              {item.time}
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{item.title}</h4>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Schedule illustration for safety planning.</span>
        </span>
      </div>
    </div>
  );
};

export default SafetyTimeline;
