import React, { useState, useEffect } from 'react';
import { settingsData } from '../data/settingsData';
import { useAuth } from '../context/AuthContext';

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
  const { currentUser, updateProfile } = useAuth();

  const [selectedLangId, setSelectedLangId] = useState("en");
  const [selectedRegionId, setSelectedRegionId] = useState("mangaluru");
  const [selectedHarbor, setSelectedHarbor] = useState(currentUser?.primaryHarbor || "Mangaluru Old Port");

  const [vesselProfile, setVesselProfile] = useState({
    vesselName: currentUser?.vesselName || 'Vessel Not Configured',
    registrationNo: currentUser?.registrationNo || 'Registration Pending',
    vesselType: currentUser?.vesselType || 'Coastal Fishing Boat',
    lengthMeters: currentUser?.lengthMeters || 9.5,
    engineHp: currentUser?.engineHp || 'Engine Not Configured',
    fuelCapacityL: currentUser?.fuelCapacityL || 100,
    crewCapacity: currentUser?.crewCapacity || 4,
    homeHarbor: currentUser?.primaryHarbor || 'Mangaluru Old Port'
  });

  // Sync vesselProfile state when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setVesselProfile({
        vesselName: currentUser.vesselName || 'Vessel Not Configured',
        registrationNo: currentUser.registrationNo || 'Registration Pending',
        vesselType: currentUser.vesselType || 'Coastal Fishing Boat',
        lengthMeters: currentUser.lengthMeters || 9.5,
        engineHp: currentUser.engineHp || 'Engine Not Configured',
        fuelCapacityL: currentUser.fuelCapacityL || 100,
        crewCapacity: currentUser.crewCapacity || 4,
        homeHarbor: currentUser.primaryHarbor || 'Mangaluru Old Port'
      });
      setSelectedHarbor(currentUser.primaryHarbor || "Mangaluru Old Port");
    }
  }, [currentUser]);

  const handleHarborSelect = (h) => {
    setSelectedHarbor(h);
    updateProfile({ primaryHarbor: h });
  };

  const handleSaveVesselProfile = (updated) => {
    setVesselProfile(updated);
    updateProfile({
      vesselName: updated.vesselName,
      registrationNo: updated.registrationNo,
      vesselType: updated.vesselType,
      engineHp: updated.engineHp,
      fuelCapacityL: updated.fuelCapacityL,
      crewCapacity: updated.crewCapacity,
      primaryHarbor: updated.homeHarbor || selectedHarbor
    });
  };

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
        onSelectHarbor={handleHarborSelect}
      />

      {/* 4. Vessel & Engine Profile Editor */}
      <VesselProfileEditor
        key={currentUser?.id || 'vessel_editor'}
        initialProfile={vesselProfile}
        onSaveProfile={handleSaveVesselProfile}
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
