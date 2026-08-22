import React from 'react';
import { Bot, User } from 'lucide-react';
import AIContextSources from './AIContextSources';
import AIResponseCard from './AIResponseCard';

export const AIMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex gap-3 my-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0 mt-1 shadow-sm">
          <Bot className="w-4 h-4" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 space-y-3 ${
          isUser
            ? 'bg-gradient-to-br from-cyan-600/30 via-sky-600/20 to-sky-950/40 border border-cyan-500/40 text-slate-100 rounded-tr-none'
            : 'glass-card border border-slate-800 text-slate-200 rounded-tl-none bg-slate-900/90'
        }`}
      >
        <div className="flex items-center justify-between gap-3 pb-1 text-[10px] text-slate-400">
          <span className="font-bold flex items-center gap-1">
            {isUser ? (
              <>
                <User className="w-3 h-3 text-cyan-400" />
                <span>Captain (You)</span>
              </>
            ) : (
              <>
                <Bot className="w-3 h-3 text-cyan-400" />
                <span>MatsyaSathi AI</span>
              </>
            )}
          </span>
          <span className="font-mono">{message.time}</span>
        </div>

        {/* Message Text Body */}
        <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-200">
          {message.text}
        </div>

        {/* Embedded Structured Response Card */}
        {!isUser && message.cardType && (
          <AIResponseCard cardType={message.cardType} cardData={message.cardData} />
        )}

        {/* Intelligence Sources */}
        {!isUser && message.sources && (
          <AIContextSources sources={message.sources} />
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-1">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default AIMessage;
