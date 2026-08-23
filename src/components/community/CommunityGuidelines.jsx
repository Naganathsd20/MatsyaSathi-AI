import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const CommunityGuidelines = ({ guidelines }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center gap-3 pb-3 border-b border-cyan-900/30">
        <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">🛡️ Community Participation & Safety Guidelines</h3>
          <span className="text-[10px] text-slate-400 font-medium">Rules for peer information exchange</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {guidelines.map((g, idx) => (
          <div key={idx} className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-1 shadow-md">
            <span className="font-extrabold text-cyan-300 block">{g.rule}</span>
            <span className="text-slate-300 font-medium block leading-relaxed">{g.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityGuidelines;
