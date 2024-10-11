import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from "i18next-http-backend"

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({ 
    fallbackLng: "ru",
    backend: {
      loadPath: '/TenderAgro/locales/{{lng}}/translation.json'  // Путь к файлам перевода
    },
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
});

export default i18n;