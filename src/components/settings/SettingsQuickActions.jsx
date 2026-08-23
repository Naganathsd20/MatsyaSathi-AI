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
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl font-bold text-white">🔗 Platform Navigation Index</h2>
          <p className="text-xs text-slate-300 font-medium mt-0.5">
            Quick links to inspect all active MatsyaSathi AI modules.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
        {modules.map((m, idx) => {
          const IconComp = m.icon;
          const title = m.title || m.name || m.label || "Module";
          return (
            <Link
              key={idx}
              to={m.path}
              className="p-3 rounded-2xl bg-[#0B253C] hover:bg-[#0E2F4C] border border-cyan-900/40 hover:border-cyan-400/50 transition-all group flex flex-col justify-between text-left shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <span className="text-xs font-bold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors">
                {title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsQuickActions;
