import React from 'react';
import { Filter } from 'lucide-react';

export const CommunityCategoryFilters = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
      <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold mr-1 shrink-0">
        <Filter className="w-3.5 h-3.5 text-cyan-400" />
        <span>Topics:</span>
      </div>

      {categories.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap focus:outline-none shrink-0 ${
              isSelected
                ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/40 ring-1 ring-sky-500/30 shadow-sm'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-850'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default CommunityCategoryFilters;
