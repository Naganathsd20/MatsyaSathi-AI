import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const FishingZoneTipsCard = () => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 bg-[#0B253C] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400 shrink-0">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">🎯 Fishing Zone Recommendations</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/30">
              Zone Map Layers
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Check suitability ratings and spatial distance rings for Zone A, Zone B, and Zone C.
          </p>
        </div>
      </div>

      <Link to="/zones" className="shrink-0">
        <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
          View Fishing Zones
        </Button>
      </Link>
    </div>
  );
};

export default FishingZoneTipsCard;
