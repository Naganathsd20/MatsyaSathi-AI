import React from 'react';
import { dashboardPlaceholders } from '../data/dashboardData';
import StatCard from '../components/StatCard';
import AlertCard from '../components/AlertCard';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import {
  Waves,
  Clock,
  ShieldAlert,
  MapPin,
  TrendingUp,
  ShoppingBag,
  Info,
  Sparkles,
  RefreshCw,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  const d = dashboardPlaceholders;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        title={d.userGreeting}
        subtitle="Overview of sea conditions, safe fishing windows, and harbor market snapshots."
        icon={Compass}
        location={d.location}
        badgeText="Phase 1 Shell"
        actionButton={
          <Button size="sm" variant="outline" icon={RefreshCw}>
            Refresh View
          </Button>
        }
      />

      {/* Phase 1 Explanatory Alert Banner */}
      <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-sky-500/20 text-cyan-300 border border-sky-400/30 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-100">Phase 1 UI Shell Active</h4>
              <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-cyan-300 font-semibold border border-sky-400/20">
                Placeholder Data
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              The cards displayed below are structured UI placeholders for demonstration. Real-time satellite telemetry, weather APIs, and AI models will replace these in subsequent phases.
            </p>
          </div>
        </div>
        <Link to="/" className="shrink-0">
          <span className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 whitespace-nowrap">
            View Phase Roadmap →
          </span>
        </Link>
      </div>

      {/* Grid of UI Placeholder Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* 1. Sea Condition Card */}
        <StatCard
          title={d.seaCondition.title}
          value={d.seaCondition.value}
          subtitle={`Wave Height: ${d.seaCondition.waveHeight}`}
          icon={Waves}
          badgeText={d.seaCondition.status}
          badgeColor={d.seaCondition.badgeColor}
          detailList={[
            { label: "Wind Velocity", val: d.seaCondition.windSpeed },
            { label: "Surface Water Temp", val: d.seaCondition.surfaceTemp }
          ]}
        />

        {/* 2. Best Time to Go */}
        <StatCard
          title={d.bestTimeToGo.title}
          value={d.bestTimeToGo.value}
          subtitle={d.bestTimeToGo.recommendation}
          icon={Clock}
          badgeText="Morning Window"
          badgeColor={d.bestTimeToGo.badgeColor}
          detailList={[
            { label: "Tide Schedule", val: d.bestTimeToGo.tideWindow },
            { label: "Ocean Visibility", val: d.bestTimeToGo.visibility }
          ]}
        />

        {/* 3. Safety Status */}
        <StatCard
          title={d.safetyStatus.title}
          value={d.safetyStatus.value}
          subtitle={d.safetyStatus.statusText}
          icon={ShieldAlert}
          badgeText="Border Safe"
          badgeColor={d.safetyStatus.badgeColor}
          detailList={[
            { label: "Maritime Border Distance", val: d.safetyStatus.borderAlert },
            { label: "Emergency Beacon", val: d.safetyStatus.sosStatus }
          ]}
        />

        {/* 4. Recommended Zones */}
        <StatCard
          title={d.recommendedZones.title}
          value={d.recommendedZones.value}
          subtitle={`Bearing: ${d.recommendedZones.bearing}`}
          icon={MapPin}
          badgeText="PFZ Active"
          badgeColor={d.recommendedZones.badgeColor}
          detailList={[
            { label: "Water Depth Range", val: d.recommendedZones.depth },
            { label: "Target Species", val: d.recommendedZones.targetSpecies }
          ]}
        />

        {/* 5. Catch Potential */}
        <StatCard
          title={d.catchPotential.title}
          value={d.catchPotential.value}
          subtitle={d.catchPotential.primarySchool}
          icon={TrendingUp}
          badgeText={d.catchPotential.indicator}
          badgeColor={d.catchPotential.badgeColor}
          detailList={[
            { label: "Expected Yield Index", val: "High Probability" },
            { label: "Recommended Gear", val: "Pelagic Gillnet" }
          ]}
        />

        {/* 6. Market Snapshot */}
        <StatCard
          title={d.marketSnapshot.title}
          value={d.marketSnapshot.value}
          subtitle={d.marketSnapshot.topCommodity}
          icon={ShoppingBag}
          badgeText={d.marketSnapshot.trend}
          badgeColor={d.marketSnapshot.badgeColor}
          detailList={[
            { label: "Secondary Commodity", val: d.marketSnapshot.secondaryCommodity },
            { label: "Harbor Demand", val: "Strong Demand" }
          ]}
        />
      </div>

      {/* Active Alerts Section */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-slate-100">Active Harbor & Coastal Alerts</h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">Updated 10 mins ago</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {d.activeAlerts.map((alert) => (
            <AlertCard
              key={alert.id}
              severity={alert.severity}
              title={alert.title}
              message={alert.message}
              time={alert.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
