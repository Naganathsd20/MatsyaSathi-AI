import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export const AIInput = ({ onSendMessage, isThinking }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || isThinking) return;
    onSendMessage(text.trim());
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask MatsyaSathi AI about weather, zones, catch, safety, markets, or trips..."
        disabled={isThinking}
        className="w-full p-3.5 pr-12 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-xs sm:text-sm text-white font-medium placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 shadow-md transition-all"
      />

      <button
        type="submit"
        disabled={!text.trim() || isThinking}
        className="absolute right-2 p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer focus:outline-none shadow-md"
      >
        {isThinking ? (
          <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
        ) : (
          <Send className="w-4 h-4" />
        )}
      </button>
    </form>
  );
};

export default AIInput;
