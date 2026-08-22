import React from 'react';
import { CloudSun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { weatherData } from '../../data/weatherData';

export const EnvironmentalContext = () => {
  const current = weatherData.current;

  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
          <CloudSun className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-100">🌊 Environmental Context</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
              Phase 3 Telemetry
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Current Telemetry: Temp {current.temperature} • Wind {current.windSpeed} ({current.windDirection}) • Wave {current.waveHeight} • Rain {current.rainProbability} • Sea State {current.seaCondition}.
          </p>
          <span className="text-[10px] text-slate-500 italic block mt-0.5">Based on current prototype weather context.</span>
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

export default EnvironmentalContext;
