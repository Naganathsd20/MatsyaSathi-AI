import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { coastalRegionHarbors, coastalRegionsList } from '../data/coastalData';
import {
  Anchor,
  User,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Ship,
  CheckCircle2,
  Compass,
  AlertTriangle
} from 'lucide-react';
import Button from '../components/Button';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [region, setRegion] = useState('Karnataka Coast');
  const [harbor, setHarbor] = useState(coastalRegionHarbors['Karnataka Coast'][0]);
  const [vesselName, setVesselName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Form error state
  const [errors, setErrors] = useState({});

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
    const harborsForRegion = coastalRegionHarbors[newRegion] || [];
    if (harborsForRegion.length > 0) {
      setHarbor(harborsForRegion[0]);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number.';
    } else if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Please enter a password.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must contain at least 8 characters.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const result = signup({
        fullName,
        mobile,
        email,
        region,
        harbor,
        vesselName,
        password
      });

      if (result.success) {
        navigate('/dashboard');
      } else {
        setErrors({ auth: result.error });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#03111F] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Ambient Ocean Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-sky-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Header Bar */}
      <header className="px-6 py-5 relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-2xl bg-[#0B253C] border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-all shadow-md">
            <Anchor className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl text-white tracking-tight">MatsyaSathi</span>
              <span className="text-xs px-2 py-0.5 rounded-md font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">AI</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium block -mt-0.5">Coastal Fishing Intelligence</span>
          </div>
        </Link>

        <Link to="/login" className="text-xs sm:text-sm font-bold text-slate-300 hover:text-cyan-300 transition-colors">
          Already registered? <span className="text-cyan-400 underline">Sign In</span>
        </Link>
      </header>

      {/* Main Authentication Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10 my-auto">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Panel: Decorative Maritime Showcase (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 rounded-3xl bg-[#071F33] border border-cyan-900/40 p-8 flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-extrabold">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fisher Registration</span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-white tracking-tight leading-snug">
                  Join Coastal Karnataka's<br />
                  <span className="ocean-gradient-text">Smartest Marine Fleet</span>
                </h2>
                <p className="text-xs text-slate-300 font-medium mt-3 leading-relaxed">
                  Setup your profile with home harbor and vessel specs to receive custom ocean advisories and trip fuel estimates.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom Zone Recommendations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Live Harbor Auction Data</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Pre-Departure Safety Checklist</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Zero-Network Offline Maps</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium">
              Designed specifically for traditional and mechanized vessel operators.
            </div>
          </div>

          {/* Right Panel: Signup Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B253C] border border-cyan-900/40 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              {/* Card Header */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {t('auth.createAccount')}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  {t('auth.signupSubtitle')}
                </p>
              </div>

              {errors.auth && (
                <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{errors.auth}</span>
                </div>
              )}

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="fullName" className="text-xs font-extrabold text-[#F8FAFC] block">
                      {t('auth.fullName')} <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors(prev => ({ ...prev, fullName: null }));
                        }}
                        placeholder="Enter your full name"
                        className={`w-full bg-[#071F33] text-xs sm:text-sm font-medium text-[#F8FAFC] placeholder-[#94A3B8] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                        } focus:outline-none transition-all h-11`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 font-bold mt-1">⚠️ {errors.fullName}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="mobile" className="text-xs font-extrabold text-[#F8FAFC] block">
                      {t('auth.mobile')} <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="mobile"
                        type="tel"
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                          if (errors.mobile) setErrors(prev => ({ ...prev, mobile: null }));
                        }}
                        placeholder="Enter 10-digit mobile number"
                        className={`w-full bg-[#071F33] text-xs sm:text-sm font-medium text-[#F8FAFC] placeholder-[#94A3B8] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.mobile ? 'border-rose-500 ring-1 ring-rose-500' : 'border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                        } focus:outline-none transition-all h-11`}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-xs text-rose-400 font-bold mt-1">⚠️ {errors.mobile}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-extrabold text-[#F8FAFC] block">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => ({ ...prev, email: null }));
                        }}
                        placeholder="e.g. fisher@matsyasathi.in"
                        className={`w-full bg-[#071F33] text-xs sm:text-sm font-medium text-[#F8FAFC] placeholder-[#94A3B8] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                        } focus:outline-none transition-all h-11`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-rose-400 font-bold mt-1">⚠️ {errors.email}</p>
                    )}
                  </div>

                  {/* Coastal Region */}
                  <div className="space-y-1.5">
                    <label htmlFor="region" className="text-xs font-extrabold text-[#F8FAFC] block">
                      {t('auth.region')} <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="region"
                        value={region}
                        onChange={(e) => handleRegionChange(e.target.value)}
                        className="w-full bg-[#071F33] text-xs sm:text-sm font-bold text-[#F8FAFC] pl-10 pr-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all h-11"
                      >
                        {coastalRegionsList.map((r) => (
                          <option key={r} value={r} className="bg-[#051726]">
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Primary Fishing Harbor */}
                  <div className="space-y-1.5">
                    <label htmlFor="harbor" className="text-xs font-extrabold text-[#F8FAFC] block">
                      {t('auth.harbor')} <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Anchor className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="harbor"
                        value={harbor}
                        onChange={(e) => setHarbor(e.target.value)}
                        className="w-full bg-[#071F33] text-xs sm:text-sm font-bold text-[#F8FAFC] pl-10 pr-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all h-11"
                      >
                        {(coastalRegionHarbors[region] || []).map((h) => (
                          <option key={h} value={h} className="bg-[#051726]">
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Vessel Name (Optional) */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="vesselName" className="text-xs font-extrabold text-[#F8FAFC] block">
                      Vessel Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Ship className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="vesselName"
                        type="text"
                        value={vesselName}
                        onChange={(e) => setVesselName(e.target.value)}
                        placeholder="e.g. Matsya-04 or Sagar Kanya"
                        className="w-full bg-[#071F33] text-xs sm:text-sm font-medium text-[#F8FAFC] placeholder-[#94A3B8] pl-10 pr-4 py-3 rounded-xl border border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all h-11"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <label htmlFor="signupPassword" className="text-xs font-extrabold text-[#F8FAFC] block">
                      Password <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="signupPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (errors.password) setErrors(prev => ({ ...prev, password: null }));
                        }}
                        placeholder="Min 8 characters"
                        className={`w-full bg-[#071F33] text-xs sm:text-sm font-medium text-[#F8FAFC] placeholder-[#94A3B8] pl-10 pr-11 py-3 rounded-xl border ${
                          errors.password ? 'border-rose-500 ring-1 ring-rose-500' : 'border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                        } focus:outline-none transition-all h-11`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-xs text-rose-400 font-bold mt-1">⚠️ {errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-1.5">
                    <label htmlFor="confirmPassword" className="text-xs font-extrabold text-[#F8FAFC] block">
                      Confirm Password <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: null }));
                        }}
                        placeholder="Re-enter password"
                        className={`w-full bg-[#071F33] text-xs sm:text-sm font-medium text-[#F8FAFC] placeholder-[#94A3B8] pl-10 pr-4 py-3 rounded-xl border ${
                          errors.confirmPassword ? 'border-rose-500 ring-1 ring-rose-500' : 'border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                        } focus:outline-none transition-all h-11`}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-xs text-rose-400 font-bold mt-1">⚠️ {errors.confirmPassword}</p>
                    )}
                  </div>

                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <Button type="submit" size="lg" className="w-full h-11 text-sm font-bold shadow-md">
                    {t('auth.createAccountBtn')}
                  </Button>
                </div>
              </form>
            </div>

            {/* Account Switch Footer */}
            <div className="pt-4 border-t border-cyan-900/30 text-center text-xs text-slate-300 font-medium">
              {t('auth.hasAccount')}{' '}
              <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-bold underline transition-colors">
                {t('common.signIn')}
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 relative z-10 text-center text-xs text-slate-400 font-medium">
        © 2026 MatsyaSathi AI • Coastal Marine Decision Support System
      </footer>
    </div>
  );
};

export default SignupPage;
