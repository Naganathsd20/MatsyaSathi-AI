import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const CommunityGuidelines = ({ guidelines }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 bg-slate-950/80 space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
        <div className="p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-100">🛡️ Community Participation & Safety Guidelines</h3>
          <span className="text-[10px] text-slate-400">Rules for peer information exchange</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {guidelines.map((g, idx) => (
          <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-300 block">{g.rule}</span>
            <span className="text-slate-300 block leading-relaxed">{g.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityGuidelines;
