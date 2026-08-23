import React from 'react';
import { Star, CheckCircle2, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import Button from '../Button';

export const ZoneRecommendationHero = ({ heroData, onSelectZone }) => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-[#0B2A1E]/90 relative overflow-hidden space-y-6 shadow-xl text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-500/30 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-md">
            <Star className="w-7 h-7 fill-emerald-400 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                Top Recommendation
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {heroData.statusBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tracking-tight">
              Today's Recommended Sector: <span className="text-emerald-400">{heroData.name}</span>
            </h2>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-center shrink-0 shadow-md">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Suitability Score</div>
          <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mt-0.5">
            {heroData.score} <span className="text-sm font-bold text-slate-400">/ {heroData.maxScore}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm text-slate-200 leading-relaxed font-semibold">
            "{heroData.summary}"
          </p>

          {/* Why Zone A factors */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Why {heroData.name}?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {heroData.whyPoints.map((pt, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#071F33] border border-emerald-500/30 text-slate-100 font-medium flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 p-5 rounded-2xl bg-[#071F33] border border-cyan-900/40 space-y-4 flex flex-col justify-between h-full shadow-md">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-bold mb-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Target Sector Profile</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Location Bearing:</span>
                <span className="font-bold text-white">{heroData.bearing}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Distance from Coast:</span>
                <span className="font-bold text-white">{heroData.distance}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Target Species:</span>
                <span className="font-bold text-white">{heroData.targetSpecies}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-cyan-900/30">
            <Button
              className="w-full"
              onClick={() => onSelectZone(heroData.id)}
            >
              Explore Sector Details
            </Button>
          </div>
        </div>
      </div>
    </div>);
};

export default ZoneRecommendationHero;
