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
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out navigation drawer */}
      <aside className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#051726] border-r border-cyan-900/40 shadow-2xl flex flex-col justify-between z-50 text-slate-100">
        <div>
          {/* Drawer Header */}
          <div className="p-4 border-b border-cyan-900/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg ocean-gradient-btn text-white">
                <Anchor className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-white">MatsyaSathi AI</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1.5 rounded-lg bg-[#0B253C] text-slate-300 hover:text-white border border-cyan-900/40"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="p-3 space-y-1.5 overflow-y-auto max-h-[calc(100vh-160px)]">
            <div className="px-3.5 py-1.5 text-xs uppercase font-extrabold tracking-wider text-slate-500">
              Quick Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border-l-2 border-cyan-400 font-bold shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.name}</span>
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-cyan-900/30 bg-[#071F33]">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>MatsyaSathi AI • Marine Operations</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileNavigation;
