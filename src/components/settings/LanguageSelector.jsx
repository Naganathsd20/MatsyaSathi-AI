import React from 'react';
import { Languages, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const supportedLanguages = [
    { id: "en", name: "English", nativeName: "English", flag: "🇬🇧", preview: "Safer Seas. Smarter Fishing." },
    { id: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", preview: "ಸುರಕ್ಷಿತ ಸಮುದ್ರ. ಜಾಣ ಮೀನುಗಾರಿಕೆ." },
    { id: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", preview: "सुरक्षित समुद्र। स्मार्ट मत्स्य पालन।" }
  ];

  return (
    <div className="glass-card rounded-3xl p-6 border border-cyan-900/40 space-y-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#071F33] border border-cyan-900/40 text-cyan-400">
            <Languages className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">{t('settings.languageTitle')}</h2>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              {t('settings.languageSubtitle')}
            </p>
          </div>
        </div>

        <span className="text-xs text-cyan-400 font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          3 Languages Supported (English • ಕನ್ನಡ • हिन्दी)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {supportedLanguages.map((lang) => {
          const isSelected = lang.id === language;

          return (
            <button
              key={lang.id}
              onClick={() => setLanguage(lang.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg scale-[1.02]'
                  : 'bg-[#0B253C] border-cyan-900/40 hover:border-cyan-400/50 hover:bg-[#0E2F4C]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-2xl">{lang.flag}</span>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />}
                </div>

                <div className="font-black text-white text-base">{lang.name}</div>
                <div className="text-sm font-extrabold text-cyan-300 mt-0.5">{lang.nativeName}</div>
              </div>

              <div className="mt-3 pt-2 border-t border-cyan-900/30">
                <span className="text-xs text-slate-300 block line-clamp-1 italic font-medium">"{lang.preview}"</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
