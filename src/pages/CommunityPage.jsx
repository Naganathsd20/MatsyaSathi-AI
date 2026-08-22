import React, { useState } from 'react';
import { communityData } from '../data/communityData';

import CommunityHeader from '../components/community/CommunityHeader';
import FeaturedFishingTip from '../components/community/FeaturedFishingTip';
import CommunityCategoryFilters from '../components/community/CommunityCategoryFilters';
import CommunityPostCard from '../components/community/CommunityPostCard';
import SeasonalFishingGuide from '../components/community/SeasonalFishingGuide';
import SpeciesKnowledgeCard from '../components/community/SpeciesKnowledgeCard';
import CommunityInsights from '../components/community/CommunityInsights';
import CommunityKnowledgeFlow from '../components/community/CommunityKnowledgeFlow';
import CommunityGuidelines from '../components/community/CommunityGuidelines';

import WeatherTipsCard from '../components/community/WeatherTipsCard';
import SafetyTipsCard from '../components/community/SafetyTipsCard';
import FishingZoneTipsCard from '../components/community/FishingZoneTipsCard';
import MarketTipsCard from '../components/community/MarketTipsCard';

export const CommunityPage = () => {
  const cd = communityData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = cd.posts.filter(post => {
    if (activeCategory === "All") return true;
    return post.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Community Header */}
      <CommunityHeader headerData={cd.header} />

      {/* 2. Featured Tip / Tip of the Day */}
      <FeaturedFishingTip tip={cd.featuredTip} />

      {/* 3. Category Filters & Community Posts Grid */}
      <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">💬 Community Knowledge Exchange</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-medium">
                {filteredPosts.length} Posts Available
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Peer advice, gear observations, and practical regional ocean wisdom.
            </p>
          </div>

          <CommunityCategoryFilters
            categories={cd.categories}
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <CommunityPostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full p-8 text-center glass-panel rounded-2xl border border-slate-800 text-xs text-slate-400">
              No prototype community posts match the selected category.
            </div>
          )}
        </div>
      </div>

      {/* 4. Seasonal Fishing Guide */}
      <SeasonalFishingGuide guide={cd.seasonalGuide} />

      {/* 5. Species Knowledge Cards */}
      <SpeciesKnowledgeCard speciesList={cd.speciesKnowledge} />

      {/* 6. Community Insights */}
      <CommunityInsights insights={cd.communityInsights} />

      {/* 7. Cross-Module Context Cards Grid (Phases 3, 4, 6, 7 Integrations) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <WeatherTipsCard />
        <SafetyTipsCard />
        <FishingZoneTipsCard />
        <MarketTipsCard />
      </div>

      {/* 8. Community Knowledge Integration Flow */}
      <CommunityKnowledgeFlow steps={cd.knowledgeFlowSteps} />

      {/* 9. Community Guidelines & Disclaimer */}
      <CommunityGuidelines guidelines={cd.guidelines} />
    </div>
  );
};

export default CommunityPage;
