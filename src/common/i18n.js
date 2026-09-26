import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../../public/locales/en/common.json';
import es from '../../public/locales/es/common.json';

export const defaultLanguage = 'en';
export const supportedLanguages = ['en', 'es'];

// Bundled dictionaries also work on GitHub Pages without translation fetches.
// Keep export and initial browser render identical; restore preferences on mount.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { en: { common: en }, es: { common: es } },
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    load: 'languageOnly',
    ns: ['common'],
    defaultNS: 'common',
    initImmediate: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false, bindI18nStore: 'added' },
  });
} else {
  // Fast Refresh preserves the instance; refresh its bundled copy as JSON changes.
  // Do not reinitialize: that would reset the visitor's selected language.
  i18n.addResourceBundle('en', 'common', en, true, true);
  i18n.addResourceBundle('es', 'common', es, true, true);
}

export function restoreBrowserLanguage() {
  const detector = new LanguageDetector();
  detector.init(null, {
    order: ['localStorage'],
    lookupLocalStorage: 'i18nextLng',
    caches: ['localStorage'],
  });
  const detected = detector.detect();
  const candidates = Array.isArray(detected) ? detected : [detected];
  const language = candidates
    .filter((value) => typeof value === 'string')
    .map((value) => value.toLowerCase().split('-')[0])
    .find((value) => supportedLanguages.includes(value)) || defaultLanguage;

  const persistLanguage = (lng) => {
    detector.cacheUserLanguage(lng);
    document.documentElement.lang = lng;
  };
  i18n.on('languageChanged', persistLanguage);
  i18n.changeLanguage(language);
  return () => i18n.off('languageChanged', persistLanguage);
}

export default i18n;
