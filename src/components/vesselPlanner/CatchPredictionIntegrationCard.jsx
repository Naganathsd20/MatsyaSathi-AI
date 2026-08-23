import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { catchPredictionData } from '../../data/catchPredictionData';

export const CatchPredictionIntegrationCard = ({ selectedZoneId }) => {
  const pred = catchPredictionData.predictions[selectedZoneId] || catchPredictionData.predictions["zone-a"];

  return (
    <div className="glass-card rounded-2xl p-5 border border-cyan-900/40 bg-[#0B253C] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">🐟 Catch Potential Integration</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
              {pred.potentialStatus} POTENTIAL
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Estimated Catch Yield: <strong className="text-white">{pred.estimatedRange}</strong> • Confidence: {pred.confidenceScore}% (AI Model).
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
