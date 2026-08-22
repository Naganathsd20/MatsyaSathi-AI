import React, { useState } from 'react';
import { settingsData } from '../data/settingsData';

import SettingsHeader from '../components/settings/SettingsHeader';
import LanguageSelector from '../components/settings/LanguageSelector';
import RegionHarborConfig from '../components/settings/RegionHarborConfig';
import VesselProfileEditor from '../components/settings/VesselProfileEditor';
import OfflineCacheCard from '../components/settings/OfflineCacheCard';
import NotificationThresholds from '../components/settings/NotificationThresholds';
import SystemInfoCard from '../components/settings/SystemInfoCard';
import SettingsQuickActions from '../components/settings/SettingsQuickActions';

export const SettingsPage = () => {
  const sd = settingsData;

  const [selectedLangId, setSelectedLangId] = useState("en");
  const [selectedRegionId, setSelectedRegionId] = useState("mangaluru");
  const [selectedHarbor, setSelectedHarbor] = useState("Mangaluru Main Harbor");
  const [vesselProfile, setVesselProfile] = useState(sd.defaultVesselProfile);

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Header */}
      <SettingsHeader headerData={sd.header} />

      {/* 2. Regional Language Preferences Selector */}
      <LanguageSelector
        languages={sd.languages}
        selectedLangId={selectedLangId}
        onSelectLanguage={(id) => setSelectedLangId(id)}
      />

      {/* 3. Primary Coastal Region & Home Harbor Selector */}
      <RegionHarborConfig
        coastalRegions={sd.coastalRegions}
        selectedRegionId={selectedRegionId}
        onSelectRegion={(id) => setSelectedRegionId(id)}
        selectedHarbor={selectedHarbor}
        onSelectHarbor={(h) => setSelectedHarbor(h)}
      />

      {/* 4. Vessel & Engine Profile Editor */}
      <VesselProfileEditor
        initialProfile={vesselProfile}
        onSaveProfile={(updated) => setVesselProfile(updated)}
      />

      {/* 5. Offline Storage & Alert Thresholds Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-6">
          <OfflineCacheCard cacheInfo={sd.offlineCache} />
        </div>
        <div className="lg:col-span-6">
          <NotificationThresholds initialThresholds={sd.alertThresholds} />
        </div>
      </div>

      {/* 6. System Info & App Version */}
      <SystemInfoCard info={sd.systemInfo} />

      {/* 7. Quick Navigation to All Modules */}
      <SettingsQuickActions />
    </div>
  );
};

export default SettingsPage;
