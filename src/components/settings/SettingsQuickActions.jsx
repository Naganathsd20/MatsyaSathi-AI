import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  CloudSun,
  MapPin,
  TrendingUp,
  ShieldAlert,
  ShoppingBag,
  Navigation,
  Users,
  Bot,
  ArrowUpRight
} from 'lucide-react';

export const SettingsQuickActions = () => {
  const modules = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Weather & Sea", path: "/weather", icon: CloudSun },
    { name: "Fishing Zones", path: "/zones", icon: MapPin },
    { name: "Catch Prediction", path: "/catch-prediction", icon: TrendingUp },
    { name: "Safety Center", path: "/safety", icon: ShieldAlert },
    { name: "Market & Supply", path: "/market", icon: ShoppingBag },
    { name: "Vessel Planner", path: "/vessel-planner", icon: Navigation },
    { name: "Community & Tips", path: "/community", icon: Users },
    { name: "AI Assistant", path: "/ai-assistant", icon: Bot }
  ];

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">🔗 Platform Navigation Index</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Quick links to inspect all 10 active MatsyaSathi AI modules.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
        {modules.map((m, idx) => {
          const IconComp = m.icon;
          return (
            <Link
              key={idx}
              to={m.path}
              className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                {m.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsQuickActions;
