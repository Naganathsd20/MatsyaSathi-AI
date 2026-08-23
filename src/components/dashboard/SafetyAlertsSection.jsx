import React from 'react';
import { ShieldAlert, ArrowRight, Info, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import AlertCard from '../AlertCard';

export const SafetyAlertsSection = ({ alerts }) => {
  const { t } = useLanguage();

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">🚨 {t('dashboard.safetyAlerts', 'Safety Alerts')}</h2>
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-extrabold">
                {t('safety.activeAlerts', 'Active Alerts')}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
              Active coastal hazard advisories and pre-departure marine safety reminders.
            </p>
          </div>
        </div>

        <Link to="/safety" className="shrink-0">
          <span className="inline-flex items-center text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-200 gap-1.5 transition-all">
            <span>View Safety Center</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            severity={alert.severity}
            title={alert.title}
            message={alert.message}
            time={alert.time}
          />
        ))}
      </div>
    </div>
  );
};

export default SafetyAlertsSection;
