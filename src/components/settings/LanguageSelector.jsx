import React from 'react';
import { Languages, CheckCircle2 } from 'lucide-react';

export const LanguageSelector = ({ languages, selectedLangId, onSelectLanguage }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-sky-500/20 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Languages className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">🌐 Regional Language Preferences</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Select your preferred regional language for UI labels, voice prompts, and safety alerts.
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400">
          5 Languages Supported
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {languages.map((lang) => {
          const isSelected = lang.id === selectedLangId;

          return (
            <button
              key={lang.id}
              onClick={() => onSelectLanguage(lang.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-500/20 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-950/60 scale-[1.02]'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-2xl">{lang.flag}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                </div>

                <div className="font-bold text-slate-100 text-sm">{lang.name}</div>
                <div className="text-xs font-semibold text-cyan-300 font-mono mt-0.5">{lang.nativeName}</div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 block line-clamp-1 italic">"{lang.preview}"</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
