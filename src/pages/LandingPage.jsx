import React from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  CloudSun,
  MapPin,
  ShieldAlert,
  TrendingUp,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Radio,
  BarChart3,
  CheckCircle2,
  Users
} from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';

export const LandingPage = () => {
  const landingFeatures = [
    {
      title: "Weather & Sea Intelligence",
      description: "Hyper-local ocean condition advisories, wave heights, wind direction, tide calendars, and storm alerts tailored for coastal fishing boats.",
      icon: CloudSun,
      badgeText: "Weather Intelligence",
      linkTo: "/weather",
      accentColor: "sky"
    },
    {
      title: "Fishing Zone Recommendations",
      description: "AI-derived potential fishing zone (PFZ) insights leveraging sea surface temperature, chlorophyll concentration, and oceanic currents.",
      icon: MapPin,
      badgeText: "PFZ Analytics",
      linkTo: "/zones",
      accentColor: "teal"
    },
    {
      title: "Safety Alerts & Geo-Fencing",
      description: "Emergency SOS beaconing, automated maritime border proximity alerts, and harsh weather evacuation warnings to keep fishermen safe.",
      icon: ShieldAlert,
      badgeText: "Maritime Safety",
      linkTo: "/safety",
      accentColor: "cyan"
    },
    {
      title: "Catch Potential Prediction",
      description: "Data-backed fish movement forecasting to optimize trip duration, reduce empty sea runs, and improve catch efficiency.",
      icon: TrendingUp,
      badgeText: "Species Forecasting",
      linkTo: "/catch-prediction",
      accentColor: "emerald"
    },
    {
      title: "Market & Supply Chain",
      description: "Real-time harbor auction rate trends, buyer connection network, and fresh catch valuation tools to maximize trip profitability.",
      icon: ShoppingBag,
      badgeText: "Market Connect",
      linkTo: "/market",
      accentColor: "amber"
    }
  ];

  const whyPillars = [
    {
      title: "Safety-First Architecture",
      description: "Guarding fishermen against unpredictable sea storms and inadvertent maritime border crossings with proactive alarms.",
      icon: ShieldCheck
    },
    {
      title: "Data-Driven Efficiency",
      description: "Eliminating guesswork in ocean voyages by identifying optimal fishing zones and favorable weather windows.",
      icon: Compass
    },
    {
      title: "Enhanced Livelihoods",
      description: "Connecting catch directly with market intelligence to ensure fair prices and reduced operational fuel costs.",
      icon: BarChart3
    },
    {
      title: "Built for Coastal Fishermen",
      description: "Designed with high accessibility, multilingual support, touch-friendly UI, and offline-capable architecture.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-[#03111F] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#082238] via-[#03111F] to-[#010A14] text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-500 selection:text-white">
      {/* Landing Header */}
      <header className="sticky top-0 z-40 bg-[#051726]/90 backdrop-blur-md border-b border-cyan-900/30 px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl ocean-gradient-btn text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-white tracking-tight">MatsyaSathi</span>
                <span className="text-xs px-2 py-0.5 rounded-md font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">AI</span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <a href="#why-matsyasathi" className="hidden sm:inline-block text-sm font-bold text-slate-300 hover:text-cyan-300 transition-colors">
              Why MatsyaSathi?
            </a>
            <a href="#features" className="hidden sm:inline-block text-sm font-bold text-slate-300 hover:text-cyan-300 transition-colors">
              Features
            </a>
            <Link to="/login" className="hidden sm:inline-block text-sm font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors">
              Sign In
            </Link>
            <Link to="/dashboard">
              <Button size="md" icon={ArrowRight} iconPosition="right">
                Launch Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        {/* Decorative Ocean Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-sky-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Feature Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-extrabold mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI-Powered Coastal Fishing Intelligence</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            MatsyaSathi <span className="ocean-gradient-text">AI</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-black text-cyan-400 tracking-tight mb-6">
            “Safer Seas. Smarter Fishing. Better Livelihoods.”
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
            An AI-powered smart companion helping small-scale fishermen make safer and smarter decisions at sea with sea-condition intelligence, safety alerts, and trip planning support.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/login" className="w-full sm:w-auto">
              <Button size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto text-base">
                Get Started
              </Button>
            </Link>
            <a href="#features" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                Explore Features
              </Button>
            </a>
          </div>

          {/* Ocean Graphic Display Card */}
          <div className="bg-[#071F33] rounded-3xl p-6 md:p-8 border border-cyan-900/40 max-w-4xl mx-auto relative overflow-hidden text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-cyan-900/30 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-400 font-mono font-bold pl-2">matsyasathi-telemetry-ui // preview</span>
              </div>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                Coastal Status: Safe Operations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#0B253C] border border-cyan-900/40">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5 font-bold">
                  <CloudSun className="w-4 h-4 text-cyan-400" />
                  <span>Sea Swells & Wind</span>
                </div>
                <div className="text-base font-extrabold text-white">1.4m Swells • 14 Knots</div>
                <div className="text-xs text-emerald-400 font-bold mt-1">Favorable for morning trip</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B253C] border border-cyan-900/40">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Nearest High Potential Zone</span>
                </div>
                <div className="text-base font-extrabold text-white">Sector B-4 (12 NM)</div>
                <div className="text-xs text-cyan-300 font-bold mt-1">Target: Pelagic Mackerel</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B253C] border border-cyan-900/40">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5 font-bold">
                  <Radio className="w-4 h-4 text-emerald-400" />
                  <span>Border & SOS Safeguard</span>
                </div>
                <div className="text-base font-extrabold text-white">3.5 NM Buffer Safe</div>
                <div className="text-xs text-emerald-400 font-bold mt-1">Vessel Radio Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 px-6 border-t border-cyan-900/30 relative bg-[#051726]/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-2 block">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Comprehensive Support for Every Fishing Voyage
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              MatsyaSathi AI integrates essential ocean data, safety warnings, and market connections into a unified dashboard tailored for small-scale fishermen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landingFeatures.map((feat, idx) => (
              <FeatureCard key={idx} {...feat} />
            ))}
          </div>
        </div>
      </section>

      {/* "Why MatsyaSathi?" Section */}
      <section id="why-matsyasathi" className="py-20 px-6 relative bg-[#03111F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                Mission & Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why MatsyaSathi AI?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                Small-scale fishermen face significant operational risks—ranging from unpredictable sea weather and dangerous high waves to accidental international border breaches and low market prices.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                MatsyaSathi AI brings critical ocean intelligence and decision-support tools together into one accessible, intuitive platform designed specifically for fishermen and harbor communities.
              </p>

              <div className="pt-2">
                <Link to="/dashboard">
                  <Button icon={ArrowRight} iconPosition="right">
                    Explore Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div key={idx} className="bg-[#0B253C] p-5 rounded-2xl border border-cyan-900/40 shadow-md">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 w-fit mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{pillar.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-cyan-900/30 py-10 px-6 bg-[#051726]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl ocean-gradient-btn text-white">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base text-white">MatsyaSathi AI</div>
              <p className="text-xs text-slate-400">“Safer Seas. Smarter Fishing. Better Livelihoods.”</p>
            </div>
          </div>

          <div className="text-xs text-slate-400 text-center md:text-right">
            <p>© MatsyaSathi AI • All Rights Reserved</p>
            <p className="mt-1 text-slate-500">Coastal Fishing & Marine Intelligence Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
