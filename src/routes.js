import React from 'react'
import Home from './client/App/containers/Home.jsx'

/**
 * These routes are required server side. We match the path to a
 * given component, and check if the component has any data needs.
 *
 * If the component has any 'needs' (essentially a Redux action),
 * we dispatch the 'need' and send the data down to the client as part
 * of the initial Redux store.
 */
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/dynamic-url/:slug',
    component: Home,
  },
]

export default routes
