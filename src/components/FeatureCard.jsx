import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  badgeText = "",
  linkTo = "/dashboard",
  accentColor = "sky"
}) => {
  const iconColors = {
    sky: "text-cyan-400 bg-[#071F33] border-cyan-900/40",
    teal: "text-emerald-400 bg-[#071F33] border-emerald-900/40",
    cyan: "text-cyan-400 bg-[#071F33] border-cyan-900/40",
    amber: "text-amber-400 bg-[#071F33] border-amber-900/40",
    emerald: "text-emerald-400 bg-[#071F33] border-emerald-900/40"
  };

  return (
    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-200 flex flex-col justify-between hover:border-cyan-400/50">
      <div>
        <div className="flex items-center justify-between mb-4">
          {Icon && (
            <div className={`p-3 rounded-2xl border ${iconColors[accentColor] || iconColors.sky} group-hover:scale-105 transition-transform duration-200`}>
              <Icon className="w-6 h-6" />
            </div>
          )}
          {badgeText && (
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-extrabold border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              {badgeText}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-cyan-900/30">
        <Link
          to={linkTo}
          className="inline-flex items-center text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-200 gap-1.5 group-hover:translate-x-1 transition-transform"
        >
          <span>Explore Feature Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
