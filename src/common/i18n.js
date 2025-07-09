import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Permite cargar las traducciones desde archivos JSON
  .use(LanguageDetector) // Detecta automáticamente el idioma del usuario
  .use(initReactI18next) // Integra con React
  .init({
    
    fallbackLng: 'en', // Idioma predeterminado si el idioma del usuario no está soportado
    supportedLngs: ['en', 'es'], // Idiomas soportados
    load: 'languageOnly',
    lng: 'es', // Forzar español
    debug: process.env.NODE_ENV === 'development', // Activa el modo debug en desarrollo
    ns: ['common'], // Namespace que se usará
    defaultNS: 'common', // Namespace predeterminado
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    react: {
      useSuspense: false, // Desactiva Suspense para SSR
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta para cargar los archivos JSON de traducción
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;
