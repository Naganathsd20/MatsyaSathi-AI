export const vesselPlannerData = {
  header: {
    title: "Smart Vessel & Trip Planner",
    subtitle: "Configure vessel parameters, target zones, and schedule optimized fishing voyages with integrated safety and market intelligence.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Vessel Trip Planner",
    disclaimer: "Calculations and voyage recommendations shown here are decision-support estimates and should not be used as official navigation or coast guard plans."
  },

  vessels: [
    {
      id: "small-traditional",
      name: "Small Traditional Boat",
      category: "Non-Motorized / Oar-Canoe",
      capacity: 150,
      capacityUnit: "kg",
      range: 10,
      rangeUnit: "km",
      fuelCapacity: 0,
      fuelBurn: 0,
      speed: 8,
      waveLimit: 0.8,
      status: "Coastal Only"
    },
    {
      id: "small-motorized",
      name: "Small Motorized Boat",
      category: "Outboard Motor (OBM)",
      capacity: 400,
      capacityUnit: "kg",
      range: 25,
      rangeUnit: "km",
      fuelCapacity: 40,
      fuelBurn: 1.5, // Liters per km roundtrip
      speed: 15,
      waveLimit: 1.5,
      status: "Recommended for Coastal Sector"
    },
    {
      id: "medium-vessel",
      name: "Medium Fishing Vessel",
      category: "Inboard Trawler",
      capacity: 1500,
      capacityUnit: "kg",
      range: 60,
      rangeUnit: "km",
      fuelCapacity: 120,
      fuelBurn: 2.2,
      speed: 20,
      waveLimit: 2.5,
      status: "Offshore Capable"
    }
  ],

  departureTimes: ["05:00 AM", "05:30 AM", "06:00 AM", "07:00 AM"],
  durationOptions: [
    { label: "3 Hours", hours: 3 },
    { label: "4 Hours", hours: 4 },
    { label: "6 Hours", hours: 6 }
  ],

  insights: {
    departureRationale: "05:30 AM departure aligns with minimal morning wind gusts and optimal tidal flow.",
    zoneRationale: "Zone A is recommended due to high suitability score (86/100) and short distance (8 km).",
    weatherConsideration: "Favorable morning wave swell (0.7 m) with low precipitation risk (20%).",
    safetyConsideration: "Overall status is NORMAL with green checklist readiness.",
    marketConsideration: "Indian Mackerel currently commands strong demand at ₹195/kg."
  }
};

export default vesselPlannerData;
