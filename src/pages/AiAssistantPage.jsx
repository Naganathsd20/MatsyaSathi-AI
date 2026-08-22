import React, { useState } from 'react';
import { aiAssistantData } from '../data/aiAssistantData';

import AIAssistantHeader from '../components/aiAssistant/AIAssistantHeader';
import AIAssistantIntro from '../components/aiAssistant/AIAssistantIntro';
import AIChatWindow from '../components/aiAssistant/AIChatWindow';
import AIInput from '../components/aiAssistant/AIInput';
import SuggestedQuestions from '../components/aiAssistant/SuggestedQuestions';
import AIQuickActions from '../components/aiAssistant/AIQuickActions';
import AILimitationsCard from '../components/aiAssistant/AILimitationsCard';

export const AiAssistantPage = () => {
  const ai = aiAssistantData;
  const [messages, setMessages] = useState([ai.initialMessage]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = (userQuery) => {
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      time: "Just now",
      text: userQuery
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsThinking(true);

    // Simulate short thinking delay for realistic assistant feel
    setTimeout(() => {
      const resp = ai.generateResponse(userQuery);

      const assistantMsg = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        time: "Just now",
        text: resp.text,
        sources: resp.sources,
        cardType: resp.cardType,
        cardData: resp.cardData
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsThinking(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([ai.initialMessage]);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Header */}
      <AIAssistantHeader headerData={ai.header} />

      {/* 2. Intro Welcome Card */}
      <AIAssistantIntro />

      {/* 3. Main Chat Interface Container */}
      <div className="space-y-4">
        <AIChatWindow
          messages={messages}
          isThinking={isThinking}
          onClearChat={handleClearChat}
        />

        {/* 4. Suggested Questions Prompts */}
        <SuggestedQuestions
          questions={ai.suggestedQuestions}
          onSelectQuestion={handleSendMessage}
          disabled={isThinking}
        />

        {/* 5. Input Field Bar */}
        <AIInput
          onSendMessage={handleSendMessage}
          isThinking={isThinking}
        />
      </div>

      {/* 6. Quick Actions Module Navigation */}
      <AIQuickActions actions={ai.quickActions} />

      {/* 7. AI Limitations & Advisory Boundaries */}
      <AILimitationsCard />
    </div>
  );
};

export default AiAssistantPage;
