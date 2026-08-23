import React, { useState } from 'react';
import { Star, ThumbsUp, Sparkles, User, Tag } from 'lucide-react';

export const FeaturedFishingTip = ({ tip }) => {
  const [helpfulCount, setHelpfulCount] = useState(tip.helpfulCount);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleHelpful = () => {
    if (hasLiked) {
      setHelpfulCount(prev => prev - 1);
      setHasLiked(false);
    } else {
      setHelpfulCount(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/40 bg-[#2E1F0A]/90 relative overflow-hidden space-y-5 shadow-md text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/30">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#071F33] border border-amber-500/40 text-amber-400 shadow-md">
            <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              {tip.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 tracking-tight">
              {tip.title}
            </h2>
          </div>
        </div>

        <button
          onClick={toggleHelpful}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
            hasLiked
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-xs'
              : 'bg-[#0B253C] text-slate-300 border-amber-500/30 hover:border-amber-400'
          }`}
        >
          <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
          <span>Helpful ({helpfulCount})</span>
        </button>
      </div>

      <p className="text-sm text-slate-200 leading-relaxed font-semibold">
        "{tip.description}"
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-500/30 text-xs">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-cyan-400" />
          <span className="font-extrabold text-white">{tip.author}</span>
          <span className="text-slate-400 font-medium">• {tip.communityRole}</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {tip.tags.map((tg, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold text-[10px]">
              #{tg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedFishingTip;
