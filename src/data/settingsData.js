export const settingsData = {
  header: {
    title: "Application & Vessel Settings",
    subtitle: "Configure regional language preferences, primary landing harbor, vessel profile, offline map cache, and marine alert thresholds.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "System Preferences",
    disclaimer: "Settings preferences and vessel profile details configured here are saved locally on your device for trip customization and decision support."
  },

  languages: [
    { id: "en", name: "English", nativeName: "English", flag: "🇬🇧", status: "Active Default", preview: "Safer Seas. Smarter Fishing." },
    { id: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", status: "Supported", preview: "ಸುರಕ್ಷಿತ ಸಮುದ್ರ. ಜಾಣ ಮೀನುಗಾರಿಕೆ." },
    { id: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳", status: "Supported", preview: "സുരക്ഷിത കടൽ. മികച്ച മീൻപിടുത്തം." },
    { id: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", status: "Supported", preview: "பாதுகாப்பான கடல். சிறந்த மீன்பிடித்தல்." },
    { id: "hi", name: "Hindi", nativeName: "हिंदी", flag: "🇮🇳", status: "Supported", preview: "सुरक्षित समुद्र। बेहतर आजीविका।" }
  ],

  coastalRegions: [
    {
      id: "karnataka",
      name: "Karnataka Coast",
      state: "Karnataka",
      harbors: [
        "Mangaluru Old Port",
        "Malpe Fishing Harbor",
        "Karwar Fishing Harbor",
        "Honnavar Fishing Harbor",
        "Bhatkal Fishing Harbor"
      ]
    },
    {
      id: "kerala",
      name: "Kerala Coast",
      state: "Kerala",
      harbors: [
        "Kochi Fishing Harbor",
        "Beypore Fishing Harbor",
        "Kozhikode Fishing Harbor",
        "Kollam Fishing Harbor",
        "Vizhinjam Fishing Harbor"
      ]
    },
    {
      id: "goa",
      name: "Goa Coast",
      state: "Goa",
      harbors: [
        "Panaji Fishing Harbor",
        "Vasco da Gama Fishing Harbor",
        "Chapora Fishing Harbor",
        "Betul Fishing Harbor"
      ]
    },
    {
      id: "tamilnadu",
      name: "Tamil Nadu Coast",
      state: "Tamil Nadu",
      harbors: [
        "Chennai Fishing Harbor",
        "Nagapattinam Fishing Harbor",
        "Rameswaram Fishing Harbor",
        "Tuticorin Fishing Harbor",
        "Cuddalore Fishing Harbor"
      ]
    },
    {
      id: "maharashtra",
      name: "Maharashtra Coast",
      state: "Maharashtra",
      harbors: [
        "Mumbai Fishing Harbor",
        "Ratnagiri Fishing Harbor",
        "Malvan Fishing Harbor",
        "Alibag Fishing Harbor",
        "Sindhudurg Fishing Harbor"
      ]
    }
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
    version: "v1.0.0",
    buildEdition: "MatsyaSathi AI Production",
    environment: "Client-Side Progressive Web App",
    localStorageUsage: "128 KB used / 5 MB available"
  }
};

export default settingsData;
