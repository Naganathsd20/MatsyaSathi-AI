import React from 'react';
import { Bot, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MarketInsightCard = ({ aiInsight }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden space-y-4">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
          <Bot className="w-6 h-6" />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>{aiInsight.title}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                Decision Support
              </span>
            </h3>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            "{aiInsight.text}"
          </p>

          <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>⚠️ {aiInsight.disclaimer}</span>
          </div>
        </div>
      </div>

      {/* Navigation Connections Bar */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-slate-400 font-medium">Cross-Module Intelligence Navigation:</span>
        <div className="flex items-center gap-3 flex-wrap">
          <Link to="/zones" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1">
            <span>View Fishing Zones →</span>
          </Link>
          <Link to="/catch-prediction" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1">
            <span>View Catch Prediction →</span>
          </Link>
          <Link to="/weather" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1">
            <span>View Weather & Sea →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightCard;
