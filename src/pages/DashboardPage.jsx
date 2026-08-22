import React from 'react';
import { dashboardData } from '../data/dashboardData';

import DashboardHeader from '../components/dashboard/DashboardHeader';
import SummaryCardsGrid from '../components/dashboard/SummaryCardsGrid';
import ZoneRecommendationCard from '../components/dashboard/ZoneRecommendationCard';
import CatchPotentialCard from '../components/dashboard/CatchPotentialCard';
import MarketSnapshotCard from '../components/dashboard/MarketSnapshotCard';
import SafetyAlertsSection from '../components/dashboard/SafetyAlertsSection';
import QuickActionCard from '../components/dashboard/QuickActionCard';
import FishingOverviewCard from '../components/dashboard/FishingOverviewCard';

export const DashboardPage = () => {
  const d = dashboardData;

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Dashboard Header */}
      <DashboardHeader headerData={d.header} />

      {/* 2. Top Summary Cards (4 Cards) */}
      <SummaryCardsGrid summaryData={d.summaryCards} />

      {/* 3. Recommended Fishing Zones Section */}
      <ZoneRecommendationCard zones={d.recommendedZones} />

      {/* 4. Grid Section: Catch Potential, Market Snapshot, & Daily Fishing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CatchPotentialCard catchData={d.catchPotential} />
        <MarketSnapshotCard marketData={d.marketSnapshot} />
        <FishingOverviewCard timeline={d.dailyOverview} />
      </div>

      {/* 5. Safety Alerts Section */}
      <SafetyAlertsSection alerts={d.safetyAlerts} />

      {/* 6. Quick Action Shortcuts */}
      <QuickActionCard actions={d.quickActions} />
    </div>
  );
};

export default DashboardPage;
