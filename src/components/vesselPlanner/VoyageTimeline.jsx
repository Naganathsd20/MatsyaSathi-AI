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
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">⏱️ Voyage Timeline</h2>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
              Voyage Schedule
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Estimated timestamps for departure, transit, fishing window, and harbor return.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
        {steps.map((st, idx) => {
          const IconComp = st.icon;
          return (
            <div key={idx} className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 space-y-2 text-center flex flex-col justify-between items-center relative shadow-md">
              <div className="p-2 rounded-xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
                <IconComp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">{st.label}</span>
                <span className="text-xs font-extrabold text-cyan-300 font-mono mt-0.5 block">{st.time}</span>
                <span className="text-[10px] text-slate-400 font-medium block mt-1">{st.detail}</span>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-500 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoyageTimeline;
