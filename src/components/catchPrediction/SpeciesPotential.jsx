import React from 'react';
import { Tag, Info } from 'lucide-react';

export const SpeciesPotential = ({ speciesList }) => {
  const badgeStyles = {
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/40"
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">🐟 Target Species Potential</h3>
              <span className="text-[10px] text-slate-400">Habitat suitability indicators</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Prototype Indicators
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
          {speciesList.map((sp, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-100">{sp.species}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${badgeStyles[sp.badgeType] || badgeStyles.success}`}>
                {sp.potential} Potential
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Species associations shown here are prototype indicators based on depth and season.</span>
      </div>
    </div>
  );
};

export default SpeciesPotential;
