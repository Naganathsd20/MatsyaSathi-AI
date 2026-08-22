import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingState = ({ message = "Loading ocean intelligence data..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 glass-panel rounded-2xl border border-slate-800 text-center">
      <Loader2 className="w-8 h-8 text-sky-400 animate-spin mb-3" />
      <p className="text-sm font-medium text-slate-300">{message}</p>
    </div>
  );
};

export default LoadingState;
