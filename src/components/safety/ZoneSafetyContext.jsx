import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { fishingZonesData } from '../../data/fishingZonesData';

export const ZoneSafetyContext = () => {
  const zoneA = fishingZonesData.zones[0];

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400 shrink-0">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">🎯 Fishing Zone Safety Context</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
              {zoneA.statusBadge}
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Recommended Sector: {zoneA.name} ({zoneA.distance}) • Score: {zoneA.score}/100 • Wind: {zoneA.windSpeed} • Wave: {zoneA.waveHeight}.
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

export default ZoneSafetyContext;
