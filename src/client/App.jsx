import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ './app/containers/Home.jsx')
)
const Test = loadable(() =>
  import(/* webpackChunkName: "Test" */ './app/containers/Test.jsx')
)

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
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </>
  )
}

export default App
