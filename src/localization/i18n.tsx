import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        "ADD PRODUCTS": "Add Products",
        "HOME": "Home",
        "PRODUCTS": "Products",
        "ADMIN":"Admin",
        "LANGUAGE": "Language",
        "ADD BASKET": "Add basket",
        "FILTER": "Filter",
        "SEARCH": "Search",
        "DELETE": "Delete",
        "ASYNC":"ASYNC",
        "LOADING":"LOADING"
    },
  },
  az: {
    translation: {
      "ADD PRODUCTS": "Məhsullar əlavə et",
      "HOME": "Ana Səhifə",
      "PRODUCTS": "Məhsullar",
      "ADMIN":"Admin",
      "LANGUAGE": "Dil",
      "ADD BASKET": "Səbətə əlavə et",
      "FILTER": "Filtirlə",
      "SEARCH": "Axtar",
      "DELETE": "Sil",
      "ASYNC":"SYNX",
      "LOADING":"Yüklənir",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "az",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
