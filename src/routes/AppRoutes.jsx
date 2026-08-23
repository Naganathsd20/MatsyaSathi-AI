import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import ProtectedRoute from '../components/ProtectedRoute';

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DashboardPage from '../pages/DashboardPage';
import WeatherPage from '../pages/WeatherPage';
import ZonesPage from '../pages/ZonesPage';
import CatchPredictionPage from '../pages/CatchPredictionPage';
import SafetyPage from '../pages/SafetyPage';
import MarketPage from '../pages/MarketPage';
import VesselPlannerPage from '../pages/VesselPlannerPage';
import CommunityPage from '../pages/CommunityPage';
import AiAssistantPage from '../pages/AiAssistantPage';
import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Main Authenticated Dashboard Shell Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/zones" element={<ZonesPage />} />
          <Route path="/catch-prediction" element={<CatchPredictionPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/vessel-planner" element={<VesselPlannerPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/ai-assistant" element={<AiAssistantPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>

      {/* Catch-all Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
