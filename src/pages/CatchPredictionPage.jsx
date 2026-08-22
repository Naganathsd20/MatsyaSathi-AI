import React, { useState } from 'react';
import { catchPredictionData } from '../data/catchPredictionData';
import { fishingZonesData } from '../data/fishingZonesData';

import CatchPredictionHeader from '../components/catchPrediction/CatchPredictionHeader';
import ZoneSelector from '../components/catchPrediction/ZoneSelector';
import CatchEstimateCard from '../components/catchPrediction/CatchEstimateCard';
import PredictionFactors from '../components/catchPrediction/PredictionFactors';
import SpeciesPotential from '../components/catchPrediction/SpeciesPotential';
import CatchRangeCard from '../components/catchPrediction/CatchRangeCard';
import PredictionConfidence from '../components/catchPrediction/PredictionConfidence';
import PredictionReasoning from '../components/catchPrediction/PredictionReasoning';
import EnvironmentalContext from '../components/catchPrediction/EnvironmentalContext';
import ZoneContextCard from '../components/catchPrediction/ZoneContextCard';
import PredictionWorkflow from '../components/catchPrediction/PredictionWorkflow';
import FutureAiModelCard from '../components/catchPrediction/FutureAiModelCard';

export const CatchPredictionPage = () => {
  const cp = catchPredictionData;
  const [selectedZoneId, setSelectedZoneId] = useState("zone-a");

  const activePrediction = cp.predictions[selectedZoneId] || cp.predictions["zone-a"];
  const activeZone = fishingZonesData.zones.find(z => z.id === selectedZoneId) || fishingZonesData.zones[0];

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Header */}
      <CatchPredictionHeader headerData={cp.header} />

      {/* 2. Interactive Zone Selector */}
      <ZoneSelector
        selectedZoneId={selectedZoneId}
        onSelectZone={(id) => setSelectedZoneId(id)}
      />

      {/* 3. Main Prediction & Factors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <CatchEstimateCard
            prediction={activePrediction}
            zoneName={activeZone.name}
          />
        </div>
        <div className="lg:col-span-5">
          <PredictionFactors factors={activePrediction.factors} />
        </div>
      </div>

      {/* 4. Target Species Potential, Catch Range, & Confidence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SpeciesPotential speciesList={activePrediction.speciesPotential} />
        <CatchRangeCard prediction={activePrediction} />
        <PredictionConfidence confidenceScore={activePrediction.confidenceScore} />
      </div>

      {/* 5. "Why this estimate?" Reasoning Card */}
      <PredictionReasoning
        reasoningPoints={activePrediction.reasoningPoints}
        zoneName={activeZone.name}
      />

      {/* 6. Context Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EnvironmentalContext />
        <ZoneContextCard selectedZoneId={selectedZoneId} />
      </div>

      {/* 7. Prototype Workflow Diagram */}
      <PredictionWorkflow steps={cp.workflowSteps} />

      {/* 8. Future AI Model Scalability Card */}
      <FutureAiModelCard info={cp.futureAiInfo} />
    </div>
  );
};

export default CatchPredictionPage;
