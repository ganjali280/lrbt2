import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const value = {
    theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
