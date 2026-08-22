import React from 'react';
import { ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MarketSnapshotCard = ({ marketData }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-amber-500/20 relative flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">💰 Market Snapshot</h3>
              <span className="text-[10px] text-slate-400 font-medium">Mangaluru Harbor</span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
            {marketData.label}
          </span>
        </div>

        {/* Prototype Market Table / Items */}
        <div className="space-y-2 my-3">
          {marketData.items.map((item, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-semibold text-slate-200">{item.species}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100">{item.price}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-teal-400 border border-slate-700">
                  {item.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80">
        <Link
          to="/market"
          className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 gap-1.5 transition-all"
        >
          <span>View Market</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default MarketSnapshotCard;
