import React, { useState } from 'react';
import { marketData } from '../data/marketData';

import MarketHeader from '../components/market/MarketHeader';
import MarketSummaryCards from '../components/market/MarketSummaryCards';
import MarketSelector from '../components/market/MarketSelector';
import FishPriceTable from '../components/market/FishPriceTable';
import PriceTrendChart from '../components/market/PriceTrendChart';
import DemandSupplyCard from '../components/market/DemandSupplyCard';
import BestSellingOpportunity from '../components/market/BestSellingOpportunity';
import MarketComparison from '../components/market/MarketComparison';
import CatchMarketConnection from '../components/market/CatchMarketConnection';
import SupplyChainFlow from '../components/market/SupplyChainFlow';
import MarketInsightCard from '../components/market/MarketInsightCard';

export const MarketPage = () => {
  const m = marketData;
  const [selectedHarborId, setSelectedHarborId] = useState("mangaluru");
  const [selectedSpeciesId, setSelectedSpeciesId] = useState("mackerel");

  const activeHarbor = m.harbors.find(h => h.id === selectedHarborId) || m.harbors[0];
  const activeSpecies = m.speciesData.find(s => s.id === selectedSpeciesId) || m.speciesData[0];
  const activeTrendData = m.priceTrendHistory[selectedSpeciesId] || m.priceTrendHistory["mackerel"];

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Market Header */}
      <MarketHeader headerData={m.header} />

      {/* 2. Market Summary Cards (4 Cards) */}
      <MarketSummaryCards summaryData={m.summaryCards} />

      {/* 3. Market Selector */}
      <MarketSelector
        harbors={m.harbors}
        selectedHarborId={selectedHarborId}
        onSelectHarbor={(id) => setSelectedHarborId(id)}
      />

      {/* 4. Fish Price Table */}
      <FishPriceTable
        speciesData={m.speciesData}
        selectedSpeciesId={selectedSpeciesId}
        onSelectSpecies={(id) => setSelectedSpeciesId(id)}
        activeHarborName={activeHarbor.name}
        marketPricesMap={m.marketPricesMap}
        selectedHarborId={selectedHarborId}
      />

      {/* 5. Price Trend Chart + Demand/Supply Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <PriceTrendChart
            trendData={activeTrendData}
            activeSpeciesName={activeSpecies.species}
          />
        </div>
        <div className="lg:col-span-5">
          <DemandSupplyCard activeSpecies={activeSpecies} />
        </div>
      </div>

      {/* 6. Best Selling Opportunity */}
      <BestSellingOpportunity opportunity={m.bestOpportunity} />

      {/* 7. Market Comparison */}
      <MarketComparison
        harbors={m.harbors}
        marketPricesMap={m.marketPricesMap}
        activeSpeciesId={selectedSpeciesId}
        activeSpeciesName={activeSpecies.species}
      />

      {/* 8. Catch + Market Connection */}
      <CatchMarketConnection activeSpecies={activeSpecies} />

      {/* 9. Supply Chain Flow */}
      <SupplyChainFlow steps={m.supplyChainSteps} />

      {/* 10. Market Insight */}
      <MarketInsightCard aiInsight={m.aiInsight} />
    </div>
  );
};

export default MarketPage;
