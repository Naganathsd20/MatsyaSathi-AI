import React from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldAlert, Compass, Tag, Clock } from 'lucide-react';
import Button from '../Button';

export const ZoneDetailsModal = ({ zone, onClose }) => {
  if (!zone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="glass-card rounded-3xl p-6 md:p-8 max-w-2xl w-full border border-cyan-900/40 bg-[#051726] text-slate-100 relative z-50 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-cyan-900/30">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">{zone.name} Details</h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {zone.statusBadge}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-[#0B253C] text-slate-300 hover:text-white border border-cyan-900/40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suitability Score Summary */}
        <div className="p-4 rounded-2xl bg-[#071F33] border border-cyan-900/40 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 font-bold">Suitability Level</span>
            <div className="text-lg font-extrabold text-white">{zone.suitability} ({zone.score} / 100)</div>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold">Distance / Depth</span>
            <div className="text-sm font-extrabold text-cyan-300">{zone.distance} • {zone.depth} ({zone.direction})</div>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold">Best Window</span>
            <div className="text-sm font-extrabold text-amber-300">{zone.bestTime}</div>
          </div>
        </div>

        {/* Why it scores well / Status Reasons */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Why {zone.name} has this rating:</span>
          </h3>
          <ul className="space-y-2">
            {zone.reasons.map((r, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs text-slate-200 font-medium flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety & Operational Considerations */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Things to Consider Before Departure:</span>
          </h3>
          <ul className="space-y-2">
            {zone.considerations.map((c, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-[#2E1F0A]/90 border border-amber-500/30 text-xs text-amber-300 font-medium flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Close Footer */}
        <div className="pt-4 border-t border-cyan-900/30 flex justify-end">
          <Button size="md" variant="secondary" onClick={onClose}>
            Close Zone Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ZoneDetailsModal;
