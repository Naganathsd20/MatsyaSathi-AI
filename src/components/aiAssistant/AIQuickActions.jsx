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
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl font-bold text-white">🔗 Connected Module Quick Navigation</h2>
          <p className="text-xs text-slate-300 font-medium mt-0.5">
            Direct shortcuts to inspect original source dashboards across MatsyaSathi AI.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {actions.map((act, idx) => {
          const IconComp = iconMap[act.icon] || CloudSun;
          const title = act.title || act.name || act.label || "Module";
          const desc = act.description || act.desc || act.subtitle || "";

          return (
            <Link
              key={idx}
              to={act.path}
              className="p-3 rounded-2xl bg-[#0B253C] hover:bg-[#0E2F4C] border border-cyan-900/40 hover:border-cyan-400/50 transition-all group flex flex-col justify-between text-left shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <span className="text-xs font-bold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors block">{title}</span>
              {desc && <span className="text-[10px] text-[#CBD5E1] font-medium block mt-0.5 truncate">{desc}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AIQuickActions;
