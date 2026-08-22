import React, { useState } from 'react';
import { fishingZonesData } from '../data/fishingZonesData';

import ZonesHeader from '../components/zones/ZonesHeader';
import ZoneRecommendationHero from '../components/zones/ZoneRecommendationHero';
import ZoneCard from '../components/zones/ZoneCard';
import ZoneComparison from '../components/zones/ZoneComparison';
import ZoneMap from '../components/zones/ZoneMap';
import SuitabilityScore from '../components/zones/SuitabilityScore';
import WeatherContextCard from '../components/zones/WeatherContextCard';
import ZoneDetailsModal from '../components/zones/ZoneDetailsModal';

export const ZonesPage = () => {
  const fz = fishingZonesData;
  const [selectedZoneId, setSelectedZoneId] = useState(null);

  const activeZone = fz.zones.find(z => z.id === selectedZoneId) || null;

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Page Header */}
      <ZonesHeader headerData={fz.header} />

      {/* 2. Today's Prototype Recommendation Hero Card */}
      <ZoneRecommendationHero
        heroData={fz.heroRecommendation}
        onSelectZone={(id) => setSelectedZoneId(id)}
      />

      {/* 3. Zone Overview Cards (3 Zones Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {fz.zones.map((zone) => (
          <ZoneCard
            key={zone.id}
            zone={zone}
            onSelectZone={(id) => setSelectedZoneId(id)}
          />
        ))}
      </div>

      {/* 4. Side-by-Side Zone Comparison Table / Mobile Stack */}
      <ZoneComparison zones={fz.zones} />

      {/* 5. Custom Prototype Spatial Map Visualization */}
      <ZoneMap
        zones={fz.zones}
        onSelectZone={(id) => setSelectedZoneId(id)}
      />

      {/* 6. Suitability Scoring Framework Weights */}
      <SuitabilityScore weights={fz.suitabilityWeights} />

      {/* 7. Current Weather Context Card */}
      <WeatherContextCard />

      {/* Interactive Modal for Zone Details */}
      {activeZone && (
        <ZoneDetailsModal
          zone={activeZone}
          onClose={() => setSelectedZoneId(null)}
        />
      )}
    </div>
  );
};

export default ZonesPage;
