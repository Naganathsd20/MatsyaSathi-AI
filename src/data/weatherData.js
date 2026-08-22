export const weatherData = {
  header: {
    title: "Weather & Sea Intelligence",
    subtitle: "Understand weather and sea conditions before heading out.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    dataBadge: "Prototype Data",
    safetyPill: {
      status: "Suitable",
      badge: "🟢 Suitable for Coastal Fishing",
      color: "emerald"
    }
  },

  current: {
    temperature: "28°C",
    temperatureRaw: 28,
    condition: "Partly Cloudy",
    windSpeed: "14 km/h",
    windDirection: "NW",
    rainProbability: "20%",
    visibility: "8.5 km",
    waveHeight: "0.8 m",
    seaCondition: "Moderate"
  },

  seaConditionIndex: {
    score: 72,
    maxScore: 100,
    label: "MODERATE",
    explanation: "Sea conditions are currently moderate based on the available prototype weather and marine indicators.",
    badgeColor: "teal"
  },

  fishingCondition: {
    periods: [
      { name: "Morning", status: "Good", badge: "🟢 Good", window: "05:30 AM – 11:00 AM" },
      { name: "Afternoon", status: "Moderate", badge: "🟡 Moderate", window: "11:30 AM – 03:30 PM" },
      { name: "Evening", status: "Caution", badge: "🟠 Caution", window: "04:00 PM – 07:30 PM" }
    ],
    suggestedWindow: {
      time: "05:30 AM — 09:30 AM",
      status: "GOOD",
      note: "Prototype recommendation based on displayed conditions."
    }
  },

  forecast: [
    {
      day: "Today",
      date: "Aug 22",
      temp: "28°C",
      condition: "Partly Cloudy",
      rainProb: "20%",
      wind: "14 km/h",
      waveHeight: "0.8 m",
      icon: "CloudSun"
    },
    {
      day: "Tomorrow",
      date: "Aug 23",
      temp: "29°C",
      condition: "Cloudy",
      rainProb: "30%",
      wind: "16 km/h",
      waveHeight: "1.1 m",
      icon: "Cloud"
    },
    {
      day: "Day 3",
      date: "Aug 24",
      temp: "27°C",
      condition: "Light Rain",
      rainProb: "55%",
      wind: "22 km/h",
      waveHeight: "1.6 m",
      icon: "CloudRain"
    }
  ],

  windWaveDetails: {
    wind: {
      speed: "14 km/h",
      direction: "NW (315°)",
      gustSpeed: "18 km/h",
      BeaufortScale: "Force 3 (Gentle Breeze)"
    },
    waves: {
      height: "0.8 m",
      period: "6.5 s",
      swellDirection: "SW (225°)",
      seaState: "Slight to Moderate"
    }
  },

  hourlyTrend: [
    { time: "06:00 AM", wind: 12, wave: 0.7, rain: 15 },
    { time: "09:00 AM", wind: 14, wave: 0.8, rain: 20 },
    { time: "12:00 PM", wind: 16, wave: 1.0, rain: 25 },
    { time: "03:00 PM", wind: 18, wave: 1.2, rain: 35 },
    { time: "06:00 PM", wind: 15, wave: 0.9, rain: 20 },
    { time: "09:00 PM", wind: 13, wave: 0.8, rain: 15 }
  ],

  aiInsight: {
    title: "🤖 MatsyaSathi Weather Insight",
    text: "Current prototype conditions indicate moderate sea conditions with relatively favorable morning conditions. Fishermen should check the latest official marine warnings before departure.",
    warningNote: "This is decision-support information, not a substitute for official marine safety advisories."
  }
};

export default weatherData;
