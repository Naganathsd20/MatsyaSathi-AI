import React from 'react';
import { weatherData } from '../data/weatherData';

import WeatherHeader from '../components/weather/WeatherHeader';
import CurrentWeatherGrid from '../components/weather/CurrentWeatherGrid';
import SeaConditionIndexCard from '../components/weather/SeaConditionIndexCard';
import FishingWindowCard from '../components/weather/FishingWindowCard';
import WeatherForecastGrid from '../components/weather/WeatherForecastGrid';
import WindWaveDetailsCard from '../components/weather/WindWaveDetailsCard';
import ConditionTrendCard from '../components/weather/ConditionTrendCard';
import WeatherInsightCard from '../components/weather/WeatherInsightCard';

export const WeatherPage = () => {
  const w = weatherData;

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Page Header */}
      <WeatherHeader headerData={w.header} />

      {/* 2. Current Conditions Grid (6 Metrics) */}
      <CurrentWeatherGrid currentData={w.current} />

      {/* 3. Sea Condition Index & Fishing Guidance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <SeaConditionIndexCard seaIndex={w.seaConditionIndex} />
        <FishingWindowCard fishingCondition={w.fishingCondition} />
      </div>

      {/* 4. Weather Forecast (3-Day Grid) */}
      <WeatherForecastGrid forecast={w.forecast} />

      {/* 5. Wind & Wave Hydrodynamic Parameters */}
      <WindWaveDetailsCard marineDetails={w.windWaveDetails} />

      {/* 6. Next 12 Hours Condition Trend */}
      <ConditionTrendCard hourlyTrend={w.hourlyTrend} />

      {/* 7. MatsyaSathi Weather Insight Card */}
      <WeatherInsightCard aiInsight={w.aiInsight} />
    </div>
  );
};

export default WeatherPage;
