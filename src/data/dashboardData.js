export const dashboardPlaceholders = {
  userGreeting: "Good morning, Fisherman! 👋",
  location: "Mangaluru Coast, Karnataka",
  lastUpdated: "Preview Mode (Phase 1)",

  seaCondition: {
    title: "Sea Condition",
    value: "Moderate Swells",
    waveHeight: "1.2m - 1.8m",
    windSpeed: "14 knots (NW)",
    surfaceTemp: "28.4°C",
    status: "Fair Condition",
    badgeColor: "teal"
  },

  bestTimeToGo: {
    title: "Best Time to Go",
    value: "04:30 AM - 10:30 AM",
    tideWindow: "Low tide at 06:15 AM",
    visibility: "8.5 NM",
    recommendation: "Favorable morning window for inshore operations.",
    badgeColor: "cyan"
  },

  safetyStatus: {
    title: "Safety Status",
    value: "Code Green",
    borderAlert: "3.5 NM to Maritime Boundary",
    sosStatus: "Radio Beacon Active",
    statusText: "Normal Operations Safe",
    badgeColor: "emerald"
  },

  recommendedZones: {
    title: "Recommended Zones",
    value: "Zone B-4 (12 NM Offshore)",
    bearing: "240° SW from Harbor",
    depth: "35m - 42m",
    targetSpecies: "Mackerel & Sardines",
    badgeColor: "sky"
  },

  catchPotential: {
    title: "Catch Potential",
    value: "High (78%)",
    indicator: "Upward Trend",
    primarySchool: "Pelagic Schools detected in Sector 3",
    badgeColor: "emerald"
  },

  marketSnapshot: {
    title: "Market Snapshot",
    value: "Mangaluru Main Harbor",
    topCommodity: "Indian Mackerel: ₹180 - ₹210 / kg",
    secondaryCommodity: "Kingfish: ₹620 / kg",
    trend: "+5% demand today",
    badgeColor: "amber"
  },

  activeAlerts: [
    {
      id: 1,
      severity: "warning",
      title: "Wind Speed Advisory",
      message: "Gusts up to 18 knots expected beyond 15 NM around noon. Small crafts keep watch.",
      time: "Issued 1 hr ago"
    },
    {
      id: 2,
      severity: "info",
      title: "Harbor Notice",
      message: "Jetty #2 dredging complete. Navigation clear for medium trawlers.",
      time: "Issued 3 hrs ago"
    }
  ]
};
