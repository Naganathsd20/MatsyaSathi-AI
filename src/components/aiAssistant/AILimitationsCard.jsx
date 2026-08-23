import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export const AILimitationsCard = () => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-[#2E1F0A]/90 space-y-3 text-xs text-amber-300 shadow-md font-medium">
      <div className="flex items-center gap-2 font-bold text-amber-300">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
        <span>⚠️ AI Assistant Safety Boundaries & Advisory</span>
      </div>

      <ul className="space-y-1.5 list-disc pl-5 leading-relaxed text-amber-200/90 font-medium">
        <li>This assistant provides automated decision-support suggestions compiled from oceanographic indicators.</li>
        <li>It is not connected to a live satellite or official government marine advisory server.</li>
        <li>Never treat automated responses as absolute safety guarantees or promised income.</li>
        <li>Always verify official Coast Guard radio broadcasts and INCOIS ocean bulletins before setting sail.</li>
      </ul>
    </div>
  );
};

export default AILimitationsCard;
