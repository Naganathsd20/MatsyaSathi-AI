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
    "Safety": "bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold",
    "Weather": "bg-sky-500/20 text-sky-300 border-sky-500/40 font-bold",
    "Species": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold",
    "Market": "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold",
    "Seasonal": "bg-teal-500/20 text-teal-300 border-teal-500/40 font-bold",
    "Fishing Tips": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold"
  };

  const badgeStyle = categoryStyles[post.category] || categoryStyles["Fishing Tips"];

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 bg-[#0B253C] flex flex-col justify-between space-y-4 shadow-md">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] border ${badgeStyle}`}>
            {post.category}
          </span>

          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono font-bold border border-cyan-500/30">
            {post.badge}
          </span>
        </div>

        <h3 className="text-base font-extrabold text-white mt-1 mb-2 leading-snug">
          {post.title}
        </h3>

        <p className="text-xs text-slate-200 leading-relaxed font-medium">
          "{post.description}"
        </p>
      </div>

      <div className="pt-3 border-t border-cyan-900/30 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5 truncate">
            <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-bold text-white truncate">{post.author}</span>
          </div>
          <span className="font-mono font-bold text-slate-400 shrink-0">{post.time}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] text-slate-400 font-semibold">{post.communityRole}</span>

          <button
            onClick={toggleHelpful}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              hasLiked
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-[#071F33] text-slate-300 hover:text-white border border-cyan-900/40'
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
