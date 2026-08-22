import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { ShoppingBag } from 'lucide-react';

export const MarketPage = () => {
  return (
    <PlaceholderPage
      title="Market & Supply Chain Intelligence"
      subtitle="Live harbor auction price updates, direct buyer connecting network, and fresh catch valuation tools."
      icon={ShoppingBag}
      phaseTag="Coming in Phase 3"
      roadmapPhase="Phase 3"
      plannedFeatures={[
        "Real-time daily auction rates across regional fish landing centers",
        "Direct pre-sale listing for high-value fresh catch",
        "Fuel-to-revenue ratio and trip profit calculator",
        "Cold chain logistics tracking and buyer notification"
      ]}
    />
  );
};

export default MarketPage;
