export const communityData = {
  header: {
    title: "Fisher Community & Tips",
    subtitle: "Practical fishing knowledge, peer safety observations, seasonal guides, and local market tips from Mangaluru coastal fishermen.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Fisher Community & Tips",
    disclaimer: "Community posts and tips displayed here are shared by fellow fishermen and should not replace official marine advisories or Coast Guard instructions."
  },

  categories: ["All", "Fishing Tips", "Safety", "Weather", "Species", "Market", "Seasonal"],

  featuredTip: {
    title: "Morning Gillnetting in Moderate Coastal Swells",
    category: "Fishing Tips",
    author: "Captain Ramesh B.",
    communityRole: "Senior Trawler Skipper • Mangaluru Harbor",
    time: "Featured Today",
    description: "When operating around 8–12 km off Mangaluru Coast in 0.8m swells, deploy pelagic gillnets parallel to the shoreline current during the 05:30 AM – 08:30 AM window. This minimizes net entanglement while target Mackerel schools are actively feeding near the surface.",
    helpfulCount: 42,
    badge: "Tip of the Day",
    tags: ["Mackerel", "Gillnetting", "Morning Window"]
  },

  posts: [
    {
      id: 1,
      title: "Inspecting Life Jackets & VHF Channel 16 Before Harbor Bar Crossing",
      category: "Safety",
      author: "Siddappa K.",
      communityRole: "Coastal Safety Officer • Ullal Jetty",
      time: "2 hours ago",
      description: "Always test VHF Channel 16 radio signal and verify distress flare expiration dates before passing the Mangaluru estuary bar. Swells can double in height near river mouth bars during outgoing tides.",
      helpfulCount: 38,
      badge: "Community Tip"
    },
    {
      id: 2,
      title: "Identifying Afternoon Squall Cloud Buildup along SW Horizon",
      category: "Weather",
      author: "Devadas M.",
      communityRole: "Traditional Fisherman • Malpe",
      time: "4 hours ago",
      description: "Dark cumulus tower formation on the SW horizon past 11:30 AM indicates rapid wind gusts up to 22 km/h within two hours. Begin hauling gear early to return before rough sea development.",
      helpfulCount: 29,
      badge: "Community Tip"
    },
    {
      id: 3,
      title: "Pelagic Mackerel Schooling Behavior Near 28m Depth Contour",
      category: "Species",
      author: "Guruva M.",
      communityRole: "Purse Seine Master • Mangaluru",
      time: "1 day ago",
      description: "Indian Mackerel (Bangude) currently concentrate around the 28m depth contour in Zone A. Watch for sea bird diving clusters and surface water ripple disruptions indicating feeding frenzy activity.",
      helpfulCount: 51,
      badge: "Community Tip"
    },
    {
      id: 4,
      title: "Sorting Mackerel by Size Grading at Jetty Increases Auction Price",
      category: "Market",
      author: "Anand P.",
      communityRole: "Fish Cooperative Delegate • Mangaluru",
      time: "1 day ago",
      description: "Pre-sorting Indian Mackerel into Large (>200g) and Medium grades in iced crates before landing at Mangaluru Harbor fetch up to ₹15/kg higher auction bids from hotel buyers.",
      helpfulCount: 44,
      badge: "Community Tip"
    },
    {
      id: 5,
      title: "Post-Monsoon Coastal Sardine Migration Shifts Inshore",
      category: "Seasonal",
      author: "Moideen K.",
      communityRole: "Inshore Boat Operator • Ullal",
      time: "2 days ago",
      description: "Oil Sardines (Tarli) are moving into shallow 12–15m coastal waters following thermal salinity shifts. Early morning ring seine operations near shore yield clean, high-fat catches.",
      helpfulCount: 33,
      badge: "Community Tip"
    },
    {
      id: 6,
      title: "Securing Gillnet Float Line Weights Against Bottom Currents",
      category: "Fishing Tips",
      author: "Narasimha S.",
      communityRole: "Traditional Gillnetter • Honnavar",
      time: "3 days ago",
      description: "Use lead sinker spacing of 1.5m along bottom footlines when fishing rocky bottoms near Zone B. This prevents gear snagging while maintaining net vertical opening.",
      helpfulCount: 27,
      badge: "Community Tip"
    }
  ],

  seasonalGuide: {
    seasonName: "Post-Monsoon Coastal Season (Current Season)",
    timeframe: "August – October",
    targetSpecies: ["Indian Mackerel", "Sardine", "Anchovy"],
    depthZone: "8 km – 15 km Inshore Coastal Sector",
    gearAdvice: "Light Pelagic Gillnets & Ring Seines with 28mm – 32mm mesh size",
    keyConsideration: "Favorable morning sea conditions, but watch for afternoon thermocline shifts."
  },

  speciesKnowledge: [
    {
      species: "Indian Mackerel",
      localName: "Bangude",
      preferredDepth: "25m – 35m pelagic zone",
      characteristics: "Fast-swimming pelagic schooler, highly sensitive to surface sea temperatures.",
      sellingTip: "Keep packed in 1:1 ice slurry immediately upon net retrieval for maximum fresh market value."
    },
    {
      species: "Sardine",
      localName: "Tarli",
      preferredDepth: "12m – 20m inshore zone",
      characteristics: "Dense coastal shoals, attracted to nutrient-rich upwelling zones.",
      sellingTip: "High local daily demand. Quick turnover at morning harbor auctions commands top cash price."
    },
    {
      species: "Tuna",
      localName: "Kedar",
      preferredDepth: "40m+ deep offshore waters",
      characteristics: "Powerful migratory predator found along offshore drop-offs.",
      sellingTip: "Requires bleeding and deep refrigeration; premium rates paid by export processors."
    }
  ],

  communityInsights: [
    {
      title: "Tidal Current Influence",
      text: "Incoming high tide around 06:00 AM creates optimal feeding conditions along the 8km depth contour."
    },
    {
      title: "Harbor Auction Timing",
      text: "Landing fresh catch between 09:30 AM and 10:30 AM catches wholesale buyers before afternoon transport trucks depart."
    },
    {
      title: "Surface Swell Observance",
      text: "Long-period swell waves (>10 sec) indicate offshore weather systems even when local wind remains light."
    }
  ],

  knowledgeFlowSteps: [
    { step: 1, title: "Local Knowledge", desc: "Traditional wisdom & observations" },
    { step: 2, title: "Fisher Tips", desc: "Peer-shared gear & net advice" },
    { step: 3, title: "Weather Context", desc: "Real-time sea state alignment" },
    { step: 4, title: "Fishing Decisions", desc: "Optimized departure & zone choice" },
    { step: 5, title: "Safety & Market", desc: "Safe return & maximum catch value" }
  ],

  guidelines: [
    { rule: "Respectful Participation", desc: "Share authentic fishing observations and support fellow coastal fishermen." },
    { rule: "Verify Information", desc: "Always check official marine advisories alongside peer observations." },
    { rule: "Safety First", desc: "Prioritize crew safety and boat readiness over catch volume." },
    { rule: "Safety Disclaimer", desc: "Community tips are for peer knowledge sharing & decision support." }
  ]
};

export default communityData;
