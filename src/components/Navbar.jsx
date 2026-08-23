import React from 'react';
import { Search, Bell, MapPin, Menu, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = ({ onMobileMenuOpen }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const displayName = currentUser?.fullName || 'Captain / Fisher';
  const displayVessel = currentUser?.vesselName || 'Vessel Not Configured';
  const displayHarbor = currentUser?.primaryHarbor || currentUser?.coastalRegion || 'Mangaluru Coast';

  return (
    <header className="sticky top-0 z-30 bg-[#051726]/90 backdrop-blur-md border-b border-cyan-900/30 px-4 py-3 flex items-center justify-between gap-4 shadow-md">
      {/* Left section: Mobile Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={onMobileMenuOpen}
          aria-label="Open navigation menu"
          className="lg:hidden p-2 rounded-xl bg-[#0B253C] text-slate-300 hover:text-white border border-cyan-900/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search input placeholder */}
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            placeholder="Search zones, weather, alerts..."
            className="w-full bg-[#0B253C] text-xs sm:text-sm font-medium text-slate-100 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl border border-cyan-900/40 focus:outline-none cursor-not-allowed"
          />
        </div>
      </div>

      {/* Right section: Location Pill, Bell, Profile & Logout */}
      <div className="flex items-center gap-3">
        {/* Active Location Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs sm:text-sm text-cyan-300 font-bold">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="hidden xs:inline">{displayHarbor}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>

        {/* Notifications Icon Button */}
        <button
          aria-label="Notifications"
          className="relative p-2.5 rounded-xl bg-[#0B253C] text-slate-300 hover:text-white border border-cyan-900/40 hover:bg-[#0E2F4C]"
        >
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
        </button>

        {/* Profile Avatar Pill */}
        <Link
          to="/profile"
          className="flex items-center gap-2.5 pl-2 border-l border-cyan-900/40 group hover:opacity-90 transition-opacity cursor-pointer"
          title="View & Edit Profile"
        >
          <div className="w-9 h-9 rounded-xl ocean-gradient-btn flex items-center justify-center text-white font-bold text-xs shadow-xs group-hover:ring-2 group-hover:ring-cyan-400/60 transition-all">
            <User className="w-4.5 h-4.5" />
          </div>
          <div className="hidden md:block text-left">
            <div className="text-xs sm:text-sm font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors leading-tight">{displayName}</div>
            <div className="text-xs text-slate-400 font-medium">{displayVessel}</div>
          </div>
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          title="Sign Out"
          aria-label="Sign Out"
          className="p-2.5 rounded-xl bg-[#0B253C] hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-cyan-900/40 hover:border-rose-500/40 transition-all flex items-center gap-1.5 text-xs font-bold"
        >
          <LogOut className="w-4 h-4 text-rose-400 shrink-0" />
          <span className="hidden lg:inline">Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
