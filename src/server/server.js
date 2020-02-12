import 'regenerator-runtime/runtime'

import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'

import App from '../client/App.jsx'
import createStore from '../shared/store'
import { fetchCompData, getTemplate } from './util'
import CONFIG from './config'
import theme from '../shared/theme'
import apiHandler from './handlers/apiHandler'

const server = express()

server.use(express.static(CONFIG.__PUBLIC_DIR__))

server.get('/api/*', (req, res) => {
  return apiHandler(req, res)
})

server.get('*', (req, res) => {
  const store = createStore()
  const promises = fetchCompData(req.url, store).filter(Boolean)
  const sheet = new ServerStyleSheet()

  Promise.all(promises).then(() => {
    const context = {}
    const html = (
      <ReduxProvider store={store}>
        <StaticRouter location={req.path} context={context}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StaticRouter>
      </ReduxProvider>
    )
    const htmlToString = renderToString(sheet.collectStyles(html))
    const reduxState = store.getState()
    const styleSheets = sheet.getStyleTags()

    res.send(getTemplate(htmlToString, reduxState, styleSheets))
  })
})

server.listen(CONFIG.PORT, () => {
  console.log(`Server listening at port ${CONFIG.PORT}`)
})
