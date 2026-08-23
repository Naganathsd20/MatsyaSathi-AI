import React from 'react';
import { CloudSun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { weatherData } from '../../data/weatherData';

export const EnvironmentalContext = () => {
  const current = weatherData.current;

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400 shrink-0">
          <CloudSun className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">🌊 Environmental Context</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono font-semibold border border-cyan-500/30">
              Live Environmental Sensors
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Current Telemetry: Temp {current.temperature} • Wind {current.windSpeed} ({current.windDirection}) • Wave {current.waveHeight} • Rain {current.rainProbability} • Sea State {current.seaCondition}.
          </p>
          <span className="text-[10px] text-slate-400 italic block mt-0.5">Based on real-time weather context.</span>
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
