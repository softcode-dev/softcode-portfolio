/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

const STORAGE_KEY = 'softcode-theme'
const DARK_THEME = 'night'
const LIGHT_THEME = 'light'

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  // Default to dark (current design)
  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  const setTheme = useCallback((newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setThemeState(newTheme)
      localStorage.setItem(STORAGE_KEY, newTheme)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const isDark = theme === 'dark'

  useEffect(() => {
    const daisyTheme = theme === 'dark' ? DARK_THEME : LIGHT_THEME
    document.documentElement.setAttribute('data-theme', daisyTheme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')

    // Update color-scheme
    document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light'
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
