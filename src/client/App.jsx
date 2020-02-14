import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import loadable from '@loadable/component'
import { ThemeProvider } from 'styled-components'

import useTheme from './app/hooks/useTheme/useTheme'
import themes from '../shared/theme'

const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ './app/containers/Home.jsx')
)
const Test = loadable(() =>
  import(/* webpackChunkName: "Test" */ './app/containers/Test.jsx')
)

const App = () => {
  const [theme, setTheme] = useTheme()

  return (
    <ThemeProvider theme={themes[theme]}>
      <h1>Hello!</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/test'>Test</NavLink>
        </li>
      </ul>

      <div>
        {`The current theme is ${theme}`}
        <button onClick={() => setTheme('dark')}>Set to dark mode</button>
        <button onClick={() => setTheme('light')}>Set to light mode</button>
      </div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
