import lightTheme from './lightTheme'
import darkTheme from './darkTheme'
import { themeTypes } from '../client/app/hooks/useTheme/useTheme'

const themes = {
  [themeTypes.LIGHT]: lightTheme,
  [themeTypes.DARK]: darkTheme,
}

export default themes
