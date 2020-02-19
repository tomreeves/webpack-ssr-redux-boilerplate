import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import compRoutes from '../shared/routes/compRoutes'

const App = () => {
  return (
    <>
      <h1>Hello!</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/test'>Test</NavLink>
        </li>
      </ul>

      <Switch>
        {compRoutes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  )
}

export default App
