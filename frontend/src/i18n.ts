import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "fr",
    lng: "fr",
    debug: true,
    ns: ["common", "home", "menu"],
    defaultNS: "common",
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
  })
// .then(() => {
//   console.log("i18next initialized successfully");
// })
// .catch((error) => {
//   console.error("i18next initialization failed", error);
// });

i18next.loadNamespaces("home").then(() => {
  console.log("Namespace 'home' loaded");
});

export default i18next;
