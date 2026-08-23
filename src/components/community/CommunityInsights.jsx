import React from 'react';
import { Compass, Info, CheckCircle2 } from 'lucide-react';

export const CommunityInsights = ({ insights }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">💡 Local Community Observations</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                Community Insights
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Traditional maritime observations compiled from experienced Mangaluru coastal skippers.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {insights.map((item, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-1.5 text-xs shadow-md">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <h4 className="font-bold text-white">{item.title}</h4>
            </div>
            <p className="text-slate-200 font-medium leading-relaxed pl-6">
              "{item.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center gap-1">
        <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span>Traditional maritime wisdom provided as supplemental decision-support indicators.</span>
      </div>
    </div>
  );
};

export default CommunityInsights;
