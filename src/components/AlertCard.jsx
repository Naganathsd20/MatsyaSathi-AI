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
      bg: 'bg-[#07243B]/90 border-cyan-500/30',
      icon: Info,
      iconColor: 'text-cyan-400',
      badge: 'bg-cyan-500/20 text-cyan-300'
    },
    warning: {
      bg: 'bg-[#2E1F0A]/90 border-amber-500/30',
      icon: AlertTriangle,
      iconColor: 'text-amber-400',
      badge: 'bg-amber-500/20 text-amber-300'
    },
    danger: {
      bg: 'bg-[#2D0F16]/90 border-rose-500/30',
      icon: ShieldAlert,
      iconColor: 'text-rose-400',
      badge: 'bg-rose-500/20 text-rose-300'
    },
    success: {
      bg: 'bg-[#0B2A1E]/90 border-emerald-500/30',
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-300'
    }
  };

  const currentStyle = styles[severity] || styles.info;
  const IconComponent = currentStyle.icon;

  return (
    <div className={`p-4 rounded-xl border ${currentStyle.bg} ${className} flex items-start gap-3.5 transition-all shadow-md`}>
      <div className={`p-2 rounded-lg bg-[#0B253C] border border-cyan-900/40 ${currentStyle.iconColor} shrink-0 shadow-xs`}>
        <IconComponent className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-base font-extrabold text-white truncate">{title}</h4>
          {time && (
            <span className="text-xs text-slate-400 font-bold whitespace-nowrap">{time}</span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">{message}</p>
      </div>
    </div>
  );
};

export default AlertCard;
