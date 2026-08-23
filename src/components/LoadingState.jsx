import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingState = ({ message = "Loading ocean intelligence data..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-sky-100 shadow-xs text-center">
      <Loader2 className="w-8 h-8 text-sky-600 animate-spin mb-3" />
      <p className="text-sm font-semibold text-slate-800">{message}</p>
    </div>
  );
};

export default LoadingState;
