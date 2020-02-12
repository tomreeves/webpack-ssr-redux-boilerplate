import React from 'react'
import Home from './client/App/containers/Home.jsx'

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
