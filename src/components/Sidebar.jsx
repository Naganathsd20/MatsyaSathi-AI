import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { Anchor, Waves, ShieldCheck } from 'lucide-react';

export const Sidebar = ({ className = "" }) => {
  const location = useLocation();

  return (
    <aside className={`w-64 glass-panel border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0 bg-slate-950/90 ${className}`}>
      {/* Brand Header */}
      <div>
        <div className="p-5 border-b border-slate-800/80">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl ocean-gradient-btn text-white shadow-lg shadow-sky-900/40 group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-100 tracking-tight">MatsyaSathi</span>
                <span className="text-xs px-1.5 py-0.5 rounded font-extrabold bg-sky-500/20 text-cyan-300 border border-sky-400/30">AI</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">Safer Seas. Smarter Fishing.</p>
            </div>
          </NavLink>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-wider text-slate-500">
            Navigation Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30 font-semibold shadow-sm shadow-sky-950/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="truncate">{item.name}</span>
                </div>

                {item.phase && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/80 font-normal shrink-0">
                    {item.phase}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer info badge */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-900/60">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-medium text-slate-300">Phase 1 Foundation</span>
        </div>
        <p className="text-[11px] text-slate-500">
          UI Shell & Routes active. Features coming in subsequent phases.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
