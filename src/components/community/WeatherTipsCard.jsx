import React from 'react';
import { CloudSun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const WeatherTipsCard = () => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 bg-[#0B253C] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400 shrink-0">
          <CloudSun className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">🌦️ Weather & Sea Intelligence</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/30">
              Live Weather Feed
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Compare peer weather tips with live coastal wind, swell, and tide telemetry.
          </p>
        </div>
      </div>

      <Link to="/weather" className="shrink-0">
        <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
          View Weather & Sea Intelligence
        </Button>
      </Link>
    </div>
  );
};

export default WeatherTipsCard;
