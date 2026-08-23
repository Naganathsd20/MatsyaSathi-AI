import React from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const SafetyTipsCard = () => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 bg-[#0B253C] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#071F33] border border-amber-500/40 text-amber-400 shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">🚨 Marine Safety Center</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
              Safety Advisory Active
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Complete your pre-departure checklist and review coastal hazard advisories.
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

export default SafetyTipsCard;
