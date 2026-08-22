import React from 'react';
import { TrendingUp, ArrowRight, Info, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CatchPotentialCard = ({ catchData }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 relative flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">🐟 Catch Potential</h3>
              <span className="text-[10px] text-slate-400 font-medium">{catchData.confidence}</span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            {catchData.status}
          </span>
        </div>

        <div className="my-3">
          <div className="text-2xl font-bold text-slate-100 tracking-tight">
            {catchData.estimatedCatch}
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Estimated catch yield range for today's morning voyage.</p>
        </div>

        {/* Phase 5 Disclaimer Note */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1 my-2">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Phase 5 Roadmap Note</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-snug">
            "{catchData.disclaimer}"
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80">
        <Link
          to="/catch-prediction"
          className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 gap-1.5 transition-all"
        >
          <span>View Catch Prediction</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default CatchPotentialCard;
