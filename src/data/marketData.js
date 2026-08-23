export const marketData = {
  header: {
    title: "Market & Supply Chain",
    subtitle: "Understand fish prices, compare regional markets, and maximize fresh catch selling opportunities.",
    location: "Mangaluru Coast",
    locationTag: "📍 Mangaluru Coast",
    badgeText: "Market Snapshot",
    disclaimer: "Prices and market trends shown here are market indicators. Always verify local harbor auction rates before trading."
  },

  harbors: [
    { id: "mangaluru", name: "Mangaluru Main Harbor", distance: "0 km", status: "Primary Harbor" },
    { id: "malpe", name: "Malpe Harbor", distance: "56 km", status: "Major Trawler Hub" },
    { id: "ullal", name: "Ullal Landing Center", distance: "12 km", status: "Local Inshore Jetty" },
    { id: "honnavar", name: "Honnavar Harbor", distance: "140 km", status: "Regional Trading Center" }
  ],

  summaryCards: {
    bestPriceToday: {
      species: "Kingfish",
      price: "₹620/kg",
      change: "+3.5%",
      trend: "High Value",
      badgeColor: "emerald"
    },
    highestDemand: {
      species: "Indian Mackerel",
      price: "₹195/kg",
      demandLevel: "Strong Demand",
      badgeColor: "sky"
    },
    priceTrend: {
      rate: "+4.2%",
      label: "Regional Average",
      status: "Upward Trend",
      badgeColor: "cyan"
    },
    recommendedMarket: {
      harbor: "Mangaluru Main Harbor",
      reason: "Highest volume auction buyer turnout",
      badgeColor: "amber"
    }
  },

  speciesData: [
    {
      id: "mackerel",
      species: "Indian Mackerel",
      localName: "Bangude",
      price: 195,
      priceFormatted: "₹195/kg",
      prevPrice: 187,
      change: "+4.3%",
      isPositive: true,
      demand: "High Demand",
      demandType: "success",
      supply: "Moderate",
      supplyType: "info",
      trend: "Rising ↑",
      trendType: "success",
      market: "Mangaluru Main Harbor",
      recommendedMarket: "Mangaluru Main Harbor",
      sellingOpportunity: "Strong",
      lastUpdated: "Issued 30 mins ago"
    },
    {
      id: "sardine",
      species: "Sardine",
      localName: "Tarli",
      price: 155,
      priceFormatted: "₹155/kg",
      prevPrice: 155,
      change: "0.0%",
      isPositive: true,
      demand: "High Demand",
      demandType: "success",
      supply: "High",
      supplyType: "warning",
      trend: "Stable →",
      trendType: "info",
      market: "Ullal Landing Center",
      recommendedMarket: "Mangaluru Main Harbor",
      sellingOpportunity: "Moderate",
      lastUpdated: "Issued 45 mins ago"
    },
    {
      id: "tuna",
      species: "Tuna",
      localName: "Kedar",
      price: 280,
      priceFormatted: "₹280/kg",
      prevPrice: 272,
      change: "+2.9%",
      isPositive: true,
      demand: "Moderate Demand",
      demandType: "info",
      supply: "Low",
      supplyType: "success",
      trend: "Rising ↑",
      trendType: "success",
      market: "Malpe Harbor",
      recommendedMarket: "Malpe Harbor",
      sellingOpportunity: "Strong",
      lastUpdated: "Issued 1 hr ago"
    },
    {
      id: "pomfret",
      species: "Pomfret",
      localName: "Manji",
      price: 480,
      priceFormatted: "₹480/kg",
      prevPrice: 495,
      change: "-3.0%",
      isPositive: false,
      demand: "High Demand",
      demandType: "success",
      supply: "Moderate",
      supplyType: "info",
      trend: "Falling ↓",
      trendType: "danger",
      market: "Mangaluru Main Harbor",
      recommendedMarket: "Mangaluru Main Harbor",
      sellingOpportunity: "Moderate",
      lastUpdated: "Issued 1.5 hrs ago"
    },
    {
      id: "anchovy",
      species: "Anchovy",
      localName: "Nethili",
      price: 130,
      priceFormatted: "₹130/kg",
      prevPrice: 125,
      change: "+4.0%",
      isPositive: true,
      demand: "Moderate Demand",
      demandType: "info",
      supply: "Moderate",
      supplyType: "info",
      trend: "Rising ↑",
      trendType: "success",
      market: "Ullal Landing Center",
      recommendedMarket: "Ullal Landing Center",
      sellingOpportunity: "Moderate",
      lastUpdated: "Issued 2 hrs ago"
    },
    {
      id: "kingfish",
      species: "Kingfish",
      localName: "Surmai",
      price: 620,
      priceFormatted: "₹620/kg",
      prevPrice: 598,
      change: "+3.6%",
      isPositive: true,
      demand: "High Demand",
      demandType: "success",
      supply: "Low",
      supplyType: "success",
      trend: "Rising ↑",
      trendType: "success",
      market: "Mangaluru Main Harbor",
      recommendedMarket: "Mangaluru Main Harbor",
      sellingOpportunity: "Strong",
      lastUpdated: "Issued 2 hrs ago"
    }
  ],

  marketPricesMap: {
    "mangaluru": {
      "mackerel": 195,
      "sardine": 155,
      "tuna": 275,
      "pomfret": 480,
      "anchovy": 128,
      "kingfish": 620
    },
    "malpe": {
      "mackerel": 190,
      "sardine": 150,
      "tuna": 285,
      "pomfret": 475,
      "anchovy": 125,
      "kingfish": 615
    },
    "ullal": {
      "mackerel": 185,
      "sardine": 158,
      "tuna": 270,
      "pomfret": 465,
      "anchovy": 132,
      "kingfish": 605
    },
    "honnavar": {
      "mackerel": 182,
      "sardine": 148,
      "tuna": 280,
      "pomfret": 470,
      "anchovy": 122,
      "kingfish": 610
    }
  },

  priceTrendHistory: {
    "mackerel": [
      { day: "Aug 16", price: 175 },
      { day: "Aug 17", price: 178 },
      { day: "Aug 18", price: 182 },
      { day: "Aug 19", price: 180 },
      { day: "Aug 20", price: 185 },
      { day: "Aug 21", price: 187 },
      { day: "Today", price: 195 }
    ],
    "sardine": [
      { day: "Aug 16", price: 145 },
      { day: "Aug 17", price: 148 },
      { day: "Aug 18", price: 150 },
      { day: "Aug 19", price: 152 },
      { day: "Aug 20", price: 154 },
      { day: "Aug 21", price: 155 },
      { day: "Today", price: 155 }
    ],
    "tuna": [
      { day: "Aug 16", price: 260 },
      { day: "Aug 17", price: 265 },
      { day: "Aug 18", price: 268 },
      { day: "Aug 19", price: 270 },
      { day: "Aug 20", price: 272 },
      { day: "Aug 21", price: 272 },
      { day: "Today", price: 280 }
    ],
    "pomfret": [
      { day: "Aug 16", price: 510 },
      { day: "Aug 17", price: 505 },
      { day: "Aug 18", price: 500 },
      { day: "Aug 19", price: 498 },
      { day: "Aug 20", price: 495 },
      { day: "Aug 21", price: 495 },
      { day: "Today", price: 480 }
    ],
    "anchovy": [
      { day: "Aug 16", price: 120 },
      { day: "Aug 17", price: 122 },
      { day: "Aug 18", price: 122 },
      { day: "Aug 19", price: 124 },
      { day: "Aug 20", price: 125 },
      { day: "Aug 21", price: 125 },
      { day: "Today", price: 130 }
    ],
    "kingfish": [
      { day: "Aug 16", price: 580 },
      { day: "Aug 17", price: 585 },
      { day: "Aug 18", price: 590 },
      { day: "Aug 19", price: 592 },
      { day: "Aug 20", price: 595 },
      { day: "Aug 21", price: 598 },
      { day: "Today", price: 620 }
    ]
  },

  bestOpportunity: {
    species: "Indian Mackerel",
    market: "Mangaluru Main Harbor",
    priceFormatted: "₹195/kg",
    change: "+4.3% today",
    demand: "High Demand",
    reasons: [
      "✓ Strong buyer turnout from regional hotel & export distributors",
      "✓ Shortest distance from Zone A recommended fishing grounds (8 km)",
      "✓ Higher auction clearing rate compared to neighboring jetties",
      "✓ Steady price appreciation over the past 3 days (+8.3%)"
    ]
  },

  supplyChainSteps: [
    { step: 1, title: "Fisherman", desc: "Harvest fresh catch at sea" },
    { step: 2, title: "Landing Center", desc: "Jetty unloading & ice sorting" },
    { step: 3, title: "Harbor Market", desc: "Auction & price discovery" },
    { step: 4, title: "Auction / Buyer", desc: "Wholesale buyer bidding" },
    { step: 5, title: "Retail / Logistics", desc: "Cold chain transportation" },
    { step: 6, title: "Consumer", desc: "Fresh fish delivery to market" }
  ],

  aiInsight: {
    title: "🤖 MatsyaSathi Market Insight",
    text: "Indian Mackerel currently shows strong market demand (+4.3%) at Mangaluru Main Harbor. Connecting your predicted yield (80–110 kg) with current rates yields an estimated gross valuation of ₹15,600 – ₹21,450.",
    disclaimer: "This is decision-support information and should not be treated as guaranteed market pricing or income."
  }
};

export default marketData;
