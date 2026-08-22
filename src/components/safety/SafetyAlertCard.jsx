import React from 'react';
import { AlertTriangle, Info, ShieldAlert } from 'lucide-react';

export const SafetyAlertCard = ({ alert }) => {
  const styles = {
    info: {
      border: "border-sky-500/30 bg-sky-950/30",
      badge: "bg-sky-500/20 text-sky-300 border-sky-500/40",
      icon: Info,
      iconColor: "text-sky-400"
    },
    warning: {
      border: "border-amber-500/30 bg-amber-950/30",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      icon: AlertTriangle,
      iconColor: "text-amber-400"
    },
    danger: {
      border: "border-rose-500/30 bg-rose-950/30",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      icon: ShieldAlert,
      iconColor: "text-rose-400"
    }
  };

  const st = styles[alert.severity] || styles.info;
  const IconComp = st.icon;

  return (
    <div className={`p-5 rounded-2xl border backdrop-blur-md ${st.border} space-y-3 flex flex-col justify-between`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${st.iconColor}`}>
              <IconComp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">{alert.title}</h3>
              <span className="text-[11px] text-slate-400">{alert.time}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${st.badge}`}>
              {alert.severityLabel}
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
              {alert.badge}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-200 leading-relaxed mt-3">
          "{alert.message}"
        </p>
      </div>
    </div>
  );
};

export default SafetyAlertCard;
