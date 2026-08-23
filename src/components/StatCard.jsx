import React from 'react';
import { Info } from 'lucide-react';

export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  badgeText,
  badgeColor = "sky",
  detailList = [],
  isPlaceholder = true,
  className = ""
}) => {
  const badgeStyles = {
    teal: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-bold",
    cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30 font-bold",
    sky: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30 font-bold",
    emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-bold",
    amber: "bg-amber-500/15 text-amber-300 border-amber-500/30 font-bold",
    rose: "bg-rose-500/15 text-rose-300 border-rose-500/30 font-bold"
  };

  const iconStyles = {
    teal: "text-emerald-400 bg-[#071F33] border-cyan-900/40",
    cyan: "text-cyan-400 bg-[#071F33] border-cyan-900/40",
    sky: "text-cyan-400 bg-[#071F33] border-cyan-900/40",
    emerald: "text-emerald-400 bg-[#071F33] border-cyan-900/40",
    amber: "text-amber-400 bg-[#071F33] border-amber-900/40",
    rose: "text-rose-400 bg-[#071F33] border-rose-900/40"
  };

  return (
    <div className={`glass-card rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between ${className}`}>
      {/* Header section */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            {Icon && (
              <div className={`p-2.5 rounded-xl border ${iconStyles[badgeColor] || iconStyles.sky}`}>
                <Icon className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="text-base font-bold text-slate-300">{title}</h3>
              {isPlaceholder && (
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-slate-400 font-bold">
                  <Info className="w-3.5 h-3.5 text-cyan-400" /> Operational Context
                </span>
              )}
            </div>
          </div>

          {badgeText && (
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${badgeStyles[badgeColor] || badgeStyles.sky}`}>
              {badgeText}
            </span>
          )}
        </div>

        {/* Main Value Display */}
        <div className="mt-2">
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {value}
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Supporting Bullet Details */}
      {detailList.length > 0 && (
        <div className="mt-4 pt-3 border-t border-cyan-900/30 space-y-1.5">
          {detailList.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs sm:text-sm font-medium">
              <span className="text-slate-400 font-medium">{item.label}</span>
              <span className="font-extrabold text-white">{item.val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatCard;
