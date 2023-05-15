import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './components/local/en.json';
import ar from './components/local/ar.json';
import languageDetector from 'i18next-browser-languagedetector';

// the translations
const resources = {
    en: {
        translation: en,
    },
    ar: {
        translation: ar,
    },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;