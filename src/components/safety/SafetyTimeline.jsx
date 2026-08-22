import React from 'react';
import { Clock, Info } from 'lucide-react';

export const SafetyTimeline = ({ timeline }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-100">⏱️ Safety Timeline</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium">
              Prototype Safety Timeline
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Key departure, fishing, and safety checkpoint milestones throughout the day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
        {timeline.map((item, idx) => (
          <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="px-2 py-1 rounded bg-sky-950/80 border border-sky-500/30 text-cyan-300 font-mono font-bold text-xs w-fit">
              {item.time}
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">{item.title}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Prototype schedule illustration for safety planning.</span>
        </span>
      </div>
    </div>
  );
};

export default SafetyTimeline;
