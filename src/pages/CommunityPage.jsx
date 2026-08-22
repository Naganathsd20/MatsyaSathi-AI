import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { Users } from 'lucide-react';

export const CommunityPage = () => {
  return (
    <PlaceholderPage
      title="Community Knowledge & Safety Tips"
      subtitle="Peer-to-peer ocean observation sharing, regional fishing knowledge, traditional maritime wisdom, and safety tips."
      icon={Users}
      phaseTag="Coming in Phase 4"
      roadmapPhase="Phase 4"
      plannedFeatures={[
        "Local harbor news, hazard spots, and net snag reports",
        "Traditional fishing wisdom & seasonal species guide",
        "Fishermen cooperative announcement bulletin",
        "Peer voice notes and regional safety advisories"
      ]}
    />
  );
};

export default CommunityPage;
