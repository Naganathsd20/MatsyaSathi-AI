import React from 'react';
import { Anchor, MapPin } from 'lucide-react';

export const MarketSelector = ({ harbors, selectedHarborId, onSelectHarbor }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Anchor className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">⚓ Select Landing Harbor</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Compare prototype auction prices across regional landing centers.
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400">
          Click any harbor below to switch price context
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {harbors.map((h) => {
          const isSelected = h.id === selectedHarborId;

          return (
            <button
              key={h.id}
              onClick={() => onSelectHarbor(h.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/40 shadow-lg shadow-amber-950/40 scale-[1.02]'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-bold text-xs text-slate-100 truncate">{h.name}</span>
                </div>
                <span className="text-[10px] text-slate-400 block">{h.status}</span>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-cyan-300">
                Distance: {h.distance}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MarketSelector;
