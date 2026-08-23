import React from 'react';
import { Target, ArrowRight, Info, Compass, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../Button';

export const ZoneRecommendationCard = ({ zones }) => {
  const { t } = useLanguage();

  const badgeStyles = {
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold"
  };

  const borderStyles = {
    success: "border-emerald-500/30 hover:border-emerald-400 bg-[#0B253C]",
    warning: "border-amber-500/30 hover:border-amber-400 bg-[#0B253C]",
    danger: "border-rose-500/30 hover:border-rose-400 bg-[#0B253C]"
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">🎯 {t('dashboard.recommendedZones', 'Recommended Fishing Zones')}</h2>
              <span className="text-xs px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                Active Sectors
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
              Zone suitability based on depth, distance, and sea condition profiles.
            </p>
          </div>
        </div>

        <Link to="/zones" className="shrink-0">
          <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
            View All Fishing Zones
          </Button>
        </Link>
      </div>

      {/* Grid of 3 Zone Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {zones.map((zone) => (
          <Link
            key={zone.id}
            to="/zones"
            className={`p-5 rounded-2xl border ${borderStyles[zone.badgeType] || borderStyles.success} transition-all duration-200 flex flex-col justify-between hover:shadow-lg block cursor-pointer`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg sm:text-xl text-white">{zone.name}</span>
                  <span className="text-xs text-slate-400 font-mono font-bold">({zone.bearing})</span>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${badgeStyles[zone.badgeType] || badgeStyles.success}`}>
                  {zone.badge}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm py-2">
                <div className="flex justify-between items-center text-slate-300 font-medium">
                  <span className="text-slate-400 font-medium">Suitability:</span>
                  <span className="font-extrabold text-white">{zone.suitability}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 font-medium">
                  <span className="text-slate-400 font-medium">Distance:</span>
                  <span className="font-extrabold text-white">{zone.distance}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 font-medium">
                  <span className="text-slate-400 font-medium">Sea Condition:</span>
                  <span className="font-extrabold text-white">{zone.seaCondition}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 font-medium">
                  <span className="text-slate-400 font-medium">Catch Potential:</span>
                  <span className="font-extrabold text-white">{zone.catchPotential}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-cyan-900/30 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>Depth: {zone.depth}</span>
              <span className="text-xs text-cyan-400 font-bold flex items-center gap-1">Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ZoneRecommendationCard;
