import React from 'react';
import { Anchor } from 'lucide-react';

export const PageHeader = ({
  title,
  subtitle,
  icon: Icon = Anchor,
  location = "Mangaluru Coast",
  actionButton = null,
  badgeText = null
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
      <div className="flex items-start gap-3.5">
        {Icon && (
          <div className="p-3 rounded-2xl glass-panel border border-sky-500/20 text-sky-400 shrink-0">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
              {title}
            </h1>
            {badgeText && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30">
                {badgeText}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-slate-400 max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {location && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel text-xs text-slate-300 border border-slate-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{location}</span>
          </div>
        )}
        {actionButton}
      </div>
    </div>
  );
};

export default PageHeader;
