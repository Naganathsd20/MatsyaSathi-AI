import React from 'react';
import { ShieldAlert, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export const AlertCard = ({
  severity = 'info',
  title,
  message,
  time,
  className = ''
}) => {
  const styles = {
    info: {
      bg: 'bg-sky-950/40 border-sky-500/30',
      icon: Info,
      iconColor: 'text-sky-400',
      badge: 'bg-sky-500/20 text-sky-300'
    },
    warning: {
      bg: 'bg-amber-950/40 border-amber-500/30',
      icon: AlertTriangle,
      iconColor: 'text-amber-400',
      badge: 'bg-amber-500/20 text-amber-300'
    },
    danger: {
      bg: 'bg-rose-950/40 border-rose-500/30',
      icon: ShieldAlert,
      iconColor: 'text-rose-400',
      badge: 'bg-rose-500/20 text-rose-300'
    },
    success: {
      bg: 'bg-emerald-950/40 border-emerald-500/30',
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-300'
    }
  };

  const currentStyle = styles[severity] || styles.info;
  const IconComponent = currentStyle.icon;

  return (
    <div className={`p-4 rounded-xl border backdrop-blur-md ${currentStyle.bg} ${className} flex items-start gap-3.5 transition-all`}>
      <div className={`p-2 rounded-lg bg-slate-900/60 border border-slate-800 ${currentStyle.iconColor} shrink-0`}>
        <IconComponent className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-sm font-semibold text-slate-200 truncate">{title}</h4>
          {time && (
            <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">{time}</span>
          )}
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default AlertCard;
