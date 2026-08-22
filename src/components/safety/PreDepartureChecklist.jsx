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
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">🛟 Pre-Departure Safety Checklist</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Complete mandatory equipment & safety checks before setting sail.
            </p>
          </div>
        </div>

        <Button size="sm" variant="outline" onClick={resetChecklist} icon={RefreshCw}>
          Reset Checklist
        </Button>
      </div>

      {/* Progress Counter */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-slate-200">Checklist Progress</span>
          <span className="font-extrabold text-cyan-300">
            {completedCount} / {items.length} Completed ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <div
            className="bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-400 h-full rounded-full transition-all duration-300"
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
            className={`p-3.5 rounded-2xl border text-left text-xs transition-all flex items-center gap-3 cursor-pointer focus:outline-none ${
              item.completed
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200 font-semibold'
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300'
            }`}
          >
            {item.completed ? (
              <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Square className="w-5 h-5 text-slate-500 shrink-0" />
            )}
            <span className={item.completed ? 'line-through opacity-80' : ''}>{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreDepartureChecklist;
