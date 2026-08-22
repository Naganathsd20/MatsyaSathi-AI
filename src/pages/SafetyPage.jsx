import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { ShieldAlert } from 'lucide-react';

export const SafetyPage = () => {
  return (
    <PlaceholderPage
      title="Safety Alerts & Geo-Fencing"
      subtitle="Comprehensive sea safety guardian featuring international maritime boundary warnings, emergency SOS signals, and distress beacons."
      icon={ShieldAlert}
      phaseTag="Coming in Phase 2"
      roadmapPhase="Phase 2"
      plannedFeatures={[
        "Geo-fenced international maritime border proximity alarm",
        "One-touch emergency SOS broadcaster for coast guard response",
        "Man-overboard & rough sea hazard beaconing",
        "Vessel-to-vessel collision risk warning system"
      ]}
    />
  );
};

export default SafetyPage;
