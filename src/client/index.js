import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import createStore from '../shared/store'
import App from './App.jsx'
import theme from '../shared/theme'

const store = createStore(window.__INITIAL_REDUX__STATE__)

delete window.__INITIAL_REDUX__STATE__

hydrate(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('app')
)
