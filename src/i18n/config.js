import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import huTranslation from './locales/hu/translation.json';
import esTranslation from './locales/es/translation.json';
import quTranslation from './locales/qu/translation.json';

const resources = {
  hu: {
    translation: huTranslation
  },
  es: {
    translation: esTranslation
  },
  qu: {
    translation: quTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 