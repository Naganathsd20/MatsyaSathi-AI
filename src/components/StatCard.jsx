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
    teal: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    sky: "bg-sky-500/10 text-sky-300 border-sky-500/30",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    rose: "bg-rose-500/10 text-rose-300 border-rose-500/30"
  };

  const iconStyles = {
    teal: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    sky: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20"
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
              <h3 className="text-sm font-medium text-slate-300">{title}</h3>
              {isPlaceholder && (
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  <Info className="w-3 h-3 text-slate-500" /> UI Placeholder
                </span>
              )}
            </div>
          </div>

          {badgeText && (
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeStyles[badgeColor] || badgeStyles.sky}`}>
              {badgeText}
            </span>
          )}
        </div>

        {/* Main Value Display */}
        <div className="mt-2">
          <div className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
            {value}
          </div>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Supporting Bullet Details */}
      {detailList.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
          {detailList.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs">
              <span className="text-slate-400">{item.label}</span>
              <span className="font-medium text-slate-200">{item.val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatCard;
