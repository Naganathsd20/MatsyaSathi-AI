import React from 'react';
import { Radio, Info } from 'lucide-react';

export const EmergencyReadiness = ({ readinessList }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">🛟 Emergency Readiness</h3>
              <span className="text-[10px] text-slate-400">Vessel Safety Systems Status</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Prototype Status
          </span>
        </div>

        <div className="space-y-2 my-3">
          {readinessList.map((r, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">{r.item}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                r.status === 'READY'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-sky-500/20 text-cyan-300 border-sky-500/40'
              }`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Checklist-style prototype status indicator. Not connected to real radio beacons.</span>
      </div>
    </div>
  );
};

export default EmergencyReadiness;
