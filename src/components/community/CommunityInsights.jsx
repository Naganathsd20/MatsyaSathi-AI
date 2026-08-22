import React from 'react';
import { Compass, Info, CheckCircle2 } from 'lucide-react';

export const CommunityInsights = ({ insights }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">💡 Local Community Observations</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                Prototype Insights
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Traditional maritime observations compiled from experienced Mangaluru coastal skippers.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {insights.map((item, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <h4 className="font-bold text-slate-100">{item.title}</h4>
            </div>
            <p className="text-slate-300 leading-relaxed pl-6">
              "{item.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span>Traditional maritime wisdom provided as supplemental decision-support indicators.</span>
      </div>
    </div>
  );
};

export default CommunityInsights;
