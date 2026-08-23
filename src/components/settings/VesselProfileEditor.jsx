import React, { useState } from 'react';
import { Ship, Save, CheckCircle2 } from 'lucide-react';
import Button from '../Button';

export const VesselProfileEditor = ({ initialProfile, onSaveProfile }) => {
  const [profile, setProfile] = useState(initialProfile);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSaveProfile(profile);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Ship className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">🚤 Registered Vessel & Engine Profile</h2>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Manage your boat parameters to auto-populate trip planner fuel burn & capacity limits.
            </p>
          </div>
        </div>

        {isSaved && (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Profile Saved!</span>
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-white">Vessel Name</label>
            <input
              type="text"
              value={profile.vesselName}
              onChange={(e) => handleChange('vesselName', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 shadow-md"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-white">Registration Number</label>
            <input
              type="text"
              value={profile.registrationNo}
              onChange={(e) => handleChange('registrationNo', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-mono font-bold text-cyan-300 focus:outline-none focus:border-cyan-400 shadow-md"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-white">Category / Type</label>
            <select
              value={profile.vesselType}
              onChange={(e) => handleChange('vesselType', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 shadow-md"
            >
              <option value="Small Traditional Boat" className="bg-[#051726]">Small Traditional Boat</option>
              <option value="Small Motorized Boat" className="bg-[#051726]">Small Motorized Boat</option>
              <option value="Medium Fishing Vessel" className="bg-[#051726]">Medium Fishing Vessel</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-white">Engine Specs</label>
            <input
              type="text"
              value={profile.engineHp}
              onChange={(e) => handleChange('engineHp', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs text-white font-medium focus:outline-none focus:border-cyan-400 shadow-md"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-white">Fuel Tank Capacity (L)</label>
            <input
              type="number"
              value={profile.fuelCapacityL}
              onChange={(e) => handleChange('fuelCapacityL', Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs font-bold text-amber-300 focus:outline-none focus:border-cyan-400 shadow-md"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-white">Max Crew Capacity</label>
            <input
              type="number"
              value={profile.crewCapacity}
              onChange={(e) => handleChange('crewCapacity', Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-[#0B253C] border border-cyan-900/40 text-xs text-white font-medium focus:outline-none focus:border-cyan-400 shadow-md"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button type="submit" size="sm" variant="primary" icon={Save}>
            Save Vessel Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VesselProfileEditor;
