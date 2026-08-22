import React from 'react';
import { Anchor } from 'lucide-react';
import Button from './Button';

export const EmptyState = ({
  title = "No information available",
  description = "No data records found for this section yet.",
  icon: Icon = Anchor,
  actionLabel = null,
  onAction = () => {}
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center glass-panel rounded-2xl border border-slate-800">
      <div className="p-4 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-base font-semibold text-slate-200 mb-1">{title}</h3>
      <p className="text-xs text-slate-400 max-w-sm mb-5">{description}</p>
      {actionLabel && (
        <Button size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
