import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { CloudSun } from 'lucide-react';

export const WeatherPage = () => {
  return (
    <PlaceholderPage
      title="Weather & Sea Intelligence"
      subtitle="Real-time ocean state advisories, wave heights, wind direction, tide schedules, and cyclone advisories."
      icon={CloudSun}
      phaseTag="Coming in Phase 2"
      roadmapPhase="Phase 2"
      plannedFeatures={[
        "Coastal wind speed & gust direction forecasts",
        "Wave swell height & sea surface roughness telemetry",
        "Astronomical tide schedules for regional harbors",
        "Extreme storm & cyclone push notification warnings"
      ]}
    />
  );
};

export default WeatherPage;
