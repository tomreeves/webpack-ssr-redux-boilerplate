import { useState } from 'react'

export const themeTypes = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const defaultTheme = themeTypes.LIGHT

const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme)
  return [theme, (newTheme) => setTheme(newTheme)]
}

export default useTheme
