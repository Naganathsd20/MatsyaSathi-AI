import React from 'react';
import { Filter } from 'lucide-react';

export const CommunityCategoryFilters = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
      <div className="flex items-center gap-1 text-xs text-slate-300 font-bold mr-1 shrink-0">
        <Filter className="w-3.5 h-3.5 text-cyan-400" />
        <span>Topics:</span>
      </div>

      {categories.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap focus:outline-none shrink-0 ${
              isSelected
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 ring-1 ring-cyan-400 shadow-md'
                : 'bg-[#0B253C] text-slate-300 hover:text-white border border-cyan-900/40 hover:bg-[#0E2F4C]'
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
