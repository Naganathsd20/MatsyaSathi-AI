import React from 'react';
import { Info, Sparkles, MapPin } from 'lucide-react';

export const DashboardHeader = ({ headerData }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
      <div>
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
            {headerData.greeting}
          </h1>
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold">
            <Info className="w-3 h-3 text-amber-400" />
            {headerData.prototypeBadge}
          </span>
        </div>
        <p className="text-sm text-slate-400">
          {headerData.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-panel text-xs text-sky-200 border border-sky-500/30 bg-sky-950/30">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-semibold">{headerData.locationTag}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
