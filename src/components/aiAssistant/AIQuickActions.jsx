import React from 'react';
import { Link } from 'react-router-dom';
import {
  CloudSun,
  MapPin,
  TrendingUp,
  ShieldAlert,
  ShoppingBag,
  Navigation,
  Users,
  ArrowUpRight
} from 'lucide-react';

export const AIQuickActions = ({ actions }) => {
  const iconMap = {
    CloudSun,
    MapPin,
    TrendingUp,
    ShieldAlert,
    ShoppingBag,
    Navigation,
    Users
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">🔗 Connected Module Quick Navigation</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Direct shortcuts to inspect original source dashboards across MatsyaSathi AI.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {actions.map((act, idx) => {
          const IconComp = iconMap[act.icon] || CloudSun;

          return (
            <Link
              key={idx}
              to={act.path}
              className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                {act.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AIQuickActions;
