import { weatherData } from './weatherData';
import { fishingZonesData } from './fishingZonesData';
import { catchPredictionData } from './catchPredictionData';
import { safetyData } from './safetyData';
import { marketData } from './marketData';
import { vesselPlannerData } from './vesselPlannerData';
import { communityData } from './communityData';

export const aiAssistantData = {
  header: {
    title: "AI Fishing Assistant",
    subtitle: "Ask questions about weather, fishing zones, catch potential, safety, markets, trips, and local fishing knowledge.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Prototype AI Assistant",
    disclaimer: "This prototype assistant provides decision-support suggestions based on demonstration data. It is not a substitute for official marine advisories, Coast Guard instructions, or professional judgment."
  },

  suggestedQuestions: [
    "Which fishing zone is best today?",
    "What is today's weather?",
    "What is the expected catch?",
    "What fish has the best market price?",
    "Is it safe to go?",
    "Plan my trip"
  ],

  quickActions: [
    { name: "Weather & Sea", path: "/weather", icon: "CloudSun" },
    { name: "Fishing Zones", path: "/zones", icon: "MapPin" },
    { name: "Catch Potential", path: "/catch-prediction", icon: "TrendingUp" },
    { name: "Safety Center", path: "/safety", icon: "ShieldAlert" },
    { name: "Market & Supply", path: "/market", icon: "ShoppingBag" },
    { name: "Vessel Planner", path: "/vessel-planner", icon: "Navigation" },
    { name: "Community & Tips", path: "/community", icon: "Users" }
  ],

  initialMessage: {
    id: "welcome",
    sender: "assistant",
    time: "Just now",
    text: "👋 Hello, Captain! I am your MatsyaSathi AI Fishing Assistant.\n\nI can help you explore today's prototype marine conditions across weather, fishing zones, catch potential, safety checks, market rates, trip planning, and local community tips.",
    sources: ["Weather", "Fishing Zones", "Catch Prediction", "Safety Center", "Market", "Vessel Planner", "Community Tips"]
  },

  // Local Intent Matcher
  generateResponse: (query) => {
    const q = query.toLowerCase();

    // 1. Weather Intent
    const isWeather = q.includes("weather") || q.includes("wind") || q.includes("wave") || q.includes("sea") || q.includes("rain") || q.includes("temp") || q.includes("swell");

    // 2. Zone Intent
    const isZone = q.includes("zone") || q.includes("where") || q.includes("location") || q.includes("sector") || q.includes("best zone") || q.includes("recommended zone");

    // 3. Catch Intent
    const isCatch = q.includes("catch") || q.includes("yield") || q.includes("kg") || q.includes("quantity") || q.includes("potential") || q.includes("how much fish");

    // 4. Safety Intent
    const isSafety = q.includes("safe") || q.includes("safety") || q.includes("hazard") || q.includes("alert") || q.includes("danger") || q.includes("risk") || q.includes("checklist") || q.includes("emergency");

    // 5. Market Intent
    const isMarket = q.includes("market") || q.includes("price") || q.includes("sell") || q.includes("rate") || q.includes("auction") || q.includes("rupee") || q.includes("₹") || q.includes("cost") || q.includes("buyer");

    // 6. Trip/Vessel Intent
    const isTrip = q.includes("trip") || q.includes("plan") || q.includes("vessel") || q.includes("boat") || q.includes("fuel") || q.includes("departure") || q.includes("leave") || q.includes("duration");

    // 7. Community Intent
    const isCommunity = q.includes("tip") || q.includes("community") || q.includes("fisherman") || q.includes("advice") || q.includes("wisdom") || q.includes("peer");

    const activeZone = fishingZonesData.zones[0]; // Zone A
    const activeWeather = weatherData.current;
    const activeCatch = catchPredictionData.predictions["zone-a"];
    const activeSafety = safetyData.overallStatus;
    const activeMarket = marketData.speciesData[0]; // Mackerel
    const activeVessel = vesselPlannerData.vessels[1]; // Small Motorized

    // --- Weather & Sea Response ---
    if (isWeather && !isZone && !isCatch && !isSafety && !isMarket && !isTrip) {
      return {
        text: `Today's prototype weather on the Mangaluru Coast indicates **${activeWeather.seaCondition}** sea conditions with a surface temperature of **${activeWeather.temperature}**.\n\n• Wind: **${activeWeather.windSpeed} (${activeWeather.windDirection})**\n• Wave Swell: **${activeWeather.waveHeight}**\n• Visibility: **${activeWeather.visibility}**\n• Rain Risk: **${activeWeather.rainProbability}**\n\nThe recommended fishing window is **05:30 AM – 09:30 AM**.`,
        sources: ["Weather & Sea Intelligence"],
        cardType: "weather",
        cardData: {
          temp: activeWeather.temperature,
          wind: activeWeather.windSpeed,
          wave: activeWeather.waveHeight,
          seaState: activeWeather.seaCondition,
          rain: activeWeather.rainProbability
        }
      };
    }

    // --- Zone Response ---
    if (isZone && !isCatch && !isTrip) {
      return {
        text: `Based on prototype environmental scoring, **${activeZone.name}** is the top recommended fishing sector today.\n\n• Suitability Score: **${activeZone.score} / 100** (${activeZone.statusBadge})\n• Distance from Harbor: **${activeZone.distance}**\n• Water Depth: **${activeZone.depth}**\n• Target Species: **${activeZone.targetSpecies.join(", ")}**\n\nZone A currently has optimal sea state stability and minimal wave interference.`,
        sources: ["Fishing Zone Recommendations"],
        cardType: "zone",
        cardData: {
          name: activeZone.name,
          score: activeZone.score,
          distance: activeZone.distance,
          depth: activeZone.depth,
          species: activeZone.targetSpecies
        }
      };
    }

    // --- Catch Potential Response ---
    if (isCatch && !isMarket && !isTrip) {
      return {
        text: `For **Zone A**, the estimated prototype catch yield is **${activeCatch.estimatedRange}**.\n\n• Potential Rating: **${activeCatch.badgeText}**\n• Confidence Level: **${activeCatch.confidenceScore}% (${activeCatch.confidenceBadge})**\n• Key Target Species: **Indian Mackerel & Sardine**\n\nHigh potential is supported by favorable sea state, moderate wind, and suitable water depth.`,
        sources: ["Catch Prediction"],
        cardType: "catch",
        cardData: {
          range: activeCatch.estimatedRange,
          potential: activeCatch.badgeText,
          confidence: activeCatch.confidenceScore,
          summary: activeCatch.summary
        }
      };
    }

    // --- Safety Response ---
    if (isSafety) {
      return {
        text: `Current prototype safety level is **${activeSafety.badgeText}**.\n\n• ${activeSafety.message}\n• Active Advisory: **⚠️ Moderate Wind Advisory** around noon.\n• Safety Score: **82 / 100 (NORMAL)**\n\n*Reminder: Always verify official Coast Guard marine advisories and complete your pre-departure checklist before unmooring.*`,
        sources: ["Safety Center"],
        cardType: "safety",
        cardData: {
          status: activeSafety.badgeText,
          message: activeSafety.message,
          score: 82
        }
      };
    }

    // --- Market Response ---
    if (isMarket && !isTrip) {
      return {
        text: `The top prototype market selling opportunity today is **${activeMarket.species} (${activeMarket.localName})**.\n\n• Current Rate: **${activeMarket.priceFormatted}** (${activeMarket.change})\n• Buyer Demand: **${activeMarket.demand}**\n• Recommended Harbor: **${activeMarket.recommendedMarket}**\n\nPre-sorting mackerel into size grades at Mangaluru jetty can fetch up to ₹15/kg higher auction bids.`,
        sources: ["Market & Supply Chain"],
        cardType: "market",
        cardData: {
          species: activeMarket.species,
          price: activeMarket.priceFormatted,
          change: activeMarket.change,
          demand: activeMarket.demand,
          harbor: activeMarket.recommendedMarket
        }
      };
    }

    // --- Trip / Vessel Planner Response ---
    if (isTrip) {
      return {
        text: `Here is the recommended prototype voyage plan for a **${activeVessel.name}** heading to **Zone A**:\n\n• Departure Window: **05:30 AM**\n• Zone Arrival: **06:02 AM** (32 mins transit)\n• Active Fishing Window: **06:02 AM – 10:02 AM** (4 Hours)\n• Harbor Return: **10:34 AM**\n• Fuel Required: **~24 Liters** (plus 8L reserve)\n• Estimated Round-trip: **16 km**`,
        sources: ["Vessel Planner", "Fishing Zones", "Weather"],
        cardType: "trip",
        cardData: {
          vessel: activeVessel.name,
          zone: "Zone A",
          departure: "05:30 AM",
          return: "10:34 AM",
          fuel: "24 L"
        }
      };
    }

    // --- Community Response ---
    if (isCommunity) {
      const tip = communityData.featuredTip;
      return {
        text: `Here is the top prototype tip from the fishermen community today:\n\n**"${tip.title}"**\n*By ${tip.author} (${tip.communityRole})*\n\n"${tip.description}"\n\n👍 **${tip.helpfulCount} fishermen** found this tip helpful.`,
        sources: ["Community & Tips"],
        cardType: "community",
        cardData: {
          title: tip.title,
          author: tip.author,
          desc: tip.description
        }
      };
    }

    // --- Multi-Module / Comprehensive Overview Response ---
    return {
      text: `Here is today's comprehensive prototype fishing intelligence overview for **Mangaluru Coast**:\n\n1. **Recommended Sector**: **Zone A** (8 km, Score 86/100, High Suitability)\n2. **Expected Catch**: **80–110 kg** (High Potential, 78% Confidence)\n3. **Market Opportunity**: **Indian Mackerel** at **₹195/kg** (High Demand at Mangaluru Harbor)\n4. **Recommended Voyage**: Depart **05:30 AM**, return by **10:34 AM** (~24L fuel needed)\n5. **Safety Level**: **🟢 NORMAL** (Verify official marine weather before departure)`,
      sources: ["Weather & Sea", "Fishing Zones", "Catch Prediction", "Safety Center", "Market & Supply", "Vessel Planner"],
      cardType: "overview",
      cardData: {
        zone: "Zone A (86/100)",
        catch: "80–110 kg",
        price: "₹195/kg",
        departure: "05:30 AM",
        safety: "🟢 NORMAL"
      }
    };
  }
};

export default aiAssistantData;
