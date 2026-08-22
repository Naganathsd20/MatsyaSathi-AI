import React from 'react';
import { Filter } from 'lucide-react';

export const SafetyAlertFilters = ({ activeCategory, onSelectCategory }) => {
  const categories = ["All", "Active", "Caution", "Information"];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold mr-1">
        <Filter className="w-3.5 h-3.5 text-cyan-400" />
        <span>Filter Alerts:</span>
      </div>

      {categories.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer focus:outline-none ${
              isSelected
                ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/40 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
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
