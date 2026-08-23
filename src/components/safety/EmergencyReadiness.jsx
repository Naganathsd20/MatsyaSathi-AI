import React from 'react';
import { Radio, Info } from 'lucide-react';

export const EmergencyReadiness = ({ readinessList }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">🛟 Emergency Readiness</h3>
              <span className="text-[10px] text-slate-400 font-medium">Vessel Safety Systems Status</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
            Readiness Status
          </span>
        </div>

        <div className="space-y-2 my-3">
          {readinessList.map((r, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 flex items-center justify-between text-xs shadow-md">
              <span className="font-bold text-white">{r.item}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${
                r.status === 'READY'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
              }`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2.5 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Checklist-style status indicator for pre-departure verification.</span>
      </div>
    </div>
  );
};

export default EmergencyReadiness;
