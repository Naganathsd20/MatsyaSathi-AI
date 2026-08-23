import React from 'react';
import { CloudSun, Target, TrendingUp, ShieldCheck, ShoppingBag, Navigation, Sparkles } from 'lucide-react';

export const AIResponseCard = ({ cardType, cardData }) => {
  if (!cardType || !cardData) return null;

  if (cardType === "weather") {
    return (
      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-xs space-y-2 my-2 shadow-md">
        <div className="flex items-center gap-2 font-extrabold text-white">
          <CloudSun className="w-4 h-4 text-cyan-400" />
          <span>Weather Snapshot</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300 font-medium">
          <div><span className="text-slate-400 block text-[10px] font-bold">Temp</span><span className="font-extrabold text-white">{cardData.temp}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Wind</span><span className="font-extrabold text-white">{cardData.wind}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Wave</span><span className="font-extrabold text-white">{cardData.wave}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Sea State</span><span className="font-extrabold text-emerald-400">{cardData.seaState}</span></div>
        </div>
      </div>
    );
  }

  if (cardType === "zone") {
    return (
      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-xs space-y-2 my-2 shadow-md">
        <div className="flex items-center justify-between font-extrabold text-white">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-cyan-400" />
            <span>Recommended Zone: {cardData.name}</span>
          </div>
          <span className="text-cyan-300 font-mono font-bold">{cardData.score}/100</span>
        </div>
        <div className="text-slate-300 flex justify-between text-[11px] font-medium">
          <span>Distance: {cardData.distance}</span>
          <span>Depth: {cardData.depth}</span>
          <span>Target Species: {cardData.species?.join(", ")}</span>
        </div>
      </div>
    );
  }

  if (cardType === "catch") {
    return (
      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-emerald-500/40 text-xs space-y-2 my-2 shadow-md">
        <div className="flex items-center justify-between font-extrabold text-white">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Estimated Yield: {cardData.range}</span>
          </div>
          <span className="text-emerald-300 font-black">{cardData.potential}</span>
        </div>
        <p className="text-slate-300 text-[11px] font-medium">Confidence: {cardData.confidence}% • {cardData.summary}</p>
      </div>
    );
  }

  if (cardType === "safety") {
    return (
      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-emerald-500/40 text-xs space-y-2 my-2 shadow-md">
        <div className="flex items-center gap-2 font-extrabold text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Safety Status: {cardData.status}</span>
        </div>
        <p className="text-slate-300 text-[11px] font-medium">{cardData.message}</p>
      </div>
    );
  }

  if (cardType === "market") {
    return (
      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-amber-500/40 text-xs space-y-2 my-2 shadow-md">
        <div className="flex items-center justify-between font-extrabold text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>{cardData.species}</span>
          </div>
          <span className="text-amber-300 font-mono font-black">{cardData.price} ({cardData.change})</span>
        </div>
        <div className="text-slate-300 text-[11px] flex justify-between font-medium">
          <span>Demand: {cardData.demand}</span>
          <span>Harbor: {cardData.harbor}</span>
        </div>
      </div>
    );
  }

  if (cardType === "trip") {
    return (
      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-xs space-y-2 my-2 shadow-md">
        <div className="flex items-center gap-2 font-extrabold text-cyan-300">
          <Navigation className="w-4 h-4 text-cyan-400" />
          <span>Voyage Plan ({cardData.vessel} → {cardData.zone})</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300 font-medium">
          <div><span className="text-slate-400 block text-[10px] font-bold">Depart</span><span className="font-extrabold text-white">{cardData.departure}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Return</span><span className="font-extrabold text-white">{cardData.return}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Fuel</span><span className="font-extrabold text-amber-300">{cardData.fuel}</span></div>
        </div>
      </div>
    );
  }

  if (cardType === "overview") {
    return (
      <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 text-xs space-y-2 my-2 shadow-md">
        <div className="flex items-center gap-2 font-extrabold text-cyan-300">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Integrated Daily Summary</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
          <div><span className="text-slate-400 block text-[10px] font-bold">Zone</span><span className="font-extrabold text-white">{cardData.zone}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Est Catch</span><span className="font-extrabold text-emerald-400">{cardData.catch}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Price</span><span className="font-extrabold text-amber-300">{cardData.price}</span></div>
          <div><span className="text-slate-400 block text-[10px] font-bold">Depart</span><span className="font-extrabold text-cyan-300">{cardData.departure}</span></div>
        </div>
      </div>
    );
  }

  return null;
};

export default AIResponseCard;
