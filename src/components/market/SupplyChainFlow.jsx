import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export const SupplyChainFlow = ({ steps }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-100">⛓️ Marine Supply Chain Ecosystem</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium">
              Fisherman Value Creation
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Understanding where market transparency empowers fishermen at coastal landing centers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
        {steps.map((st, idx) => (
          <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center flex flex-col justify-between items-center space-y-2 relative">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center justify-center">
              {st.step}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">{st.title}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{st.desc}</div>
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-600 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyChainFlow;
