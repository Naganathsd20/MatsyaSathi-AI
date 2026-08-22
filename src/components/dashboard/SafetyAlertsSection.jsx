import React from 'react';
import { ShieldAlert, ArrowRight, Info, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AlertCard from '../AlertCard';

export const SafetyAlertsSection = ({ alerts }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">🚨 Safety Alerts</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/30 font-medium">
                Prototype Alerts
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Demonstration coastal hazard advisories and pre-departure marine safety reminders.
            </p>
          </div>
        </div>

        <Link to="/safety" className="shrink-0">
          <span className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 gap-1.5 transition-all">
            <span>View Safety Center</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
