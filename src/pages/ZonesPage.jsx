import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { MapPin } from 'lucide-react';

export const ZonesPage = () => {
  return (
    <PlaceholderPage
      title="Fishing Zone Recommendations"
      subtitle="Potential Fishing Zone (PFZ) map layers based on sea surface temperatures, ocean fronts, and chlorophyll concentrations."
      icon={MapPin}
      phaseTag="Coming in Phase 2"
      roadmapPhase="Phase 2"
      plannedFeatures={[
        "Interactive coastal map with ocean thermal front overlays",
        "INCOIS / ISRO satellite imagery intelligence sync",
        "GPS bearing & nautical mile distance to high-yield sectors",
        "Species-wise habitat suitability score index"
      ]}
    />
  );
};

export default ZonesPage;
