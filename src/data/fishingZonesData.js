export const fishingZonesData = {
  header: {
    title: "Fishing Zone Recommendations",
    subtitle: "Discover prototype fishing areas based on sea conditions, distance, depth, and suitability indicators.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Prototype Recommendations",
    disclaimer: "Zone recommendations shown here are prototype decision-support data and are not verified fishing advisories."
  },

  heroRecommendation: {
    zoneId: "zone-a",
    name: "Zone A",
    score: 86,
    maxScore: 100,
    suitability: "HIGH SUITABILITY",
    statusBadge: "⭐ Recommended",
    summary: "Zone A currently has the strongest prototype suitability score based on the displayed sea condition, wind, wave height, distance, depth, and target-species indicators.",
    whyPoints: [
      "✓ Lower wave height (0.7 m)",
      "✓ Moderate wind (12 km/h)",
      "✓ Shorter distance from harbor (8 km)",
      "✓ Suitable water depth (28 m)",
      "✓ Favorable prototype sea condition (Good)"
    ],
    disclaimer: "Prototype scoring only. Verify official marine conditions before departure."
  },

  zones: [
    {
      id: "zone-a",
      name: "Zone A",
      status: "Recommended",
      statusBadge: "⭐ Recommended",
      statusType: "success",
      suitability: "High",
      score: 86,
      distance: "8 km",
      direction: "220° SW",
      depth: "28 m",
      seaCondition: "Good",
      windSpeed: "12 km/h",
      waveHeight: "0.7 m",
      catchPotential: "High",
      targetSpecies: ["Indian Mackerel", "Sardine"],
      bestTime: "05:30 AM – 09:30 AM",
      coordinates: { x: 38, y: 58 },
      reasons: [
        "Favorable prototype sea condition with stable swells",
        "Lower wave height reducing vessel resistance",
        "Moderate wind speed suitable for small crafts",
        "Shorter travel distance saving diesel fuel",
        "Optimal water depth range for pelagic schools"
      ],
      considerations: [
        "Verify latest marine weather warnings prior to unmooring",
        "Check actual sea swell at harbor mouth before heading offshore",
        "Ensure active VHF radio communication channel 16",
        "Carry mandatory safety life vests and emergency lights"
      ]
    },
    {
      id: "zone-b",
      name: "Zone B",
      status: "Caution",
      statusBadge: "⚠️ Caution",
      statusType: "warning",
      suitability: "Moderate",
      score: 68,
      distance: "12 km",
      direction: "245° SW",
      depth: "36 m",
      seaCondition: "Moderate",
      windSpeed: "17 km/h",
      waveHeight: "1.1 m",
      catchPotential: "Medium",
      targetSpecies: ["Mackerel", "Sardine"],
      bestTime: "06:00 AM – 09:00 AM",
      coordinates: { x: 55, y: 42 },
      reasons: [
        "Moderate catch potential indicator in deeper waters",
        "Acceptable visibility for day operations"
      ],
      considerations: [
        "Increasing wind gusts expected near midday",
        "Requires extra fuel margin for 12 km return voyage",
        "Small motor crafts should exercise caution"
      ]
    },
    {
      id: "zone-c",
      name: "Zone C",
      status: "Avoid",
      statusBadge: "❌ Avoid",
      statusType: "danger",
      suitability: "Low",
      score: 38,
      distance: "18 km",
      direction: "270° W",
      depth: "45 m",
      seaCondition: "Rough",
      windSpeed: "24 km/h",
      waveHeight: "1.8 m",
      catchPotential: "Low",
      targetSpecies: ["Tuna"],
      bestTime: "Not Recommended",
      coordinates: { x: 78, y: 28 },
      reasons: [
        "Deeper waters with pelagic tuna migration indications"
      ],
      considerations: [
        "Rough sea condition with wave swells reaching 1.8 m",
        "High wind speed (24 km/h) creating turbulent choppy waters",
        "Far offshore distance (18 km) increasing risk profile",
        "Unfavorable for small-scale coastal fishing boats"
      ]
    }
  ],

  suitabilityWeights: [
    { factor: "Sea Condition", weight: "25%", description: "Swell stability and surface turbulence assessment" },
    { factor: "Wind Speed", weight: "20%", description: "Sustained wind velocity and gust threshold" },
    { factor: "Wave Height", weight: "20%", description: "Significant wave height safety index" },
    { factor: "Distance to Harbor", weight: "15%", description: "Fuel requirement and travel safety margin" },
    { factor: "Water Depth", weight: "10%", description: "Depth suitability for target fishing gear" },
    { factor: "Target Species Indicator", weight: "10%", description: "Seasonal habitat presence parameter" }
  ]
};

export default fishingZonesData;
