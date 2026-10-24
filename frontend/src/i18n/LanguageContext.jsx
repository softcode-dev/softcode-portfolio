/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

const STORAGE_KEY = 'softcode-lang'
const SUPPORTED_LANGS = ['uz', 'ru', 'en']
const DEFAULT_LANG = 'uz'

function getInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored

  // Try browser language
  const browserLang = navigator.language?.slice(0, 2)
  if (browserLang === 'ru') return 'ru'
  if (browserLang === 'en') return 'en'

  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = useCallback((newLang) => {
    if (SUPPORTED_LANGS.includes(newLang)) {
      setLangState(newLang)
      localStorage.setItem(STORAGE_KEY, newLang)
      document.documentElement.lang = newLang
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback(
    (key) => {
      const keys = key.split('.')
      let value = translations[lang]
      for (const k of keys) {
        value = value?.[k]
      }
      return value ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
