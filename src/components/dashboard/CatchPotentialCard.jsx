import React from 'react';
import { TrendingUp, ArrowRight, Info, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const CatchPotentialCard = ({ catchData }) => {
  const { t } = useLanguage();

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 relative flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">🐟 {t('dashboard.catchPotential', 'Catch Potential')}</h3>
              <span className="text-xs text-slate-400 font-semibold">{catchData.confidence}</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            {catchData.status}
          </span>
        </div>

        <div className="my-3">
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {catchData.estimatedCatch}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Estimated catch yield range for today's morning voyage.</p>
        </div>

        {/* Catch Potential Forecast Note */}
        <div className="p-3.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-xs sm:text-sm text-slate-300 space-y-1 my-2">
          <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs">
            <Info className="w-4 h-4 shrink-0 text-cyan-400" />
            <span>Catch Potential Forecast</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            Catch potential calculated based on Zone A sea state, depth, and environmental factors.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-cyan-900/30">
        <Link
          to="/catch-prediction"
          className="inline-flex items-center text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-200 gap-1.5 transition-all"
        >
          <span>View Catch Prediction</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CatchPotentialCard;
