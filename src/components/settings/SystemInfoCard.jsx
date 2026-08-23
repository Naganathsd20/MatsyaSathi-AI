import React from 'react';
import { Cpu, Info, CheckCircle2 } from 'lucide-react';

export const SystemInfoCard = ({ info }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 bg-[#0B253C] space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">ℹ️ System Info & Application Health</h3>
            <span className="text-[10px] text-slate-400 font-medium">Platform Build Status</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          HEALTHY
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 block font-bold">App Name</span>
          <span className="font-extrabold text-white mt-0.5 block">{info.appName}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 block font-bold">Build Version</span>
          <span className="font-extrabold text-cyan-300 font-mono mt-0.5 block">{info.version}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 block font-bold">Edition</span>
          <span className="font-extrabold text-amber-300 mt-0.5 block">{info.buildEdition}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 block font-bold">Local Storage</span>
          <span className="font-extrabold text-emerald-300 font-mono mt-0.5 block">{info.localStorageUsage}</span>
        </div>
      </div>
    </div>
  );
};

export default SystemInfoCard;
