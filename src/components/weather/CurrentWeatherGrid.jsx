import React from 'react';
import { Thermometer, Wind, CloudRain, Eye, Waves, Compass } from 'lucide-react';

export const CurrentWeatherGrid = ({ currentData }) => {
  const metrics = [
    {
      title: "Temperature",
      value: currentData.temperature,
      subtitle: currentData.condition,
      icon: Thermometer,
      emoji: "🌡️",
      accent: "sky"
    },
    {
      title: "Wind Speed",
      value: currentData.windSpeed,
      subtitle: `Direction: ${currentData.windDirection}`,
      icon: Wind,
      emoji: "💨",
      accent: "cyan"
    },
    {
      title: "Rain Probability",
      value: currentData.rainProbability,
      subtitle: "Low chance of precipitation",
      icon: CloudRain,
      emoji: "🌧️",
      accent: "teal"
    },
    {
      title: "Visibility",
      value: currentData.visibility,
      subtitle: "Clear ocean line",
      icon: Eye,
      emoji: "👁️",
      accent: "sky"
    },
    {
      title: "Wave Height",
      value: currentData.waveHeight,
      subtitle: "Minor swell height",
      icon: Waves,
      emoji: "🌊",
      accent: "cyan"
    },
    {
      title: "Sea Condition",
      value: currentData.seaCondition,
      subtitle: "Suitable for coastal craft",
      icon: Compass,
      emoji: "🌊",
      accent: "emerald"
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {metrics.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            className="glass-card rounded-2xl p-4 border border-sky-500/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">{item.emoji}</span>
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xs font-medium text-slate-400">{item.title}</h3>
              <div className="text-xl font-bold text-slate-100 mt-1 tracking-tight">
                {item.value}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-800/80 truncate">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentWeatherGrid;
