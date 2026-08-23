import React, { useState } from 'react';
import { CheckSquare, Square, ShieldCheck, RefreshCw } from 'lucide-react';
import Button from '../Button';

export const PreDepartureChecklist = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    );
  };

  const completedCount = items.filter(i => i.completed).length;
  const percentage = Math.round((completedCount / items.length) * 100);

  const resetChecklist = () => {
    setItems(prev => prev.map(item => ({ ...item, completed: false })));
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">🛟 Pre-Departure Safety Checklist</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Complete mandatory equipment & safety checks before setting sail.
            </p>
          </div>
        </div>

        <Button size="sm" variant="outline" onClick={resetChecklist} icon={RefreshCw}>
          Reset Checklist
        </Button>
      </div>

      {/* Progress Counter */}
      <div className="p-4 rounded-2xl bg-[#071F33] border border-cyan-900/40 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-white">Checklist Progress</span>
          <span className="font-extrabold text-cyan-300">
            {completedCount} / {items.length} Completed ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden p-0.5 border border-cyan-900/40">
          <div
            className="bg-cyan-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Checklist Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 cursor-pointer focus:outline-none ${
              item.completed
                ? 'bg-emerald-500/15 border-emerald-500/40 font-medium'
                : 'bg-[#0B253C] border-cyan-900/40 hover:border-cyan-400/50'
            }`}
          >
            {item.completed ? (
              <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <Square className="w-5 h-5 text-cyan-400/70 shrink-0 mt-0.5" />
            )}
            <div>
              <span className={`text-xs font-bold block ${item.completed ? 'line-through text-[#E2E8F0]' : 'text-[#F8FAFC]'}`}>
                {item.title}
              </span>
              <span className="text-[11px] text-[#CBD5E1] font-medium mt-0.5 block">{item.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreDepartureChecklist;
