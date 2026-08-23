import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { coastalRegionHarbors, coastalRegionsList } from '../data/coastalData';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Anchor,
  Ship,
  ShieldCheck,
  Edit3,
  Save,
  X,
  ArrowLeft,
  LogOut,
  Globe,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import Button from '../components/Button';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, updateProfile, logout } = useAuth();
  const { t, language, setLanguage } = useLanguage();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Form State initialized from currentUser
  const [formData, setFormData] = useState({
    fullName: currentUser?.fullName || '',
    mobile: currentUser?.mobile || '',
    email: currentUser?.email || '',
    coastalRegion: currentUser?.coastalRegion || 'Karnataka Coast',
    primaryHarbor: currentUser?.primaryHarbor || coastalRegionHarbors['Karnataka Coast'][0],
    vesselName: currentUser?.vesselName || 'Vessel Not Configured',
    registrationNo: currentUser?.registrationNo || 'Registration Pending',
    vesselType: currentUser?.vesselType || 'Coastal Fishing Boat',
    engineHp: currentUser?.engineHp || 'Engine Not Configured',
    fuelCapacityL: currentUser?.fuelCapacityL || 100,
    crewCapacity: currentUser?.crewCapacity || 4
  });

  // Sync state if currentUser changes externally
  useEffect(() => {
    if (currentUser) {
      const userRegion = currentUser.coastalRegion || 'Karnataka Coast';
      const validHarbors = coastalRegionHarbors[userRegion] || coastalRegionHarbors['Karnataka Coast'];
      const userHarbor = validHarbors.includes(currentUser.primaryHarbor)
        ? currentUser.primaryHarbor
        : validHarbors[0];

      setFormData({
        fullName: currentUser.fullName || '',
        mobile: currentUser.mobile || '',
        email: currentUser.email || '',
        coastalRegion: userRegion,
        primaryHarbor: userHarbor,
        vesselName: currentUser.vesselName || 'Vessel Not Configured',
        registrationNo: currentUser.registrationNo || 'Registration Pending',
        vesselType: currentUser.vesselType || 'Coastal Fishing Boat',
        engineHp: currentUser.engineHp || 'Engine Not Configured',
        fuelCapacityL: currentUser.fuelCapacityL || 100,
        crewCapacity: currentUser.crewCapacity || 4
      });
    }
  }, [currentUser]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegionChange = (newRegion) => {
    const harborsForRegion = coastalRegionHarbors[newRegion] || [];
    setFormData((prev) => ({
      ...prev,
      coastalRegion: newRegion,
      primaryHarbor: harborsForRegion[0] || prev.primaryHarbor
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsSaved(true);
    setIsEditing(false);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* Navigation & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cyan-900/30">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Link
              to="/dashboard"
              className="p-2 rounded-xl bg-[#0B253C] text-slate-300 hover:text-white border border-cyan-900/40 hover:border-cyan-400/50 transition-all"
              title={t('profile.backToDashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              👤 {t('profile.title')}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-medium ml-10">
            {t('profile.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-3 ml-10 sm:ml-0">
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? 'outline' : 'primary'}
            size="md"
            icon={isEditing ? X : Edit3}
          >
            {isEditing ? t('profile.cancelEdit') : t('profile.editProfile')}
          </Button>

          <Link to="/dashboard">
            <Button size="md" variant="outline">
              ← {t('profile.backToDashboard')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Success Alert Banner */}
      {isSaved && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>{t('common.saved')} Your profile changes have been saved across MatsyaSathi AI.</span>
          </div>
        </div>
      )}

      {/* Profile Overview Header Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-900/40 shadow-xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative overflow-hidden">
        {/* Glow Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl ocean-gradient-btn flex items-center justify-center text-white shadow-xl border border-cyan-400/40 shrink-0">
            <User className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-3 justify-center sm:justify-start flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {currentUser?.fullName || 'Captain / Fisher'}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{currentUser?.isGuest ? 'Guest Session' : t('profile.activeSkipper')}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium pt-1 justify-center sm:justify-start">
              <div className="flex items-center gap-1.5 text-cyan-300 font-extrabold">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{currentUser?.mobile || 'N/A'}</span>
              </div>
              {currentUser?.email && (
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{currentUser.email}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Anchor className="w-4 h-4 text-amber-400" />
                <span>{currentUser?.primaryHarbor || 'Mangaluru Old Port'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vessel Tag */}
        <div className="z-10 p-4 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-right space-y-1 w-full md:w-auto">
          <div className="text-xs text-slate-400 uppercase tracking-wider font-extrabold">{t('profile.vesselName')}</div>
          <div className="text-lg font-black text-white flex items-center justify-end gap-2">
            <Ship className="w-5 h-5 text-cyan-400" />
            <span>{currentUser?.vesselName || 'Vessel Not Configured'}</span>
          </div>
          <div className="text-xs text-cyan-300 font-bold">
            {currentUser?.registrationNo ? `Reg: ${currentUser.registrationNo}` : 'Registration Pending'}
          </div>
        </div>
      </div>

      {/* Main Profile Grid: View / Edit Form */}
      {isEditing ? (
        /* Edit Profile Form */
        <form onSubmit={handleSave} className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-400/40 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-cyan-900/30">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-cyan-400" />
              <span>{t('profile.editProfile')}</span>
            </h3>
            <span className="text-xs text-slate-400 font-medium">Update your profile parameters persistently.</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.fullName')} *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.mobile')} *</label>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={(e) => handleChange('mobile', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.email')}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              />
            </div>

            {/* Coastal Region */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.region')} *</label>
              <select
                value={formData.coastalRegion}
                onChange={(e) => handleRegionChange(e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              >
                {coastalRegionsList.map((r) => (
                  <option key={r} value={r} className="bg-[#051726]">
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Primary Harbor */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.harbor')} *</label>
              <select
                value={formData.primaryHarbor}
                onChange={(e) => handleChange('primaryHarbor', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              >
                {(coastalRegionHarbors[formData.coastalRegion] || []).map((h) => (
                  <option key={h} value={h} className="bg-[#051726]">
                    {h}
                  </option>
                ))}
              </select>
            </div>

            {/* Vessel Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.vesselName')}</label>
              <input
                type="text"
                value={formData.vesselName}
                onChange={(e) => handleChange('vesselName', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              />
            </div>

            {/* Registration Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.registrationNo')}</label>
              <input
                type="text"
                value={formData.registrationNo}
                onChange={(e) => handleChange('registrationNo', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              />
            </div>

            {/* Vessel Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.vesselType')}</label>
              <input
                type="text"
                value={formData.vesselType}
                onChange={(e) => handleChange('vesselType', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              />
            </div>

            {/* Engine Power */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-[#F8FAFC] block">{t('profile.engineHp')}</label>
              <input
                type="text"
                value={formData.engineHp}
                onChange={(e) => handleChange('engineHp', e.target.value)}
                className="w-full bg-[#071F33] text-sm font-bold text-[#F8FAFC] px-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:outline-none h-11"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-cyan-900/30">
            <Button type="submit" size="lg" icon={Save} className="font-bold">
              {t('profile.saveProfile')}
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => setIsEditing(false)}>
              {t('profile.cancelEdit')}
            </Button>
          </div>
        </form>
      ) : (
        /* View Mode Grid */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Fisher Information */}
          <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
            <div className="flex items-center gap-3 pb-3 border-b border-cyan-900/30">
              <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-white">{t('profile.fisherInfo')}</h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm font-medium">
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.fullName')}:</span>
                <span className="font-extrabold text-white">{currentUser?.fullName || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.mobile')}:</span>
                <span className="font-extrabold text-cyan-300">{currentUser?.mobile || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.email')}:</span>
                <span className="font-extrabold text-white">{currentUser?.email || 'Not Provided'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.region')}:</span>
                <span className="font-extrabold text-white">{currentUser?.coastalRegion || 'Karnataka Coast'}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">{t('profile.harbor')}:</span>
                <span className="font-extrabold text-amber-300">{currentUser?.primaryHarbor || 'Mangaluru Old Port'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Vessel & Engine Information */}
          <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
            <div className="flex items-center gap-3 pb-3 border-b border-cyan-900/30">
              <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-white">{t('profile.vesselInfo')}</h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm font-medium">
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.vesselName')}:</span>
                <span className="font-extrabold text-white">{currentUser?.vesselName || 'Vessel Not Configured'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.registrationNo')}:</span>
                <span className="font-extrabold text-cyan-300">{currentUser?.registrationNo || 'Registration Pending'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.vesselType')}:</span>
                <span className="font-extrabold text-white">{currentUser?.vesselType || 'Coastal Fishing Boat'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                <span className="text-slate-400">{t('profile.engineHp')}:</span>
                <span className="font-extrabold text-cyan-400">{currentUser?.engineHp || 'Engine Not Configured'}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">{t('profile.fuelCapacity')}:</span>
                <span className="font-extrabold text-white">{currentUser?.fuelCapacityL || 100} Liters</span>
              </div>
            </div>
          </div>

          {/* Card 3: Account & Session Information */}
          <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-cyan-900/30 mb-4">
                <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white">{t('profile.accountInfo')}</h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-medium">
                <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                  <span className="text-slate-400">{t('profile.accountStatus')}:</span>
                  <span className="font-extrabold text-emerald-400">{currentUser?.isGuest ? 'Guest Session' : 'Active Registered Account'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-cyan-900/20">
                  <span className="text-slate-400">{t('profile.preferredLanguage')}:</span>
                  <span className="font-extrabold text-cyan-300 uppercase">{language}</span>
                </div>
                
                {/* Language Switch Buttons */}
                <div className="pt-2">
                  <span className="text-xs text-slate-400 block mb-2 font-bold flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Quick Language Switch</span>
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {['en', 'kn', 'hi'].map((langCode) => (
                      <button
                        key={langCode}
                        onClick={() => setLanguage(langCode)}
                        className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                          language === langCode
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-xs'
                            : 'bg-[#071F33] border-cyan-900/40 text-slate-300 hover:text-white'
                        }`}
                      >
                        {langCode === 'en' ? 'English' : langCode === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Action */}
            <div className="pt-4 border-t border-cyan-900/30">
              <button
                onClick={handleLogout}
                className="w-full py-3 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-300 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <LogOut className="w-4 h-4 text-rose-400" />
                <span>{t('common.signOut')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
