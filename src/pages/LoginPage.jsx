import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Anchor,
  User,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  AlertTriangle
} from 'lucide-react';
import Button from '../components/Button';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, guestLogin } = useAuth();
  const { t } = useLanguage();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Form error state
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!identifier.trim()) {
      newErrors.identifier = 'Please enter your email or mobile number.';
    }
    if (!password) {
      newErrors.password = 'Please enter your password.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const result = login(identifier, password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setErrors({ auth: result.error });
      }
    }
  };

  const handleGuestLogin = () => {
    guestLogin();
    navigate('/dashboard');
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

        <Link to="/" className="text-xs sm:text-sm font-bold text-slate-300 hover:text-cyan-300 transition-colors">
          ← Back to Home
        </Link>
      </header>

      {/* Main Authentication Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10 my-auto">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Panel: Decorative Coastal Intelligence Showcase (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 rounded-3xl bg-[#071F33] border border-cyan-900/40 p-8 flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-extrabold">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Maritime Operations</span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-white tracking-tight leading-snug">
                  Safer Seas.<br />
                  Smarter Fishing.<br />
                  <span className="ocean-gradient-text">Better Livelihoods.</span>
                </h2>
                <p className="text-xs text-slate-300 font-medium mt-3 leading-relaxed">
                  Real-time sea telemetry, predictive zone mapping, and market auction insights tailored for coastal fishers.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Weather & Sea Intelligence</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Fishing Zone Recommendations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Maritime Safety Alerts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Catch & Market Insights</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium">
              Trusted decision support platform for coastal Karnataka fishermen.
            </div>
          </div>

          {/* Right Panel: Login Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B253C] border border-cyan-900/40 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              {/* Card Header */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {t('auth.welcomeBack')}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  {t('auth.loginSubtitle')}
                </p>
              </div>

              {errors.auth && (
                <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{errors.auth}</span>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Identifier Input */}
                <div className="space-y-1.5">
                  <label htmlFor="identifier" className="text-xs font-extrabold text-[#F8FAFC] block">
                    {t('auth.email')} / {t('auth.mobile')} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="identifier"
                      type="text"
                      value={identifier}
                      onChange={(e) => {
                        setIdentifier(e.target.value);
                        if (errors.identifier) setErrors(prev => ({ ...prev, identifier: null }));
                      }}
                      placeholder="e.g. skipper@matsyasathi.in or 9876543210"
                      className={`w-full bg-[#071F33] text-xs sm:text-sm font-medium text-[#F8FAFC] placeholder-[#94A3B8] pl-10 pr-4 py-3 rounded-xl border ${
                        errors.identifier ? 'border-rose-500 ring-1 ring-rose-500' : 'border-cyan-900/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                      } focus:outline-none transition-all h-11`}
                    />
                  </div>
                  {errors.identifier && (
                    <p className="text-xs text-rose-400 font-bold mt-1 flex items-center gap-1">
                      ⚠️ {errors.identifier}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-xs font-extrabold text-[#F8FAFC] block">
                      {t('auth.password')} <span className="text-rose-400">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => alert('Password reset link sent to registered phone/email.')}
                      className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {t('auth.forgotPassword')}
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors(prev => ({ ...prev, password: null }));
                      }}
                      placeholder="Enter minimum 8 characters"
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
                    <p className="text-xs text-rose-400 font-bold mt-1 flex items-center gap-1">
                      ⚠️ {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#071F33] border-cyan-900/60 text-cyan-500 focus:ring-cyan-400 cursor-pointer"
                  />
                  <label htmlFor="rememberMe" className="text-xs text-slate-300 font-medium cursor-pointer select-none">
                    {t('auth.rememberMe')}
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="space-y-2.5 pt-2">
                  <Button type="submit" size="lg" className="w-full h-11 text-sm font-bold shadow-md">
                    {t('auth.signInBtn')}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleGuestLogin}
                    className="w-full h-11 text-sm font-bold"
                  >
                    {t('auth.guestBtn')}
                  </Button>
                </div>
              </form>
            </div>

            {/* Account Switch Footer */}
            <div className="pt-4 border-t border-cyan-900/30 text-center text-xs text-slate-300 font-medium">
              {t('auth.noAccount')}{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-bold underline transition-colors">
                {t('auth.createAccount')}
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

export default LoginPage;
