import React, { useState } from 'react';
import { HardDrive, RefreshCw, Trash2, CheckCircle2 } from 'lucide-react';
import Button from '../Button';

export const OfflineCacheCard = ({ cacheInfo }) => {
  const [isAutoSync, setIsAutoSync] = useState(cacheInfo.isAutoSync);
  const [cleared, setCleared] = useState(false);

  const handleClearCache = () => {
    setCleared(true);
    setTimeout(() => setCleared(false), 3000);
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 bg-[#0B253C] flex flex-col justify-between space-y-4 h-full shadow-md">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#071F33] border border-emerald-500/40 text-emerald-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">💾 Offline Map & Data Cache</h3>
              <span className="text-[10px] text-slate-400 font-medium">Zero-Network Offshore Storage</span>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/40">
            {cleared ? 'Cache Cleared' : cacheInfo.totalStorageMB}
          </span>
        </div>

        <div className="space-y-2.5 my-3 text-xs">
          <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 flex justify-between items-center shadow-md">
            <span className="text-slate-300 font-medium">Coastal Coverage:</span>
            <span className="font-extrabold text-white">{cacheInfo.regionCoverage}</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 flex justify-between items-center shadow-md">
            <span className="text-slate-300 font-medium">Cached Map Tiles:</span>
            <span className="font-extrabold text-cyan-300 font-mono">{cleared ? 0 : cacheInfo.tileCount} Tiles</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#071F33] border border-cyan-900/40 flex justify-between items-center shadow-md">
            <span className="text-slate-300 font-medium">Auto-Sync on Harbor Wi-Fi:</span>
            <button
              onClick={() => setIsAutoSync(!isAutoSync)}
              className={`px-3 py-1 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                isAutoSync
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {isAutoSync ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-cyan-900/30 flex items-center justify-between text-xs">
        <span className="text-[10px] text-slate-400 font-bold">Last Sync: {cacheInfo.lastSynced}</span>
        <Button size="sm" variant="outline" onClick={handleClearCache} icon={Trash2}>
          {cleared ? 'Cleared' : 'Clear Cache'}
        </Button>
      </div>
    </div>
  );
};

export default OfflineCacheCard;
