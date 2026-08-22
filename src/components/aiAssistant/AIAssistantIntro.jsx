import React from 'react';
import { Bot, Sparkles, CheckCircle2 } from 'lucide-react';

export const AIAssistantIntro = () => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 space-y-5">
      <div className="flex items-center gap-3.5 pb-3 border-b border-slate-800/80">
        <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
          <Bot className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
            👋 Welcome, Captain!
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Your intelligent marine decision-support assistant for coastal Karnataka.
          </p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
        I can help you analyze and synthesize today's fishing conditions across all core MatsyaSathi AI modules:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Weather & Sea</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Fishing Zones</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Catch Yield</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Safety Checks</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Market Rates</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Trip Planning</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2 sm:col-span-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Community Fisher Tips</span>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantIntro;
