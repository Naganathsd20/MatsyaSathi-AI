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
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 relative flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">🎣 Fishing Condition</h2>
              <span className="text-xs text-slate-400 font-semibold">Diurnal Trip Breakdown</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            {fishingCondition.suggestedWindow.status}
          </span>
        </div>

        {/* Diurnal Period Breakdown */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {fishingCondition.periods.map((p, idx) => {
            const IconComp = iconMap[p.name] || Sun;
            return (
              <div key={idx} className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-center shadow-md">
                <IconComp className="w-4.5 h-4.5 text-cyan-400 mx-auto mb-1" />
                <div className="text-xs sm:text-sm font-extrabold text-white">{p.name}</div>
                <div className="text-xs text-emerald-400 font-black mt-0.5">{p.badge}</div>
              </div>
            );
          })}
        </div>

        {/* Suggested Window Card */}
        <div className="p-4 rounded-2xl bg-[#071F33] border border-cyan-900/40 mb-4">
          <div className="text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Suggested Departure Window</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {fishingCondition.suggestedWindow.time}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium leading-relaxed">
            "{fishingCondition.suggestedWindow.note}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-cyan-900/30 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">Plan trip based on tide & wind</span>
        <Link to="/zones">
          <Button size="sm" icon={Target} iconPosition="right">
            Select Target Zone
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FishingWindowCard;
