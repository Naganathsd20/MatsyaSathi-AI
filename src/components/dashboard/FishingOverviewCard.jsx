import React from 'react';
import { Calendar, Clock, Info } from 'lucide-react';

export const FishingOverviewCard = ({ timeline }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 relative flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">📅 Today's Fishing Overview</h3>
              <span className="text-xs text-slate-400 font-semibold">Daily Timeline Schedule</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            Daily Schedule
          </span>
        </div>

        {/* Timeline List */}
        <div className="space-y-3 my-3">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="px-2.5 py-1 rounded-lg bg-[#0B253C] border border-cyan-900/40 text-cyan-300 font-mono font-extrabold shrink-0 min-w-[75px] text-center">
                {item.time}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-extrabold text-white">{item.title}</div>
                <div className="text-xs text-slate-300 font-medium">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 pt-2.5 border-t border-cyan-900/30 flex items-center justify-between text-xs text-slate-400 font-medium">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>Daily operational timeline</span>
        </span>
        <span className="text-xs text-slate-400 uppercase tracking-wider font-extrabold">Live Feed</span>
      </div>
    </div>
  );
};

export default FishingOverviewCard;
