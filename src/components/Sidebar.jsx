import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { Anchor, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export const Sidebar = ({ className = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const vesselName = currentUser?.vesselName || 'Vessel Not Configured';
  const regNo = currentUser?.registrationNo ? `Reg: ${currentUser.registrationNo}` : 'Registration Pending';
  const vesselType = currentUser?.vesselType || 'Coastal Fishing Boat';
  const engineHp = currentUser?.engineHp || 'Engine Not Configured';

  return (
    <aside className={`w-64 bg-[#051726]/95 backdrop-blur-md border-r border-cyan-900/30 flex flex-col justify-between h-screen sticky top-0 shadow-xl ${className}`}>
      {/* Brand Header */}
      <div>
        <div className="p-5 border-b border-cyan-900/30">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl ocean-gradient-btn text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-white tracking-tight">{t('common.appName')}</span>
                <span className="text-xs px-2 py-0.5 rounded-md font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">AI</span>
              </div>
              <p className="text-xs text-slate-400 font-medium tracking-wide">{t('common.tagline')}</p>
            </div>
          </NavLink>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]">
          <div className="px-3.5 py-1.5 text-xs uppercase font-extrabold tracking-wider text-slate-500">
            {t('nav.menuTitle')}
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const displayName = item.key ? t(`nav.${item.key}`, item.name) : item.name;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border-l-2 border-cyan-400 font-bold shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="truncate">{displayName}</span>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Compact Vessel Profile Card & Logout */}
      <div className="p-3 border-t border-cyan-900/30 bg-[#071F33]/80 space-y-2">
        <NavLink
          to="/profile"
          className="block p-3 rounded-xl bg-[#0B253C] hover:bg-[#0E2F4C] border border-cyan-900/40 hover:border-cyan-400/50 space-y-1 transition-all group cursor-pointer"
          title="View & Edit Profile"
        >
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-white group-hover:text-cyan-300 transition-colors truncate max-w-[120px]">⛵ {vesselName}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 shrink-0">Active</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium truncate">{regNo}</p>
          <div className="text-[11px] text-slate-400 flex justify-between pt-1 border-t border-cyan-900/20">
            <span className="truncate max-w-[90px]">{vesselType}</span>
            <span className="text-cyan-400 font-bold shrink-0">{engineHp}</span>
          </div>
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full py-2 px-3 rounded-xl bg-[#0B253C] hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-cyan-900/40 hover:border-rose-500/40 transition-all flex items-center justify-center gap-2 text-xs font-bold"
        >
          <LogOut className="w-4 h-4 text-rose-400" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
