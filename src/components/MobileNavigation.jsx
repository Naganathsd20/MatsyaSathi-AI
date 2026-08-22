import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { Anchor, X, ShieldCheck } from 'lucide-react';

export const MobileNavigation = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close mobile navigation drawer on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Dark backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out navigation drawer */}
      <aside className="fixed inset-y-0 left-0 max-w-xs w-full bg-slate-950 border-r border-slate-800 shadow-2xl flex flex-col justify-between z-50">
        <div>
          {/* Drawer Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg ocean-gradient-btn text-white">
                <Anchor className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-slate-100">MatsyaSathi AI</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-160px)]">
            <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Quick Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.phase && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 shrink-0">
                      {item.phase}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Phase 1 Project Foundation</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileNavigation;
