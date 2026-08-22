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
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    phase: 'Phase 2',
    isFunctional: true
  },
  {
    name: 'Weather & Sea',
    path: '/weather',
    icon: CloudSun,
    phase: 'Phase 3',
    isFunctional: false,
    description: 'Real-time wind, wave height, tide schedules, and storm advisories for coastal waters.'
  },
  {
    name: 'Fishing Zones',
    path: '/zones',
    icon: MapPin,
    phase: 'Phase 4',
    isFunctional: false,
    description: 'Potential Fishing Zone (PFZ) map layers, sea surface temperatures, and chlorophyll maps.'
  },
  {
    name: 'Catch Prediction',
    path: '/catch-prediction',
    icon: TrendingUp,
    phase: 'Phase 5',
    isFunctional: false,
    description: 'AI-driven species presence forecasting based on water parameters and seasonal migration patterns.'
  },
  {
    name: 'Safety Alerts',
    path: '/safety',
    icon: ShieldAlert,
    phase: 'Phase 6',
    isFunctional: false,
    description: 'SOS broadcaster, international maritime border warning system, and high-wave hazard advisories.'
  },
  {
    name: 'Market & Supply',
    path: '/market',
    icon: ShoppingBag,
    phase: 'Phase 7',
    isFunctional: false,
    description: 'Live harbor auction prices, buyer connection network, and cold chain log tracking.'
  },
  {
    name: 'Vessel Planner',
    path: '/vessel-planner',
    icon: Navigation,
    phase: 'Phase 8',
    isFunctional: false,
    description: 'Fuel cost estimator, distance-to-harbor calculator, and optimal navigational routing.'
  },
  {
    name: 'Community & Tips',
    path: '/community',
    icon: Users,
    phase: 'Phase 9',
    isFunctional: true,
    description: 'Fishermen peer knowledge exchange, regional safety updates, and sustainable fishing practices.'
  },
  {
    name: 'AI Assistant',
    path: '/ai-assistant',
    icon: Bot,
    phase: 'Phase 10',
    isFunctional: false,
    description: 'Multilingual voice & text AI companion for sea regulations, gear advice, and weather queries.'
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    phase: 'Phase 1 Shell',
    isFunctional: false,
    description: 'Language selection (Kannada, Malayalam, Tamil, Hindi, English), offline sync, and vessel profile.'
  }
];
