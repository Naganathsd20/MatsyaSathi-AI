import {
  LayoutDashboard,
  CloudSun,
  MapPin,
  TrendingUp,
  ShieldAlert,
  ShoppingBag,
  Navigation,
  Users,
  Bot,
  Settings
} from 'lucide-react';

export const navItems = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    isFunctional: true
  },
  {
    key: 'weather',
    name: 'Weather & Sea',
    path: '/weather',
    icon: CloudSun,
    isFunctional: true,
    description: 'Real-time wind, wave height, tide schedules, and storm advisories for coastal waters.'
  },
  {
    key: 'zones',
    name: 'Fishing Zones',
    path: '/zones',
    icon: MapPin,
    isFunctional: true,
    description: 'Potential Fishing Zone (PFZ) map layers, sea surface temperatures, and chlorophyll maps.'
  },
  {
    key: 'catchPrediction',
    name: 'Catch Prediction',
    path: '/catch-prediction',
    icon: TrendingUp,
    isFunctional: true,
    description: 'AI-driven species presence forecasting based on water parameters and seasonal migration patterns.'
  },
  {
    key: 'safety',
    name: 'Safety Alerts',
    path: '/safety',
    icon: ShieldAlert,
    isFunctional: true,
    description: 'Real-time safety advisories, SOS beacon testing, emergency channel directories, and checklists.'
  },
  {
    key: 'market',
    name: 'Market & Supply',
    path: '/market',
    icon: ShoppingBag,
    isFunctional: true,
    description: 'Harbor auction rates, daily species prices, buyers directory, and cold chain capacity monitoring.'
  },
  {
    key: 'vesselPlanner',
    name: 'Vessel Planner',
    path: '/vessel-planner',
    icon: Navigation,
    isFunctional: true,
    description: 'Trip fuel calculator, crew roster manager, departure window calculator, and route safety check.'
  },
  {
    key: 'community',
    name: 'Community & Tips',
    path: '/community',
    icon: Users,
    isFunctional: true,
    description: 'Local knowledge exchange, species catching techniques, gear recommendations, and harbor updates.'
  },
  {
    key: 'aiAssistant',
    name: 'AI Assistant',
    path: '/ai-assistant',
    icon: Bot,
    isFunctional: true,
    description: 'Natural language AI companion answering weather, zone, market, and safety queries.'
  },
  {
    key: 'settings',
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    isFunctional: true,
    description: 'System preferences, language selection, harbor configuration, vessel profiles, and alert thresholds.'
  }
];
