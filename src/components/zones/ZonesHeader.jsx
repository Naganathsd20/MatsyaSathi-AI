import React from 'react';
import { Link } from 'react-router-dom';
import { Target, MapPin, Info, AlertTriangle, TrendingUp } from 'lucide-react';
import Button from '../Button';

export const ZonesHeader = ({ headerData }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-cyan-900/30">
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-cyan-400 shadow-md shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                {headerData.title}
              </h1>
              <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                {headerData.badgeText}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-3xl leading-relaxed">{headerData.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0B253C] text-xs sm:text-sm text-cyan-300 font-bold border border-cyan-900/40 shadow-xs">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{headerData.locationTag}</span>
          </div>

          <Link to="/catch-prediction">
            <Button size="sm" variant="outline" icon={TrendingUp} iconPosition="right">
              Catch Yields
            </Button>
          </Link>
        </div>
      </div>

      {/* Decision Support Disclaimer Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200 backdrop-blur-md">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {headerData.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default ZonesHeader;
