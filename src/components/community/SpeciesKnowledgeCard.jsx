import React from 'react';
import { Tag, Sparkles, ShoppingBag } from 'lucide-react';

export const SpeciesKnowledgeCard = ({ speciesList }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-100">🐟 Species Habitat & Handling Knowledge</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
              Local Fisher Wisdom
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Practical knowledge regarding species behavior, depth preferences, and market handling.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {speciesList.map((sp, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-bold text-slate-100">{sp.species}</span>
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  {sp.localName}
                </span>
              </div>

              <div className="space-y-1.5 text-slate-300">
                <div><span className="text-slate-400">Preferred Depth:</span> <span className="font-semibold text-cyan-300">{sp.preferredDepth}</span></div>
                <p className="text-slate-300 leading-relaxed mt-1">"{sp.characteristics}"</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-emerald-300 flex items-start gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Handling/Market Tip: {sp.sellingTip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeciesKnowledgeCard;
