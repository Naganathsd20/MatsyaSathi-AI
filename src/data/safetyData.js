export const safetyData = {
  header: {
    title: "Safety Center",
    subtitle: "Stay informed about marine conditions and complete essential safety checks before departure.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Maritime Safety Center",
    disclaimer: "Always verify official marine weather and safety advisories before departure."
  },

  overallStatus: {
    status: "NORMAL",
    badgeText: "🟢 SAFE FOR NORMAL OPERATIONS",
    statusType: "success",
    message: "Current safety indicators do not show a major hazard, but fishermen should verify official marine advisories before departure.",
    indicators: {
      seaCondition: "Moderate",
      windSpeed: "14 km/h",
      waveHeight: "0.8 m",
      visibility: "8.5 km",
      rainProbability: "20%"
    }
  },

  safetyScore: {
    score: 82,
    maxScore: 100,
    status: "NORMAL",
    badgeType: "success",
    explanation: "High safety rating based on favorable wave height, clear visibility, and low precipitation probability.",
    weights: [
      { factor: "Sea Condition", weight: "25%", status: "Moderate (Favorable)" },
      { factor: "Wind Speed", weight: "20%", status: "14 km/h (Safe)" },
      { factor: "Wave Height", weight: "20%", status: "0.8 m (Low swell)" },
      { factor: "Visibility", weight: "15%", status: "8.5 km (Clear)" },
      { factor: "Rain Probability", weight: "10%", status: "20% (Low)" },
      { factor: "Zone Suitability", weight: "10%", status: "Zone A (86/100)" }
    ]
  },

  alerts: [
    {
      id: 1,
      severity: "warning",
      severityLabel: "🟡 CAUTION",
      category: "Caution",
      title: "⚠️ Moderate Wind Advisory",
      message: "Moderate winds are expected in the selected coastal region around noon.",
      time: "Issued 1 hour ago",
      badge: "Safety Advisory"
    },
    {
      id: 2,
      severity: "warning",
      severityLabel: "🟡 CAUTION",
      category: "Caution",
      title: "🌊 Sea Condition Advisory",
      message: "Sea conditions may become less favorable during the later part of the day beyond 15 NM.",
      time: "Issued 2 hours ago",
      badge: "Safety Advisory"
    },
    {
      id: 3,
      severity: "info",
      severityLabel: "🟢 INFO",
      category: "Information",
      title: "ℹ️ Pre-Departure Reminder",
      message: "Check the latest official marine safety information and boat fuel levels before departure.",
      time: "Issued 2 hours ago",
      badge: "Safety Reminder"
    }
  ],

  checklist: [
    { id: 1, text: "Life jackets available and inspected", completed: true },
    { id: 2, text: "Emergency communication device working (VHF Ch 16)", completed: true },
    { id: 3, text: "Navigation equipment and GPS checked", completed: true },
    { id: 4, text: "Fuel level and engine oil checked", completed: true },
    { id: 5, text: "Weather conditions reviewed", completed: true },
    { id: 6, text: "Marine advisory checked", completed: false },
    { id: 7, text: "Emergency contacts available on board", completed: false },
    { id: 8, text: "Fishing equipment and anchors secured", completed: false }
  ],

  emergencyReadiness: [
    { item: "Communication Radio", status: "READY", badgeType: "success" },
    { item: "Life Jackets / Vests", status: "READY", badgeType: "success" },
    { item: "GPS Navigation", status: "CHECK", badgeType: "info" },
    { item: "Engine Fuel Reserve", status: "READY", badgeType: "success" },
    { item: "Emergency Distress Flares", status: "CHECK", badgeType: "info" }
  ],

  recommendations: [
    {
      stage: "Before Departure",
      text: "Review the latest marine weather and safety advisories before unmooring from the jetty."
    },
    {
      stage: "During Voyage",
      text: "Monitor changing wind and sea conditions continuously and stay within safe zone boundaries."
    },
    {
      stage: "Emergency Protocol",
      text: "Keep communication equipment accessible and maintain constant awareness of your harbor return route."
    }
  ],

  timeline: [
    { time: "05:00 AM", title: "Pre-departure checklist", detail: "Safety gear & radio inspection" },
    { time: "05:30 AM", title: "Suggested departure window", detail: "Favorable morning sea conditions" },
    { time: "09:30 AM", title: "Morning fishing window ends", detail: "Evaluate wave swell trend" },
    { time: "12:00 PM", title: "Conditions may become moderate", detail: "Wind velocity increases to 17 km/h" },
    { time: "04:00 PM", title: "Review latest market/weather information", detail: "Prepare for harbor return" }
  ]
};

export default safetyData;
