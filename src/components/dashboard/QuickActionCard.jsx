import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
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
  const { t } = useLanguage();

  const iconMap = {
    CloudSun,
    MapPin,
    TrendingUp,
    ShieldAlert,
    ShoppingBag,
    Bot
  };

  const actionKeyMap = {
    '/weather': { title: 'actions.weather', desc: 'actions.weatherDesc' },
    '/zones': { title: 'actions.zones', desc: 'actions.zonesDesc' },
    '/catch-prediction': { title: 'actions.catch', desc: 'actions.catchDesc' },
    '/safety': { title: 'actions.safety', desc: 'actions.safetyDesc' },
    '/market': { title: 'actions.market', desc: 'actions.marketDesc' },
    '/ai-assistant': { title: 'actions.ai', desc: 'actions.aiDesc' }
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">⚡ {t('dashboard.quickActions', 'Quick Actions')}</h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
            {t('dashboard.quickActionsSubtitle', 'Instant navigation shortcuts to core MatsyaSathi AI modules.')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map((action, idx) => {
          const IconComponent = iconMap[action.icon] || CloudSun;
          const keyInfo = actionKeyMap[action.path];

          const title = keyInfo ? t(keyInfo.title, action.title || action.name) : (action.title || action.name || action.label);
          const description = keyInfo ? t(keyInfo.desc, action.description) : (action.description || action.desc || "");

          return (
            <Link
              key={idx}
              to={action.path}
              className="p-4 rounded-2xl bg-[#0B253C] hover:bg-[#0E2F4C] border border-cyan-900/40 hover:border-cyan-400/50 transition-all duration-200 group flex flex-col justify-between shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                  <IconComponent className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors block leading-tight">
                  {title}
                </h3>
                {description && (
                  <p className="text-xs text-[#CBD5E1] font-medium block mt-1 leading-snug">
                    {description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionCard;
