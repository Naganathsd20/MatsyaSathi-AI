import React from 'react';
import { CloudSun, MapPin, Info, ShieldCheck } from 'lucide-react';

export const WeatherHeader = ({ headerData }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-cyan-900/30">
      <div className="flex items-start gap-3.5">
        <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-cyan-400 shadow-md shrink-0">
          <CloudSun className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              {headerData.title}
            </h1>
            <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              {headerData.dataBadge}
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-3xl leading-relaxed">{headerData.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0B253C] text-xs sm:text-sm text-cyan-300 font-bold border border-cyan-900/40 shadow-xs">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{headerData.locationTag}</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-xs sm:text-sm text-emerald-300 font-extrabold border border-emerald-500/40">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{headerData.safetyPill.badge}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherHeader;
