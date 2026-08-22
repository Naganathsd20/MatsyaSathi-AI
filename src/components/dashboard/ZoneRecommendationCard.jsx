import React from 'react';
import { Target, ArrowRight, Info, Compass, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const ZoneRecommendationCard = ({ zones }) => {
  const badgeStyles = {
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/40"
  };

  const borderStyles = {
    success: "border-emerald-500/30 hover:border-emerald-500/50",
    warning: "border-amber-500/30 hover:border-amber-500/50",
    danger: "border-rose-500/30 hover:border-rose-500/50"
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-cyan-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">🎯 Recommended Fishing Zones</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium">
                Prototype Zones
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Demonstration zone suitability based on depth, distance, and sea condition profiles.
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
            className={`p-4 rounded-2xl bg-slate-900/80 border ${borderStyles[zone.badgeType] || borderStyles.success} transition-all duration-200 flex flex-col justify-between hover:scale-[1.01] block cursor-pointer`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-slate-100">{zone.name}</span>
                  <span className="text-[11px] text-slate-400 font-mono">({zone.bearing})</span>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${badgeStyles[zone.badgeType] || badgeStyles.success}`}>
                  {zone.badge}
                </span>
              </div>

              <div className="space-y-2 text-xs py-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Suitability:</span>
                  <span className="font-semibold text-slate-100">{zone.suitability}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Distance:</span>
                  <span className="font-semibold text-slate-100">{zone.distance}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Sea Condition:</span>
                  <span className="font-semibold text-slate-100">{zone.seaCondition}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Catch Potential:</span>
                  <span className="font-semibold text-slate-100">{zone.catchPotential}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>Depth: {zone.depth}</span>
              <span className="text-[10px] text-cyan-400 font-semibold flex items-center gap-1">Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ZoneRecommendationCard;
