import React from 'react';
import { ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const MarketSnapshotCard = ({ marketData }) => {
  const { t } = useLanguage();

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 relative flex flex-col justify-between h-full shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">💰 {t('dashboard.marketSnapshot', 'Market Snapshot')}</h3>
              <span className="text-xs text-slate-400 font-semibold">Mangaluru Harbor</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            {marketData.label}
          </span>
        </div>

        {/* Market Table / Items */}
        <div className="space-y-2 my-3">
          {marketData.items.map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#0B253C] border border-cyan-900/40 flex items-center justify-between text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-extrabold text-white">{item.species}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-black text-amber-300 text-sm sm:text-base">{item.price}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                  {item.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-cyan-900/30">
        <Link
          to="/market"
          className="inline-flex items-center text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-200 gap-1.5 transition-all"
        >
          <span>View Market & Supply Chain</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default MarketSnapshotCard;
