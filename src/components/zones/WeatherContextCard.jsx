import React from 'react';
import { CloudSun, ArrowRight, Wind, Waves, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const WeatherContextCard = () => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#071F33] shadow-md">
      <div className="flex items-start gap-4">
        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-cyan-400 shrink-0">
          <CloudSun className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white">🌦️ Current Weather Context</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/30">
              Live Telemetry
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl font-medium">
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
