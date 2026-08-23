import React from 'react';
import { Info, Sparkles, MapPin } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

export const DashboardHeader = ({ headerData }) => {
  const { currentUser } = useAuth();
  const { t } = useLanguage();

  const greetingPrefix = t('dashboard.greeting', 'Good morning');
  const greeting = currentUser?.fullName ? `${greetingPrefix}, ${currentUser.fullName}! 👋` : `${greetingPrefix}, Fisherman! 👋`;
  const locationTag = currentUser?.primaryHarbor ? `📍 ${currentUser.primaryHarbor}` : (currentUser?.coastalRegion ? `📍 ${currentUser.coastalRegion}` : headerData.locationTag);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-cyan-900/30">
      <div>
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            {greeting}
          </h1>
          <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-extrabold shadow-2xs">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            {t('common.liveIntelligence', 'Live Intelligence')}
          </span>
        </div>
        <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
          {t('dashboard.subtitle', headerData.subtitle)}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0B253C] text-xs sm:text-sm text-cyan-300 font-bold border border-cyan-900/40 shadow-xs">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{locationTag}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
