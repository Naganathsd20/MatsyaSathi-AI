import React, { useRef, useEffect } from 'react';
import { Bot, Trash2, Sparkles, Loader2 } from 'lucide-react';
import AIMessage from './AIMessage';
import Button from '../Button';

export const AIChatWindow = ({ messages, isThinking, onClearChat }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  return (
    <div className="glass-card rounded-3xl p-4 sm:p-6 border border-cyan-900/40 bg-[#0B253C] space-y-4 flex flex-col justify-between min-h-[420px] max-h-[600px] shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">💬 Active Conversation Session</h2>
            <span className="text-[10px] text-slate-400 font-medium">Session History • {messages.length} Messages</span>
          </div>
        </div>

        {messages.length > 1 && (
          <Button size="sm" variant="outline" onClick={onClearChat} icon={Trash2}>
            Clear Session
          </Button>
        )}
      </div>

      {/* Messages Scroll Area */}
      <div className="overflow-y-auto space-y-3 pr-1 scrollbar-thin flex-1 min-h-[300px]">
        {messages.map((msg) => (
          <AIMessage key={msg.id} message={msg} />
        ))}

        {isThinking && (
          <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-[#071F33] border border-cyan-500/40 text-xs font-bold text-cyan-300 w-fit shadow-md">
            <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
            <span>MatsyaSathi AI is analyzing marine telemetry & generating recommendation...</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default AIChatWindow;
