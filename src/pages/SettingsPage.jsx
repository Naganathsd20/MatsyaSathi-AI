import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { Settings } from 'lucide-react';

export const SettingsPage = () => {
  return (
    <PlaceholderPage
      title="Application & Vessel Settings"
      subtitle="Configure regional language preferences, offline maps cache, notification thresholds, and boat profile."
      icon={Settings}
      phaseTag="Phase 1 Shell"
      roadmapPhase="Phase 1 / 2"
      plannedFeatures={[
        "Language switch (Kannada, Malayalam, Tamil, Hindi, English)",
        "Coastal region & home harbor selection",
        "Offline map tile caching for zero-network offshore mode",
        "Vessel registration details & engine specs profile"
      ]}
    />
  );
};

export default SettingsPage;
