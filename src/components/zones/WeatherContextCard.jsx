import React from 'react';
import { CloudSun, ArrowRight, Wind, Waves, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const WeatherContextCard = () => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
      <div className="flex items-start gap-4">
        <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
          <CloudSun className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-100">🌦️ Current Weather Context</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-cyan-300 font-semibold border border-sky-500/30">
              Phase 3 Telemetry
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Coastal conditions at Mangaluru: 28°C • 14 km/h NW wind • 0.8 m wave height • Moderate sea state.
          </p>
        </div>
      </div>

      <div className="shrink-0">
        <Link to="/weather">
          <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
            View Full Weather & Sea Intelligence
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WeatherContextCard;
