import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Sparkles, Clock, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlaceholderPage = ({
  title,
  subtitle,
  icon: Icon,
  phaseTag = "Upcoming Feature",
  plannedFeatures = [],
  roadmapPhase = "Upcoming Release"
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
      <div className="glass-card rounded-3xl p-8 border border-sky-100 bg-white text-center relative overflow-hidden max-w-3xl mx-auto my-8 shadow-xs">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-100/50 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 mb-4 shadow-2xs">
            {Icon && <Icon className="w-10 h-10" />}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200 mb-3">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            <span>Scheduled for {roadmapPhase}</span>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
            {title} — Feature Module
          </h2>

          <p className="text-sm text-slate-600 font-medium max-w-lg mb-6 leading-relaxed">
            {subtitle} This module is scheduled for enhancement in upcoming releases of MatsyaSathi AI.
          </p>

          <div className="w-full max-w-md bg-white rounded-2xl p-5 border border-sky-100 text-left mb-6 shadow-2xs">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-700 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Planned Feature Highlights
            </h4>
            <ul className="space-y-2.5">
              {plannedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
