import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { safetyData } from '../../data/safetyData';

export const SafetyIntegrationCard = () => {
  const s = safetyData.overallStatus;

  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-100">🛡️ Marine Safety Readiness</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
              {s.status}
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            "{s.message}"
          </p>
        </div>
      </div>

      <Link to="/safety" className="shrink-0">
        <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
          View Safety Center
        </Button>
      </Link>
    </div>
  );
};

export default SafetyIntegrationCard;
