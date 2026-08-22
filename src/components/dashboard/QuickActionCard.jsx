import React from 'react';
import { Link } from 'react-router-dom';
import {
  CloudSun,
  MapPin,
  TrendingUp,
  ShieldAlert,
  ShoppingBag,
  Bot,
  ArrowUpRight
} from 'lucide-react';

export const QuickActionCard = ({ actions }) => {
  const iconMap = {
    CloudSun,
    MapPin,
    TrendingUp,
    ShieldAlert,
    ShoppingBag,
    Bot
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">⚡ Quick Actions</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Instant navigation shortcuts to core MatsyaSathi AI modules.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map((action, idx) => {
          const IconComponent = iconMap[action.icon] || CloudSun;

          return (
            <Link
              key={idx}
              to={action.path}
              className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{action.emoji}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {action.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionCard;
