import React from 'react';
import { AlertTriangle, Info, ShieldAlert } from 'lucide-react';

export const SafetyAlertCard = ({ alert }) => {
  const styles = {
    info: {
      border: "border-sky-500/30 bg-[#07243B]",
      badge: "bg-sky-500/20 text-sky-300 border-sky-500/40 font-bold",
      icon: Info,
      iconColor: "text-sky-400"
    },
    warning: {
      border: "border-amber-500/30 bg-[#2E1F0A]",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold",
      icon: AlertTriangle,
      iconColor: "text-amber-400"
    },
    danger: {
      border: "border-rose-500/30 bg-[#2D0F16]",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold",
      icon: ShieldAlert,
      iconColor: "text-rose-400"
    }
  };

  const st = styles[alert.severity] || styles.info;
  const IconComp = st.icon;

  return (
    <div className={`p-5 rounded-2xl border ${st.border} space-y-3 flex flex-col justify-between shadow-md`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-xl bg-[#0B253C] border border-cyan-900/40 ${st.iconColor} shadow-md`}>
              <IconComp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{alert.title}</h3>
              <span className="text-[11px] text-slate-400 font-medium">{alert.time}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className={`px-2.5 py-0.5 rounded-full text-xs border ${st.badge}`}>
              {alert.severityLabel}
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 font-mono font-semibold border border-cyan-500/30">
              {alert.badge}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-200 font-medium leading-relaxed mt-3">
          "{alert.message}"
        </p>
      </div>
    </div>
  );
};

export default SafetyAlertCard;
