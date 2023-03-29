import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import traslationES from '@/locales/es/global.json'
import traslationEN from '@/locales/en/global.json'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: traslationES
    },
    en: {
      translation: traslationEN
    }
  },
  lng: 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
