import React from 'react';
import { Clock, ArrowRight, Anchor, Target, Home } from 'lucide-react';

export const VoyageTimeline = ({ departureTime, arrivalTime, returnTime, travelTimeMins, durationHours, zoneName }) => {
  const steps = [
    { label: "Harbor Departure", time: departureTime, detail: "Mangaluru Jetty", icon: Anchor },
    { label: "Transit to Zone", time: `${travelTimeMins} mins`, detail: `Enroute to ${zoneName}`, icon: ArrowRight },
    { label: "Fishing Window", time: `${arrivalTime} – ${returnTime}`, detail: `${durationHours} hrs active fishing`, icon: Target },
    { label: "Return Transit", time: `${travelTimeMins} mins`, detail: "Return voyage to harbor", icon: ArrowRight },
    { label: "Harbor Arrival", time: returnTime, detail: "Mangaluru Jetty", icon: Home }
  ];

  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-100">⏱️ Voyage Timeline</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-medium">
              Prototype Voyage Schedule
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Estimated timestamps for departure, transit, fishing window, and harbor return.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
        {steps.map((st, idx) => {
          const IconComp = st.icon;
          return (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-center flex flex-col justify-between items-center relative">
              <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-cyan-400">
                <IconComp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-100 block">{st.label}</span>
                <span className="text-xs font-extrabold text-cyan-300 font-mono mt-0.5 block">{st.time}</span>
                <span className="text-[10px] text-slate-400 block mt-1">{st.detail}</span>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-600 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoyageTimeline;
