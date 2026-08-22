import React from 'react';
import { CloudSun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { weatherData } from '../../data/weatherData';

export const WeatherSafetyContext = () => {
  const current = weatherData.current;

  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
          <CloudSun className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-100">🌦️ Weather & Sea Safety Context</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
              🟢 NORMAL
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Moderate sea conditions with low rain probability (20%) currently indicate a prototype NORMAL status.
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

export default WeatherSafetyContext;
