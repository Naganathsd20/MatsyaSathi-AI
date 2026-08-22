import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { Navigation } from 'lucide-react';

export const VesselPlannerPage = () => {
  return (
    <PlaceholderPage
      title="Vessel & Voyage Planner"
      subtitle="Smart route planning, diesel consumption forecasting, harbor ETA calculations, and gear management."
      icon={Navigation}
      phaseTag="Coming in Phase 3"
      roadmapPhase="Phase 3"
      plannedFeatures={[
        "Optimal sea waypoint routing with wave resistance calculations",
        "Diesel fuel requirement estimator per nautical mile",
        "Harbor return time and tide-matched entry planner",
        "Vessel maintenance & safety gear inspection checklist"
      ]}
    />
  );
};

export default VesselPlannerPage;
