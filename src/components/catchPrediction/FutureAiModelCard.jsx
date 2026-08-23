import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export const FutureAiModelCard = ({ info }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-emerald-500/40 bg-[#0B2A1E]/90 space-y-3 shadow-md">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-xs">
          <Rocket className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white">{info.title}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
              Production Scalability
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-200 font-medium leading-relaxed pl-1">
        {info.text}
      </p>
    </div>
  );
};

export default FutureAiModelCard;
