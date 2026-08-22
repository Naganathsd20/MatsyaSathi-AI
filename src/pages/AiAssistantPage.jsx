import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { Bot } from 'lucide-react';

export const AiAssistantPage = () => {
  return (
    <PlaceholderPage
      title="Multilingual AI Companion"
      subtitle="Voice & text AI smart assistant answering fishing queries in regional languages (Kannada, Malayalam, Tamil, Hindi, English)."
      icon={Bot}
      phaseTag="Coming in Phase 3"
      roadmapPhase="Phase 3"
      plannedFeatures={[
        "Hands-free voice assistant for hands wet at sea",
        "Multilingual marine regulation & subsidies advisor",
        "Species identification from smartphone catch photo",
        "Real-time sea query & engine troubleshooting assistant"
      ]}
    />
  );
};

export default AiAssistantPage;
