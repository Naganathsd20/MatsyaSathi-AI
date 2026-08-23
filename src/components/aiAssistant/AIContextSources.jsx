import React from 'react';
import { Layers } from 'lucide-react';

export const AIContextSources = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-cyan-900/30 text-[10px]">
      <span className="text-slate-300 font-bold flex items-center gap-1">
        <Layers className="w-3 h-3 text-cyan-400" />
        <span>Connected Intelligence Sources:</span>
      </span>
      {sources.map((src, idx) => (
        <span key={idx} className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono font-bold">
          {src}
        </span>
      ))}
    </div>
  );
};

export default AIContextSources;
