import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export const FutureAiModelCard = ({ info }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 space-y-3">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <Rocket className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-100">{info.title}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
              Production Scalability
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed pl-1">
        {info.text}
      </p>
    </div>
  );
};

export default FutureAiModelCard;
