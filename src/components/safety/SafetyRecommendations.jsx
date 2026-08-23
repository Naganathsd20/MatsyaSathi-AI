import React from 'react';
import { Compass, AlertTriangle, LifeBuoy } from 'lucide-react';

export const SafetyRecommendations = ({ recommendations }) => {
  const icons = [Compass, LifeBuoy, AlertTriangle];

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <h2 className="text-xl font-bold text-white">🛟 Safety Recommendations</h2>
          <p className="text-xs text-slate-300 mt-0.5 font-medium">
            Operational reminders for pre-departure, voyage, and emergency protocols.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((rec, idx) => {
          const IconComp = icons[idx] || Compass;
          return (
            <div key={idx} className="p-4 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-2 shadow-md">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">{rec.stage}</h3>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                "{rec.text}"
              </p>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-cyan-900/30 text-[11px] text-slate-400 font-medium flex items-center justify-between">
        <span>⚠️ These are general safety reminders and do not replace official emergency guidance.</span>
      </div>
    </div>
  );
};

export default SafetyRecommendations;
