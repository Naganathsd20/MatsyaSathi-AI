import React, { useState } from 'react';
import { ThumbsUp, User, Clock, MessageSquare } from 'lucide-react';

export const CommunityPostCard = ({ post }) => {
  const [helpfulCount, setHelpfulCount] = useState(post.helpfulCount);
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

  const categoryStyles = {
    "Safety": "bg-rose-500/20 text-rose-300 border-rose-500/40",
    "Weather": "bg-sky-500/20 text-sky-300 border-sky-500/40",
    "Species": "bg-teal-500/20 text-teal-300 border-teal-500/40",
    "Market": "bg-amber-500/20 text-amber-300 border-amber-500/40",
    "Seasonal": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    "Fishing Tips": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
  };

  const badgeStyle = categoryStyles[post.category] || categoryStyles["Fishing Tips"];

  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col justify-between space-y-4">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${badgeStyle}`}>
            {post.category}
          </span>

          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono border border-slate-800">
            {post.badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-100 mt-1 mb-2 leading-snug">
          {post.title}
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          "{post.description}"
        </p>
      </div>

      <div className="pt-3 border-t border-slate-800/80 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 truncate">
            <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-semibold text-slate-200 truncate">{post.author}</span>
          </div>
          <span className="font-mono shrink-0">{post.time}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] text-slate-400">{post.communityRole}</span>

          <button
            onClick={toggleHelpful}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              hasLiked
                ? 'bg-amber-500/30 text-amber-200 border border-amber-400'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
            <span>{helpfulCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostCard;
