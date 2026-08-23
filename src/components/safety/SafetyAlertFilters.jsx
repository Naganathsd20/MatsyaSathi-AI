import React from 'react';
import { Filter } from 'lucide-react';

export const SafetyAlertFilters = ({ activeCategory, onSelectCategory }) => {
  const categories = ["All", "Active", "Caution", "Information"];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-1 text-xs text-slate-300 font-bold mr-1">
        <Filter className="w-3.5 h-3.5 text-cyan-400" />
        <span>Filter Alerts:</span>
      </div>

      {categories.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer focus:outline-none ${
              isSelected
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md'
                : 'bg-[#0B253C] text-slate-300 hover:text-white border border-cyan-900/40'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default SafetyAlertFilters;
