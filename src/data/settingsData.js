export const settingsData = {
  header: {
    title: "Application & Vessel Settings",
    subtitle: "Configure regional language preferences, primary landing harbor, vessel profile, offline map cache, and marine alert thresholds.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Prototype Settings",
    disclaimer: "Settings preferences and vessel profile details configured here are saved locally in your browser session for decision support and demonstration."
  },

  languages: [
    { id: "en", name: "English", nativeName: "English", flag: "🇬🇧", status: "Active Default", preview: "Safer Seas. Smarter Fishing." },
    { id: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", status: "Supported", preview: "ಸುರಕ್ಷಿತ ಸಮುದ್ರ. ಜಾಣ ಮೀನುಗಾರಿಕೆ." },
    { id: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳", status: "Supported", preview: "സുരക്ഷിത കടൽ. മികച്ച മീൻപിടുത്തം." },
    { id: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", status: "Supported", preview: "பாதுகாப்பான கடல். சிறந்த மீன்பிடித்தல்." },
    { id: "hi", name: "Hindi", nativeName: "हिंदी", flag: "🇮🇳", status: "Supported", preview: "सुरक्षित समुद्र। बेहतर आजीविका।" }
  ],

  coastalRegions: [
    { id: "mangaluru", name: "Mangaluru Coast", state: "Karnataka", harbors: ["Mangaluru Main Harbor", "Ullal Landing Center"] },
    { id: "malpe", name: "Malpe / Udupi Sector", state: "Karnataka", harbors: ["Malpe Harbor", "Hangarkatta Jetty"] },
    { id: "karwar", name: "Karwar / Uttara Kannada", state: "Karnataka", harbors: ["Honnavar Harbor", "Tadri Jetty"] },
    { id: "kasaragod", name: "Kasaragod Northern Sector", state: "Kerala", harbors: ["Kasaragod Estuary", "Manjeshwar Jetty"] }
  ],

  defaultVesselProfile: {
    vesselName: "Matsya Star",
    registrationNo: "IND-KA-04-MM-1082",
    vesselType: "Small Motorized Boat",
    lengthMeters: 9.5,
    engineHp: "25 HP Outboard",
    fuelCapacityL: 40,
    crewCapacity: 4,
    homeHarbor: "Mangaluru Main Harbor"
  },

  offlineCache: {
    totalStorageMB: "42.5 MB",
    tileCount: 1280,
    regionCoverage: "Mangaluru 25km Coastal Radius",
    lastSynced: "Today, 05:00 AM",
    isAutoSync: true
  },

  alertThresholds: {
    maxWaveHeight: 1.5,
    maxWindSpeed: 18,
    priceAlertPercent: 4.0,
    preDepartureReminder: true,
    safetySoundAlert: true
  },

  systemInfo: {
    appName: "MatsyaSathi AI",
    version: "v1.11.0",
    buildEdition: "Hackathon Production Edition",
    environment: "Client-Side Progressive Web App",
    localStorageUsage: "128 KB used / 5 MB available"
  }
};

export default settingsData;
