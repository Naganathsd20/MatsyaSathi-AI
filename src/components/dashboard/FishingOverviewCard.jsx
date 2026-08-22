import React from 'react';
import { Calendar, Clock, Info } from 'lucide-react';

export const FishingOverviewCard = ({ timeline }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 relative flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">📅 Today's Fishing Overview</h3>
              <span className="text-[10px] text-slate-400 font-medium">Daily Timeline Schedule</span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            Prototype Schedule
          </span>
        </div>

        {/* Timeline List */}
        <div className="space-y-3 my-3">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs">
              <div className="px-2 py-1 rounded bg-sky-950/60 border border-sky-500/30 text-sky-300 font-mono font-bold shrink-0 min-w-[70px] text-center">
                {item.time}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-200">{item.title}</div>
                <div className="text-[11px] text-slate-400">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <Info className="w-3 h-3 text-cyan-400" />
          <span>Prototype timeline illustration</span>
        </span>
        <span className="text-[10px] text-slate-500 uppercase tracking-wide">Phase 2</span>
      </div>
    </div>
  );
};

export default FishingOverviewCard;
