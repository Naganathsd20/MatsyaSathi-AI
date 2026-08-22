import React from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';

export const SuggestedQuestions = ({ questions, onSelectQuestion, disabled }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>Suggested Questions:</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {questions.map((q, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => onSelectQuestion(q)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer disabled:opacity-50 shrink-0 focus:outline-none"
          >
            💬 {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
