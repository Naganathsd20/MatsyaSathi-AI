import React from 'react';
import { Tag, Info } from 'lucide-react';

export const SpeciesPotential = ({ speciesList }) => {
  const badgeStyles = {
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold"
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">🐟 Target Species Potential</h3>
              <span className="text-[10px] text-slate-400 font-medium">Habitat suitability indicators</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
            Species Indicators
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
          {speciesList.map((sp, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#0B253C] border border-cyan-900/40 flex items-center justify-between text-xs shadow-md">
              <span className="font-extrabold text-white">{sp.species}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs border ${badgeStyles[sp.badgeType] || badgeStyles.success}`}>
                {sp.potential} Potential
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2.5 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center gap-1">
        <Info className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Species associations shown here are indicators based on depth and season.</span>
      </div>
    </div>
  );
};

export default SpeciesPotential;
