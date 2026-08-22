import React, { useState } from 'react';
import { vesselPlannerData } from '../data/vesselPlannerData';
import { fishingZonesData } from '../data/fishingZonesData';
import { catchPredictionData } from '../data/catchPredictionData';
import { marketData } from '../data/marketData';
import { safetyData } from '../data/safetyData';

import VesselPlannerHeader from '../components/vesselPlanner/VesselPlannerHeader';
import VesselSelector from '../components/vesselPlanner/VesselSelector';
import TripConfigurator from '../components/vesselPlanner/TripConfigurator';
import TripRecommendationCard from '../components/vesselPlanner/TripRecommendationCard';
import VoyageTimeline from '../components/vesselPlanner/VoyageTimeline';
import FuelDistanceCard from '../components/vesselPlanner/FuelDistanceCard';
import VoyageRouteMap from '../components/vesselPlanner/VoyageRouteMap';
import TripSummaryCard from '../components/vesselPlanner/TripSummaryCard';
import TripPlanningInsights from '../components/vesselPlanner/TripPlanningInsights';

import WeatherContextCard from '../components/vesselPlanner/WeatherContextCard';
import SafetyIntegrationCard from '../components/vesselPlanner/SafetyIntegrationCard';
import CatchPredictionIntegrationCard from '../components/vesselPlanner/CatchPredictionIntegrationCard';
import MarketIntegrationCard from '../components/vesselPlanner/MarketIntegrationCard';

export const VesselPlannerPage = () => {
  const vp = vesselPlannerData;
  const zones = fishingZonesData.zones;

  const [selectedVesselId, setSelectedVesselId] = useState("small-motorized");
  const [selectedZoneId, setSelectedZoneId] = useState("zone-a");
  const [selectedDeparture, setSelectedDeparture] = useState("05:30 AM");
  const [selectedDurationHours, setSelectedDurationHours] = useState(4);
  const [selectedSpecies, setSelectedSpecies] = useState("Indian Mackerel");

  // Dynamic calculations
  const activeVessel = vp.vessels.find(v => v.id === selectedVesselId) || vp.vessels[1];
  const activeZone = zones.find(z => z.id === selectedZoneId) || zones[0];

  const oneWayKm = parseFloat(activeZone.distance) || 8;
  const roundTripKm = oneWayKm * 2;
  const travelTimeMins = Math.round((oneWayKm / activeVessel.speed) * 60);

  const fuelBurnL = Math.round(roundTripKm * activeVessel.fuelBurn);
  const fuelReserveL = Math.round(fuelBurnL * 0.3);

  // Time calculations (simple formatted string outputs)
  const arrivalTime = selectedDeparture === "05:00 AM" ? "05:32 AM"
    : selectedDeparture === "05:30 AM" ? "06:02 AM"
    : selectedDeparture === "06:00 AM" ? "06:32 AM"
    : "07:32 AM";

  const returnTime = selectedDeparture === "05:00 AM" ? `${5 + selectedDurationHours + 1}:34 AM`
    : selectedDeparture === "05:30 AM" ? `10:34 AM`
    : selectedDeparture === "06:00 AM" ? `11:04 AM`
    : `12:04 PM`;

  const totalDurationStr = `${selectedDurationHours} hrs ${travelTimeMins * 2} mins`;

  // Dynamic Valuation calculation from Phase 5 & 7 data
  const pred = catchPredictionData.predictions[selectedZoneId] || catchPredictionData.predictions["zone-a"];
  const sp = marketData.speciesData.find(s => s.species.toLowerCase() === selectedSpecies.toLowerCase()) || marketData.speciesData[0];
  const minGross = (pred.minCatch * sp.price).toLocaleString();
  const maxGross = (pred.maxCatch * sp.price).toLocaleString();

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Header */}
      <VesselPlannerHeader headerData={vp.header} />

      {/* 2. Interactive Vessel Category Selector */}
      <VesselSelector
        vessels={vp.vessels}
        selectedVesselId={selectedVesselId}
        onSelectVessel={(id) => setSelectedVesselId(id)}
      />

      {/* 3. Interactive Trip Configurator */}
      <TripConfigurator
        vessels={vp.vessels}
        selectedVesselId={selectedVesselId}
        onSelectVessel={setSelectedVesselId}
        selectedZoneId={selectedZoneId}
        onSelectZone={setSelectedZoneId}
        selectedDeparture={selectedDeparture}
        onSelectDeparture={setSelectedDeparture}
        selectedDurationHours={selectedDurationHours}
        onSelectDuration={setSelectedDurationHours}
        selectedSpecies={selectedSpecies}
        onSelectSpecies={setSelectedSpecies}
        departureTimes={vp.departureTimes}
        durationOptions={vp.durationOptions}
      />

      {/* 4. Master Recommended Trip Plan Card */}
      <TripRecommendationCard
        vesselName={activeVessel.name}
        zoneName={activeZone.name}
        zoneDistance={activeZone.distance}
        departureTime={selectedDeparture}
        durationHours={selectedDurationHours}
        travelTimeMins={travelTimeMins}
        arrivalTime={arrivalTime}
        returnTime={returnTime}
        totalDurationStr={totalDurationStr}
      />

      {/* 5. Voyage Schedule Timeline */}
      <VoyageTimeline
        departureTime={selectedDeparture}
        arrivalTime={arrivalTime}
        returnTime={returnTime}
        travelTimeMins={travelTimeMins}
        durationHours={selectedDurationHours}
        zoneName={activeZone.name}
      />

      {/* 6. Distance, Fuel & Spatial Route Map Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5">
          <FuelDistanceCard
            oneWayKm={oneWayKm}
            roundTripKm={roundTripKm}
            travelTimeMins={travelTimeMins}
            fuelBurnL={fuelBurnL}
            fuelReserveL={fuelReserveL}
            fuelTankL={activeVessel.fuelCapacity}
          />
        </div>
        <div className="lg:col-span-7">
          <VoyageRouteMap selectedZone={activeZone} />
        </div>
      </div>

      {/* 7. Master Voyage Summary Card */}
      <TripSummaryCard
        vesselName={activeVessel.name}
        zoneName={activeZone.name}
        departureTime={selectedDeparture}
        returnTime={returnTime}
        oneWayKm={oneWayKm}
        fuelBurnL={fuelBurnL}
        expectedCatchStr={pred.estimatedRange}
        estimatedGrossStr={`₹${minGross} – ₹${maxGross}`}
        safetyStatus={safetyData.overallStatus.status}
      />

      {/* 8. Trip Planning Insights Rationale */}
      <TripPlanningInsights insights={vp.insights} />

      {/* 9. Cross-Module Intelligence Context Grid (Phases 3, 5, 6, 7 Integrations) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <WeatherContextCard />
        <SafetyIntegrationCard />
        <CatchPredictionIntegrationCard selectedZoneId={selectedZoneId} />
        <MarketIntegrationCard selectedSpecies={selectedSpecies} />
      </div>
    </div>
  );
};

export default VesselPlannerPage;
