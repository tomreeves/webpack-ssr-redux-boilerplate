import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './app/containers/Home.jsx'

const App = () => {
  return (
    <>
      <h1>Hello!</h1>

      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
