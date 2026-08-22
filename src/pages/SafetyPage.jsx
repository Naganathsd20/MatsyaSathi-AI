import React, { useState } from 'react';
import { safetyData } from '../data/safetyData';

import SafetyHeader from '../components/safety/SafetyHeader';
import SafetyStatusCard from '../components/safety/SafetyStatusCard';
import SafetyScore from '../components/safety/SafetyScore';
import SafetyAlertFilters from '../components/safety/SafetyAlertFilters';
import SafetyAlertCard from '../components/safety/SafetyAlertCard';
import PreDepartureChecklist from '../components/safety/PreDepartureChecklist';
import EmergencyReadiness from '../components/safety/EmergencyReadiness';
import SafetyRecommendations from '../components/safety/SafetyRecommendations';
import WeatherSafetyContext from '../components/safety/WeatherSafetyContext';
import ZoneSafetyContext from '../components/safety/ZoneSafetyContext';
import SafetyTimeline from '../components/safety/SafetyTimeline';

export const SafetyPage = () => {
  const s = safetyData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAlerts = s.alerts.filter(alert => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Active") return alert.severity === "warning" || alert.severity === "danger";
    if (activeCategory === "Caution") return alert.severity === "warning";
    if (activeCategory === "Information") return alert.severity === "info";
    return true;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Header */}
      <SafetyHeader headerData={s.header} />

      {/* 2. Overall Safety Status & Safety Score Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <SafetyStatusCard statusData={s.overallStatus} />
        </div>
        <div className="lg:col-span-5">
          <SafetyScore scoreData={s.safetyScore} />
        </div>
      </div>

      {/* 3. Active Safety Alerts Section */}
      <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">🚨 Active Safety Alerts</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/30 font-medium">
                Prototype Alerts ({filteredAlerts.length})
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Filterable coastal hazard advisories and pre-departure reminders.
            </p>
          </div>

          <SafetyAlertFilters
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <SafetyAlertCard key={alert.id} alert={alert} />
            ))
          ) : (
            <div className="col-span-full p-8 text-center glass-panel rounded-2xl border border-slate-800 text-xs text-slate-400">
              No prototype alerts match the selected filter category.
            </div>
          )}
        </div>
      </div>

      {/* 4. Pre-Departure Safety Checklist & Emergency Readiness */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <PreDepartureChecklist initialItems={s.checklist} />
        </div>
        <div className="lg:col-span-4">
          <EmergencyReadiness readinessList={s.emergencyReadiness} />
        </div>
      </div>

      {/* 5. Safety Recommendations */}
      <SafetyRecommendations recommendations={s.recommendations} />

      {/* 6. Context Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <WeatherSafetyContext />
        <ZoneSafetyContext />
      </div>

      {/* 7. Prototype Safety Timeline */}
      <SafetyTimeline timeline={s.timeline} />
    </div>
  );
};

export default SafetyPage;
