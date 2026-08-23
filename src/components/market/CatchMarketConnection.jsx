import React from 'react';
import { TrendingUp, ShoppingBag, ArrowRight, Info, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const CatchMarketConnection = ({ activeSpecies }) => {
  const minKg = 80;
  const maxKg = 110;
  const price = activeSpecies.price || 195;

  const minGross = (minKg * price).toLocaleString();
  const maxGross = (maxKg * price).toLocaleString();

  return (
    <div className="glass-card rounded-3xl p-6 border border-emerald-500/40 bg-[#0B2A1E]/90 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-500/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-emerald-500/40 text-emerald-400 shadow-md">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">💰 Catch & Market Valuation Integration</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                Catch & Market Yield Sync
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Connect predicted catch yield with current harbor auction prices.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/catch-prediction">
            <Button size="sm" variant="outline" icon={ArrowRight} iconPosition="right">
              View Catch Prediction
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Predicted Catch (Zone A)</span>
          <span className="text-base font-extrabold text-white mt-0.5 block">{minKg}–{maxKg} kg</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Active Fish Species</span>
          <span className="text-base font-extrabold text-amber-300 mt-0.5 block">{activeSpecies.species}</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#0B253C] border border-cyan-900/40 shadow-md">
          <span className="text-[10px] text-slate-400 font-bold block">Harbor Rate / kg</span>
          <span className="text-base font-extrabold text-cyan-300 mt-0.5 block">₹{price}/kg</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 shadow-md">
          <span className="text-[10px] text-emerald-300 font-bold block">Estimated Gross Value</span>
          <span className="text-lg font-black text-emerald-400 mt-0.5 block">₹{minGross} – ₹{maxGross}</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Estimated Gross Value range. Does not account for fuel costs or auction commission.</span>
        </span>
      </div>
    </div>
  );
};

export default CatchMarketConnection;
