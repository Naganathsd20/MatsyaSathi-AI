import React from 'react';
import { Bot, User } from 'lucide-react';
import AIContextSources from './AIContextSources';
import AIResponseCard from './AIResponseCard';

export const AIMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex gap-3 my-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-2xl bg-[#071F33] border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-1 shadow-md">
          <Bot className="w-4 h-4" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 space-y-3 shadow-md ${
          isUser
            ? 'bg-[#0284C7] text-white font-medium rounded-tr-none'
            : 'bg-[#071F33] border border-cyan-900/40 text-slate-100 rounded-tl-none'
        }`}
      >
        <div className={`flex items-center justify-between gap-3 pb-1 text-[10px] ${isUser ? 'text-sky-100' : 'text-slate-400 font-medium'}`}>
          <span className="font-bold flex items-center gap-1">
            {isUser ? (
              <>
                <User className="w-3 h-3 text-sky-100" />
                <span>Captain (You)</span>
              </>
            ) : (
              <>
                <Bot className="w-3 h-3 text-cyan-400" />
                <span>MatsyaSathi AI</span>
              </>
            )}
          </span>
          <span className="font-mono font-bold">{message.time}</span>
        </div>

        {/* Message Text Body */}
        <div className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium ${isUser ? 'text-white' : 'text-slate-200'}`}>
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
        <div className="w-8 h-8 rounded-2xl bg-[#0B253C] border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0 mt-1 shadow-md">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default AIMessage;
