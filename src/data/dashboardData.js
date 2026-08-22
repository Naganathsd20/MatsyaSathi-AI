export const dashboardData = {
  header: {
    greeting: "Good morning, Fisherman! 👋",
    subtitle: "Your smart fishing overview for today",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    prototypeBadge: "Prototype Data"
  },

  summaryCards: {
    seaCondition: {
      status: "Moderate",
      waveHeight: "0.8 m",
      windSpeed: "14 km/h",
      trend: "Stable Swells",
      badgeColor: "teal"
    },
    weather: {
      temperature: "28°C",
      condition: "Partly Cloudy",
      rainProbability: "20%",
      badgeColor: "cyan"
    },
    safetyStatus: {
      status: "SAFE",
      statusBadge: "🟢 SAFE",
      message: "Current prototype conditions appear suitable for normal fishing activity.",
      badgeColor: "emerald"
    },
    bestTimeToGo: {
      window: "05:30 AM – 09:30 AM",
      recommendationNote: "Prototype recommendation",
      badgeColor: "sky"
    }
  },

  recommendedZones: [
    {
      id: "zone-a",
      name: "Zone A",
      suitability: "High",
      distance: "8 km",
      seaCondition: "Good",
      catchPotential: "High",
      badge: "⭐ Recommended",
      badgeType: "success",
      depth: "28m",
      bearing: "220° SW"
    },
    {
      id: "zone-b",
      name: "Zone B",
      suitability: "Moderate",
      distance: "12 km",
      seaCondition: "Moderate",
      catchPotential: "Medium",
      badge: "⚠️ Caution",
      badgeType: "warning",
      depth: "36m",
      bearing: "245° SW"
    },
    {
      id: "zone-c",
      name: "Zone C",
      suitability: "Low",
      distance: "18 km",
      seaCondition: "Rough",
      catchPotential: "Low",
      badge: "❌ Avoid",
      badgeType: "danger",
      depth: "45m",
      bearing: "270° W"
    }
  ],

  catchPotential: {
    status: "HIGH",
    estimatedCatch: "80–110 kg",
    confidence: "Prototype estimate",
    disclaimer: "Prediction functionality will be implemented in Phase 5."
  },

  marketSnapshot: {
    label: "Prototype Market Data",
    items: [
      { species: "Indian Mackerel", price: "₹195/kg", trend: "+4% today" },
      { species: "Sardine", price: "₹155/kg", trend: "Stable" },
      { species: "Tuna", price: "₹280/kg", trend: "+2% demand" }
    ]
  },

  safetyAlerts: [
    {
      id: 1,
      severity: "warning",
      title: "⚠️ Moderate Wind Advisory",
      message: "Moderate winds are expected in the selected prototype region.",
      time: "Issued 1 hr ago",
      tag: "Prototype Alert"
    },
    {
      id: 2,
      severity: "info",
      title: "ℹ️ Pre-Departure Reminder",
      message: "Check the latest marine safety information before departure.",
      time: "Issued 2 hrs ago",
      tag: "Prototype Alert"
    }
  ],

  quickActions: [
    { name: "Check Sea Conditions", icon: "CloudSun", path: "/weather", emoji: "🌦️" },
    { name: "Find Fishing Zones", icon: "MapPin", path: "/zones", emoji: "🎯" },
    { name: "Check Catch Potential", icon: "TrendingUp", path: "/catch-prediction", emoji: "🐟" },
    { name: "Safety Center", icon: "ShieldAlert", path: "/safety", emoji: "🚨" },
    { name: "Market Prices", icon: "ShoppingBag", path: "/market", emoji: "💰" },
    { name: "Ask MatsyaSathi AI", icon: "Bot", path: "/ai-assistant", emoji: "🤖" }
  ],

  dailyOverview: [
    { time: "05:30 AM", title: "Recommended departure window", detail: "Favorable wind & low swells" },
    { time: "08:30 AM", title: "Good fishing period", detail: "Peak morning tidal activity" },
    { time: "12:00 PM", title: "Conditions becoming moderate", detail: "Sea breeze increases to 16 km/h" },
    { time: "04:00 PM", title: "Review market prices", detail: "Harbor evening auction rate update" }
  ]
};

export default dashboardData;
