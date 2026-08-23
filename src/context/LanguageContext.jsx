import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('matsya_app_language');
      return saved && ['en', 'kn', 'hi'].includes(saved) ? saved : 'en';
    } catch (e) {
      return 'en';
    }
  });

  const setLanguage = (newLang) => {
    if (['en', 'kn', 'hi'].includes(newLang)) {
      setLanguageState(newLang);
      try {
        localStorage.setItem('matsya_app_language', newLang);
      } catch (e) {
        console.error('Failed to persist language in localStorage', e);
      }
    }
  };

  // Traverses nested object path e.g. "dashboard.greeting"
  const getNestedValue = (obj, path) => {
    if (!obj || !path) return null;
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  };

  // Central translation lookup function with English fallback
  const t = (path, fallback = '') => {
    // 1. Try current language
    const currentDict = translations[language] || translations['en'];
    let value = getNestedValue(currentDict, path);

    // 2. Fallback to English if missing in current language
    if (!value && language !== 'en') {
      value = getNestedValue(translations['en'], path);
    }

    // 3. Ultimate fallback
    return value || fallback || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
