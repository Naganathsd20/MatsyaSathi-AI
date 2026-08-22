import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { catchPredictionData } from '../../data/catchPredictionData';

export const CatchPredictionIntegrationCard = ({ selectedZoneId }) => {
  const pred = catchPredictionData.predictions[selectedZoneId] || catchPredictionData.predictions["zone-a"];

  return (
    <div className="glass-card rounded-2xl p-5 border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-100">🐟 Catch Potential Integration</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-teal-300 font-bold border border-slate-700">
              {pred.potentialStatus} POTENTIAL
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Estimated Catch Yield: <strong className="text-slate-100">{pred.estimatedRange}</strong> • Confidence: {pred.confidenceScore}% (Phase 5 Model).
          </p>
        </div>
      </div>

      <Link to="/catch-prediction" className="shrink-0">
        <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
          View Catch Prediction
        </Button>
      </Link>
    </div>
  );
};

export default CatchPredictionIntegrationCard;
