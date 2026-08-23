import React from 'react';
import { Bot, AlertTriangle, Sparkles, ShieldAlert } from 'lucide-react';

export const WeatherInsightCard = ({ aiInsight }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 bg-[#071F33] relative overflow-hidden shadow-md">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-cyan-400 shrink-0">
          <Bot className="w-6 h-6" />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>{aiInsight.title}</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-extrabold">
                Decision Support
              </span>
            </h3>
          </div>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-bold">
            "{aiInsight.text}"
          </p>

          <div className="p-3.5 rounded-xl bg-[#2E1F0A]/90 border border-amber-500/30 flex items-start gap-2.5 text-xs sm:text-sm text-amber-300 font-bold">
            <AlertTriangle className="w-4.5 h-4.5 text-amber-400 shrink-0 mt-0.5" />
            <span>⚠️ {aiInsight.warningNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInsightCard;
