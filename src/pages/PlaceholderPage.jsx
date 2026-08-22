import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Sparkles, Clock, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlaceholderPage = ({
  title,
  subtitle,
  icon: Icon,
  phaseTag = "Coming in a later phase",
  plannedFeatures = [],
  roadmapPhase = "Phase 2"
}) => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        title={title}
        subtitle={subtitle}
        icon={Icon}
        badgeText={phaseTag}
        actionButton={
          <Link to="/dashboard">
            <Button size="sm" variant="outline" icon={ArrowLeft}>
              Back to Dashboard
            </Button>
          </Link>
        }
      />

      {/* Main Status Container */}
      <div className="glass-card rounded-3xl p-8 border border-sky-500/20 text-center relative overflow-hidden max-w-3xl mx-auto my-8">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-cyan-400 mb-4">
            {Icon && <Icon className="w-10 h-10" />}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 mb-3">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Scheduled for {roadmapPhase}</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            {title} — Under Development
          </h2>

          <p className="text-sm text-slate-300 max-w-lg mb-6 leading-relaxed">
            {subtitle} This module is currently in active architecture design and will be introduced in subsequent phases of MatsyaSathi AI.
          </p>

          <div className="w-full max-w-md bg-slate-900/80 rounded-2xl p-5 border border-slate-800 text-left mb-6">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Planned Feature Highlights
            </h4>
            <ul className="space-y-2.5">
              {plannedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link to="/dashboard">
              <Button size="md" icon={ArrowLeft}>
                Return to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
