import React from 'react';
import { Compass, AlertTriangle, LifeBuoy } from 'lucide-react';

export const SafetyRecommendations = ({ recommendations }) => {
  const icons = [Compass, LifeBuoy, AlertTriangle];

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <h2 className="text-xl font-bold text-slate-100">🛟 Safety Recommendations</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Operational reminders for pre-departure, voyage, and emergency protocols.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((rec, idx) => {
          const IconComp = icons[idx] || Compass;
          return (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-cyan-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider">{rec.stage}</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "{rec.text}"
              </p>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
        <span>⚠️ These are general prototype safety reminders and do not replace official emergency guidance.</span>
      </div>
    </div>
  );
};

export default SafetyRecommendations;
