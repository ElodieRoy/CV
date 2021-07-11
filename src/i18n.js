import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import translationEN from "translation/en.json"
import translationFR from "translation/fr.json"

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
}

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    supportedLngs: ["fr", "en"],
    resources,
    detection: {
      order: ["cookie", "htmlTag"],
      caches: ["cookie"]
    }
  })

export default i18n
