import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { TrendingUp } from 'lucide-react';

export const CatchPredictionPage = () => {
  return (
    <PlaceholderPage
      title="Catch Potential Prediction"
      subtitle="AI-driven species presence forecasting using machine learning models trained on seasonal migration and water parameters."
      icon={TrendingUp}
      phaseTag="Coming in Phase 3"
      roadmapPhase="Phase 3"
      plannedFeatures={[
        "Pelagic & Demersal species abundance prediction models",
        "Trip yield probability and optimal soak-time estimator",
        "Historical catch pattern analytics per coastal zone",
        "Ecological sustainability & seasonal breeding bans compliance"
      ]}
    />
  );
};

export default CatchPredictionPage;
