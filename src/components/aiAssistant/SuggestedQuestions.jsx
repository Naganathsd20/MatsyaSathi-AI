import React from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';

export const SuggestedQuestions = ({ questions, onSelectQuestion, disabled }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>Suggested Questions:</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {questions.map((q, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => onSelectQuestion(q)}
            className="px-3.5 py-1.5 rounded-xl bg-[#0B253C] hover:bg-[#0E2F4C] text-slate-200 hover:text-white border border-cyan-900/40 hover:border-cyan-400/50 text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer disabled:opacity-50 shrink-0 focus:outline-none shadow-md"
          >
            💬 {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
