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
      badgeText: "Phase 2 Preview",
      linkTo: "/weather",
      accentColor: "sky"
    },
    {
      title: "Fishing Zone Recommendations",
      description: "AI-derived potential fishing zone (PFZ) insights leveraging sea surface temperature, chlorophyll concentration, and oceanic currents.",
      icon: MapPin,
      badgeText: "Phase 2 Preview",
      linkTo: "/zones",
      accentColor: "teal"
    },
    {
      title: "Safety Alerts & Geo-Fencing",
      description: "Emergency SOS beaconing, automated maritime border proximity alerts, and harsh weather evacuation warnings to keep fishermen safe.",
      icon: ShieldAlert,
      badgeText: "Phase 2 Preview",
      linkTo: "/safety",
      accentColor: "cyan"
    },
    {
      title: "Catch Potential Prediction",
      description: "Data-backed fish movement forecasting to optimize trip duration, reduce empty sea runs, and improve catch efficiency.",
      icon: TrendingUp,
      badgeText: "Phase 3 Preview",
      linkTo: "/catch-prediction",
      accentColor: "emerald"
    },
    {
      title: "Market & Supply Chain",
      description: "Real-time harbor auction rate trends, buyer connection network, and fresh catch valuation tools to maximize trip profitability.",
      icon: ShoppingBag,
      badgeText: "Phase 3 Preview",
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Landing Header */}
      <header className="sticky top-0 z-40 glass-panel border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl ocean-gradient-btn text-white shadow-lg shadow-sky-900/40 group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xl text-slate-100 tracking-tight">MatsyaSathi</span>
                <span className="text-xs px-1.5 py-0.5 rounded font-extrabold bg-sky-500/20 text-cyan-300 border border-sky-400/30">AI</span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <a href="#why-matsyasathi" className="hidden sm:inline-block text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors">
              Why MatsyaSathi?
            </a>
            <a href="#features" className="hidden sm:inline-block text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors">
              Features
            </a>
            <Link to="/dashboard">
              <Button size="sm" icon={ArrowRight} iconPosition="right">
                Launch Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        {/* Decorative Ocean Radial Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Phase 1 Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-cyan-300 border border-sky-500/30 text-xs font-semibold mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>MatsyaSathi AI — Phase 1 Project Foundation</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 mb-4">
            MatsyaSathi <span className="ocean-gradient-text">AI</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-sky-200 tracking-tight mb-6">
            “Safer Seas. Smarter Fishing. Better Livelihoods.”
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            An AI-powered smart companion helping small-scale fishermen make safer and smarter decisions at sea with sea-condition intelligence, safety alerts, and trip planning support.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <a href="#features" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </a>
          </div>

          {/* Ocean Graphic Display Card */}
          <div className="glass-card rounded-3xl p-6 md:p-8 border border-sky-500/20 max-w-4xl mx-auto relative overflow-hidden text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-400 font-mono pl-2">matsyasathi-telemetry-ui // preview</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                Coastal Status: Safe Operations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                  <CloudSun className="w-4 h-4 text-sky-400" />
                  <span>Sea Swells & Wind</span>
                </div>
                <div className="text-base font-bold text-slate-100">1.4m Swells • 14 Knots</div>
                <div className="text-[11px] text-teal-400 mt-1">Favorable for morning trip</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Nearest High Potential Zone</span>
                </div>
                <div className="text-base font-bold text-slate-100">Sector B-4 (12 NM)</div>
                <div className="text-[11px] text-sky-400 mt-1">Target: Pelagic Mackerel</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                  <Radio className="w-4 h-4 text-emerald-400" />
                  <span>Border & SOS Safeguard</span>
                </div>
                <div className="text-base font-bold text-slate-100">3.5 NM Buffer Safe</div>
                <div className="text-[11px] text-emerald-400 mt-1">Vessel Radio Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 px-6 border-t border-slate-800/80 relative bg-slate-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-2 block">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-4">
              Comprehensive Support for Every Fishing Voyage
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
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
      <section id="why-matsyasathi" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                Mission & Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Why MatsyaSathi AI?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Small-scale fishermen face significant operational risks—ranging from unpredictable sea weather and dangerous high waves to accidental international border breaches and low market prices.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                MatsyaSathi AI brings critical ocean intelligence and decision-support tools together into one accessible, intuitive platform designed specifically for fishermen and harbor communities.
              </p>

              <div className="pt-2">
                <Link to="/dashboard">
                  <Button icon={ArrowRight} iconPosition="right">
                    Open Dashboard Shell
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div key={idx} className="glass-card p-5 rounded-2xl border border-slate-800">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-cyan-400 border border-sky-500/20 w-fit mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 mb-1.5">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 py-10 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl ocean-gradient-btn text-white">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base text-slate-100">MatsyaSathi AI</div>
              <p className="text-xs text-slate-400">“Safer Seas. Smarter Fishing. Better Livelihoods.”</p>
            </div>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right">
            <p>Phase 1 Foundation Release • Hackathon Edition</p>
            <p className="mt-1 text-slate-600">Built with React, Vite, Tailwind CSS, & Lucide Icons</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
