import React from 'react';
import { Star, CheckCircle2, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import Button from '../Button';

export const ZoneRecommendationHero = ({ heroData, onSelectZone }) => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/25 via-slate-950 to-slate-900 relative overflow-hidden space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
            <Star className="w-7 h-7 fill-emerald-400 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                Top Recommendation
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {heroData.statusBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-0.5 tracking-tight">
              Today's Prototype Recommendation: <span className="text-emerald-300">{heroData.name}</span>
            </h2>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-center shrink-0">
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Suitability Score</div>
          <div className="text-3xl font-extrabold text-emerald-300 tracking-tight mt-0.5">
            {heroData.score} <span className="text-sm font-semibold text-slate-400">/ {heroData.maxScore}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            "{heroData.summary}"
          </p>

          {/* Why Zone A factors */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Why {heroData.name}?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {heroData.whyPoints.map((pt, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Recommended Action</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore detailed parameters, target species breakdown, and safety considerations for {heroData.name}.
            </p>
          </div>

          <Button
            size="md"
            variant="primary"
            onClick={() => onSelectZone(heroData.zoneId)}
            className="w-full"
          >
            View {heroData.name} Full Details
          </Button>

          <p className="text-[10px] text-slate-500 text-center">
            {heroData.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZoneRecommendationHero;
