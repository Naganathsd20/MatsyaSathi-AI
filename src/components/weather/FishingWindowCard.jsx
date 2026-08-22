import React from 'react';
import { Clock, ArrowRight, Sun, Sunset, Sunrise, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const FishingWindowCard = ({ fishingCondition }) => {
  const iconMap = {
    Morning: Sunrise,
    Afternoon: Sun,
    Evening: Sunset
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 relative flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">🎣 Fishing Condition</h2>
              <span className="text-[10px] text-slate-400 font-medium">Diurnal Trip Breakdown</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40">
            {fishingCondition.suggestedWindow.status}
          </span>
        </div>

        {/* Diurnal Period Breakdown */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {fishingCondition.periods.map((p, idx) => {
            const IconComp = iconMap[p.name] || Sun;
            return (
              <div key={idx} className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <IconComp className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <div className="text-xs font-semibold text-slate-200">{p.name}</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">{p.badge}</div>
              </div>
            );
          })}
        </div>

        {/* Suggested Window Card */}
        <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 mb-4">
          <div className="text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Suggested Departure Window</span>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight">
            {fishingCondition.suggestedWindow.time}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            "{fishingCondition.suggestedWindow.note}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-xs text-slate-400">Ready to locate target sectors?</span>
        <Link to="/zones">
          <Button size="sm" icon={ArrowRight} iconPosition="right">
            View Fishing Zones
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FishingWindowCard;
