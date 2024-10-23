import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    backend: {
      // Путь к файлам перевода с использованием пространства имен
      loadPath: '/TenderAgro/locales/{{lng}}/{{ns}}.json',  
    },
    interpolation: {
      escapeValue: false, // React уже защищает от XSS
    },
    ns: ["flakes", "common"], // Указываем пространства имен, которые будут использоваться
    defaultNS: "common", // Пространство имен по умолчанию
    fallbackNS: "common", // В случае, если перевод в основном пространстве не найден
  });

export default i18n; 