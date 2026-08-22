import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  badgeText = "Phase Preview",
  linkTo = "/dashboard",
  accentColor = "sky"
}) => {
  const accentGradients = {
    sky: "from-sky-500/20 to-blue-600/5 hover:border-sky-500/40",
    teal: "from-teal-500/20 to-emerald-600/5 hover:border-teal-500/40",
    cyan: "from-cyan-500/20 to-sky-600/5 hover:border-cyan-500/40",
    amber: "from-amber-500/20 to-orange-600/5 hover:border-amber-500/40",
    emerald: "from-emerald-500/20 to-teal-600/5 hover:border-emerald-500/40"
  };

  const iconColors = {
    sky: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    teal: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
  };

  return (
    <div className={`glass-card rounded-2xl p-6 relative overflow-hidden group bg-gradient-to-br ${accentGradients[accentColor] || accentGradients.sky} transition-all duration-300 flex flex-col justify-between`}>
      <div>
        <div className="flex items-center justify-between mb-4">
          {Icon && (
            <div className={`p-3 rounded-2xl border ${iconColors[accentColor] || iconColors.sky} group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6" />
            </div>
          )}
          {badgeText && (
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              {badgeText}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/60">
        <Link
          to={linkTo}
          className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 gap-1.5 group-hover:translate-x-1 transition-transform"
        >
          <span>Explore Feature Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
