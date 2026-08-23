export const catchPredictionData = {
  header: {
    title: "Catch Prediction & Potential",
    subtitle: "Estimate potential catch conditions using environmental and zone indicators.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Catch Forecast",
    disclaimer: "Catch estimates are experimental decision-support information and should not be treated as a guarantee of catch or income."
  },

  predictions: {
    "zone-a": {
      zoneId: "zone-a",
      estimatedRange: "80–110 kg",
      minCatch: 80,
      expectedCatch: 95,
      maxCatch: 110,
      potentialStatus: "HIGH",
      statusType: "success",
      badgeText: "🟢 HIGH POTENTIAL",
      confidenceScore: 78,
      confidenceBadge: "Model Estimate",
      summary: "Zone A currently shows high catch potential because of its favorable sea condition, moderate wind, lower wave height, suitable depth, and target species indicators.",
      factors: [
        { name: "Sea Condition", status: "Good", contribution: "Strong Positive", score: 95, type: "success" },
        { name: "Wind Speed", status: "12 km/h", contribution: "Positive", score: 85, type: "success" },
        { name: "Wave Height", status: "0.7 m", contribution: "Positive", score: 90, type: "success" },
        { name: "Water Depth", status: "28 m", contribution: "Suitable", score: 88, type: "success" },
        { name: "Target Species", status: "Mackerel + Sardine", contribution: "High Relevance", score: 92, type: "success" },
        { name: "Zone Suitability", status: "86 / 100", contribution: "Strong", score: 86, type: "success" }
      ],
      speciesPotential: [
        { species: "Indian Mackerel", potential: "High", badgeType: "success" },
        { species: "Sardine", potential: "High", badgeType: "success" }
      ],
      reasoningPoints: [
        { text: "Favorable sea condition with minimal surface turbulence", positive: true },
        { text: "Lower wave height (0.7 m) reducing net instability", positive: true },
        { text: "Moderate wind speed (12 km/h) safe for small craft operations", positive: true },
        { text: "Suitable depth (28 m) matching pelagic school sonar profile", positive: true },
        { text: "Strong zone suitability score (86 / 100)", positive: true },
        { text: "High target species presence indication", positive: true }
      ]
    },
    "zone-b": {
      zoneId: "zone-b",
      estimatedRange: "50–80 kg",
      minCatch: 50,
      expectedCatch: 65,
      maxCatch: 80,
      potentialStatus: "MEDIUM",
      statusType: "warning",
      badgeText: "🟡 MEDIUM POTENTIAL",
      confidenceScore: 65,
      confidenceBadge: "Model Estimate",
      summary: "Zone B shows moderate catch potential with moderate sea conditions, higher wind gusts, and slightly deeper waters.",
      factors: [
        { name: "Sea Condition", status: "Moderate", contribution: "Moderate", score: 70, type: "warning" },
        { name: "Wind Speed", status: "17 km/h", contribution: "Slight Caution", score: 60, type: "warning" },
        { name: "Wave Height", status: "1.1 m", contribution: "Slight Caution", score: 62, type: "warning" },
        { name: "Water Depth", status: "36 m", contribution: "Moderate", score: 75, type: "success" },
        { name: "Target Species", status: "Mackerel + Sardine", contribution: "Moderate Relevance", score: 70, type: "success" },
        { name: "Zone Suitability", status: "68 / 100", contribution: "Moderate", score: 68, type: "warning" }
      ],
      speciesPotential: [
        { species: "Indian Mackerel", potential: "Medium", badgeType: "warning" },
        { species: "Sardine", potential: "Medium", badgeType: "warning" }
      ],
      reasoningPoints: [
        { text: "Moderate sea condition with minor surface swells", positive: true },
        { text: "Higher wind speed (17 km/h) increasing drift rate", positive: false },
        { text: "Higher wave height (1.1 m) requiring careful net deployment", positive: false },
        { text: "Moderate zone suitability score (68 / 100)", positive: true }
      ]
    },
    "zone-c": {
      zoneId: "zone-c",
      estimatedRange: "20–45 kg",
      minCatch: 20,
      expectedCatch: 32.5,
      maxCatch: 45,
      potentialStatus: "LOW",
      statusType: "danger",
      badgeText: "🔴 LOW POTENTIAL",
      confidenceScore: 52,
      confidenceBadge: "Model Estimate",
      summary: "Zone C shows low catch potential due to rough sea state, higher wind velocity, and deeper offshore water depth.",
      factors: [
        { name: "Sea Condition", status: "Rough", contribution: "Negative", score: 35, type: "danger" },
        { name: "Wind Speed", status: "24 km/h", contribution: "Negative", score: 30, type: "danger" },
        { name: "Wave Height", status: "1.8 m", contribution: "High Caution", score: 25, type: "danger" },
        { name: "Water Depth", status: "45 m", contribution: "Deep Offshore", score: 50, type: "warning" },
        { name: "Target Species", status: "Tuna", contribution: "Low Frequency", score: 40, type: "danger" },
        { name: "Zone Suitability", status: "38 / 100", contribution: "Low", score: 38, type: "danger" }
      ],
      speciesPotential: [
        { species: "Tuna", potential: "Low", badgeType: "danger" }
      ],
      reasoningPoints: [
        { text: "Rough sea condition with choppy turbulent waves", positive: false },
        { text: "High wind speed (24 km/h) increasing operational hazard", positive: false },
        { text: "High wave height (1.8 m) causing vessel instability", positive: false },
        { text: "Low zone suitability score (38 / 100)", positive: false }
      ]
    }
  },

  workflowSteps: [
    { step: 1, title: "Weather & Sea", desc: "Telemetry data ingestion" },
    { step: 2, title: "Fishing Zone", desc: "Spatial sector selection" },
    { step: 3, title: "Environmental Factors", desc: "Wind, wave & depth weighting" },
    { step: 4, title: "Species Indicator", desc: "Seasonal species association" },
    { step: 5, title: "AI Estimation", desc: "Multi-parameter weighting engine" },
    { step: 6, title: "Catch Forecast", desc: "Output kg potential range" }
  ],

  futureAiInfo: {
    title: "🚀 Advanced Predictive Intelligence Architecture",
    text: "The platform synthesizes real-time environmental observations, sea-state telemetry, seasonal species migration patterns, and vessel specifications to deliver automated catch yield forecasts."
  }
};

export default catchPredictionData;
