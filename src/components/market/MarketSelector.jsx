import React from 'react';
import { Anchor, MapPin } from 'lucide-react';

export const MarketSelector = ({ harbors, selectedHarborId, onSelectHarbor }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-amber-400">
            <Anchor className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">⚓ Select Landing Harbor</h2>
            <p className="text-xs text-slate-300 mt-0.5 font-medium">
              Compare harbor auction prices across regional landing centers.
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400 font-medium">
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
                  ? 'bg-amber-500/15 border-amber-400 ring-2 ring-amber-400/40 shadow-lg scale-[1.02]'
                  : 'bg-[#0B253C] border-cyan-900/40 hover:border-cyan-400/50 hover:bg-[#0E2F4C]'
              }`}
            >
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-extrabold text-xs text-white truncate">{h.name}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium block">{h.status}</span>
              </div>

              <div className="mt-3 pt-2 border-t border-cyan-900/30 text-[10px] font-mono font-bold text-cyan-300">
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
