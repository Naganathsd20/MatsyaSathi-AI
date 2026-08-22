import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export const AILimitationsCard = () => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-amber-950/20 space-y-3 text-xs text-amber-200">
      <div className="flex items-center gap-2 font-bold text-amber-300">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>⚠️ Prototype AI Assistant Boundaries & Limitations</span>
      </div>

      <ul className="space-y-1.5 list-disc pl-5 leading-relaxed text-amber-200/90">
        <li>This assistant provides automated decision-support suggestions compiled from prototype demonstration data.</li>
        <li>It is not connected to a live satellite or official government marine advisory server.</li>
        <li>Never treat automated responses as absolute safety guarantees or promised income.</li>
        <li>Always verify official Coast Guard radio broadcasts and INCOIS ocean bulletins before setting sail.</li>
      </ul>
    </div>
  );
};

export default AILimitationsCard;
