import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Waves, CloudSun, ShieldCheck, Clock, Info } from 'lucide-react';

export const SummaryCardsGrid = ({ summaryData }) => {
  const { t } = useLanguage();
  const { seaCondition, weather, safetyStatus, bestTimeToGo } = summaryData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Sea Condition Card */}
      <div className="glass-card rounded-2xl p-5 sm:p-6 border border-cyan-900/40 relative flex flex-col justify-between shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Waves className="w-5 h-5" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              {seaCondition.trend}
            </span>
          </div>

          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">{t('dashboard.seaCondition', 'Sea Condition')}</h3>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2 tracking-tight">
            {seaCondition.status}
          </div>
        </div>

        <div className="pt-3 border-t border-cyan-900/30 space-y-1.5 text-xs sm:text-sm font-medium">
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">{t('dashboard.waveHeight', 'Wave Height')}:</span>
            <span className="font-extrabold text-white">{seaCondition.waveHeight}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">{t('dashboard.windSpeed', 'Wind Speed')}:</span>
            <span className="font-extrabold text-white">{seaCondition.windSpeed}</span>
          </div>
        </div>
      </div>

      {/* 2. Weather Card */}
      <div className="glass-card rounded-2xl p-5 sm:p-6 border border-cyan-900/40 relative flex flex-col justify-between shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <CloudSun className="w-5 h-5" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {weather.condition}
            </span>
          </div>

          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">{t('dashboard.weather', 'Weather')}</h3>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2 tracking-tight">
            {weather.temperature}
          </div>
        </div>

        <div className="pt-3 border-t border-cyan-900/30 space-y-1.5 text-xs sm:text-sm font-medium">
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">{t('dashboard.rainProbability', 'Rain Probability')}:</span>
            <span className="font-extrabold text-white">{weather.rainProbability}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400">Visibility:</span>
            <span className="font-extrabold text-white">Good (8.5 NM)</span>
          </div>
          <div className="pt-1.5 mt-1 border-t border-cyan-900/30">
            <Link to="/weather" className="text-xs font-extrabold text-cyan-400 hover:text-cyan-200 inline-flex items-center gap-1">
              <span>View Weather Details →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Safety Status Card */}
      <div className="glass-card rounded-2xl p-5 sm:p-6 border border-emerald-500/40 relative flex flex-col justify-between bg-[#0B2A1E]/80 shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {safetyStatus.statusBadge}
            </span>
          </div>

          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">{t('dashboard.safetyStatus', 'Safety Status')}</h3>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 mb-1 tracking-tight">
            {safetyStatus.status}
          </div>
        </div>

        <div>
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed mt-1">
            "{safetyStatus.message}"
          </p>
          <div className="mt-2.5 pt-2 border-t border-emerald-500/30 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
            <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{t('dashboard.safetyStatus', 'Current Safety Status')}</span>
          </div>
        </div>
      </div>

      {/* 4. Best Fishing Time Card */}
      <div className="glass-card rounded-2xl p-5 sm:p-6 border border-cyan-900/40 relative flex flex-col justify-between shadow-md">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Clock className="w-5 h-5" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Optimal Window
            </span>
          </div>

          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">{t('dashboard.bestTimeToGo', 'Best Fishing Time')}</h3>
          <div className="text-xl sm:text-2xl font-black text-white mt-1 mb-1 tracking-tight">
            {bestTimeToGo.window}
          </div>
        </div>

        <div>
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mt-1">
            {bestTimeToGo.recommendationNote}
          </p>
          <div className="mt-2.5 pt-2 border-t border-cyan-900/30 flex justify-between text-xs sm:text-sm text-slate-300 font-medium">
            <span className="text-slate-400">Tide Window:</span>
            <span className="font-extrabold text-white">Low tide 06:15 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCardsGrid;
