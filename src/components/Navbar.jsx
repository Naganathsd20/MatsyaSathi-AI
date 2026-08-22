import React from 'react';
import { Search, Bell, MapPin, Menu, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = ({ onMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-30 glass-panel border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-4 py-3 flex items-center justify-between gap-4">
      {/* Left section: Mobile Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={onMobileMenuOpen}
          aria-label="Open navigation menu"
          className="lg:hidden p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search input placeholder */}
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            placeholder="Search fishing zones, weather advisories, markets..."
            className="w-full bg-slate-900/80 text-xs text-slate-200 placeholder-slate-500 pl-10 pr-4 py-2 rounded-xl border border-slate-800 focus:outline-none cursor-not-allowed opacity-80"
          />
        </div>
      </div>

      {/* Right section: Location Pill, Bell, Profile */}
      <div className="flex items-center gap-3">
        {/* Active Location Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-xs text-sky-200">
          <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="font-medium hidden xs:inline">Mangaluru Coast</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>

        {/* Notifications Icon Button */}
        <button
          aria-label="Notifications"
          className="relative p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-400 rounded-full"></span>
        </button>

        {/* Profile Avatar Pill */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-sky-950">
            <User className="w-4 h-4" />
          </div>
          <div className="hidden md:block text-left">
            <div className="text-xs font-semibold text-slate-200 leading-tight">Captain / Fisher</div>
            <div className="text-[10px] text-slate-400 font-medium">Standard Vessel</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
