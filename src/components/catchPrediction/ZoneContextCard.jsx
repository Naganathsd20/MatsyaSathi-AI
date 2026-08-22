import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { fishingZonesData } from '../../data/fishingZonesData';

export const ZoneContextCard = ({ selectedZoneId }) => {
  const zone = fishingZonesData.zones.find(z => z.id === selectedZoneId) || fishingZonesData.zones[0];

  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-100">🎯 Zone Context: {zone.name}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-bold border border-slate-700">
              {zone.statusBadge}
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Distance: {zone.distance} ({zone.direction}) • Depth: {zone.depth} • Suitability Score: {zone.score}/100 • Target Species: {zone.targetSpecies.join(', ')}.
          </p>
        </div>
      </div>

      <Link to="/zones" className="shrink-0">
        <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
          View Fishing Zone
        </Button>
      </Link>
    </div>
  );
};

export default ZoneContextCard;
