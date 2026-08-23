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
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-cyan-900/30">
      <div className="flex items-start gap-3.5">
        {Icon && (
          <div className="p-3 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-cyan-400 shadow-md shrink-0">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              {title}
            </h1>
            {badgeText && (
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {badgeText}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-3xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {location && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0B253C] text-xs sm:text-sm text-cyan-300 font-bold border border-cyan-900/40 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{location}</span>
          </div>
        )}
        {actionButton}
      </div>
    </div>
  );
};

export default PageHeader;
