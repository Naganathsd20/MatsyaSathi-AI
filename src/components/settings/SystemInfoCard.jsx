import React from 'react';
import { Cpu, Info, CheckCircle2 } from 'lucide-react';

export const SystemInfoCard = ({ info }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100">ℹ️ System Info & Application Health</h3>
            <span className="text-[10px] text-slate-400">Platform Build Status</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          HEALTHY
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-medium">App Name</span>
          <span className="font-bold text-slate-100 mt-0.5 block">{info.appName}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-medium">Build Version</span>
          <span className="font-bold text-cyan-300 font-mono mt-0.5 block">{info.version}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-medium">Edition</span>
          <span className="font-bold text-amber-300 mt-0.5 block">{info.buildEdition}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-medium">Local Storage</span>
          <span className="font-bold text-emerald-300 font-mono mt-0.5 block">{info.localStorageUsage}</span>
        </div>
      </div>
    </div>
  );
};

export default SystemInfoCard;
