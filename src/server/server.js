import 'regenerator-runtime/runtime'

import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { ChunkExtractor } from '@loadable/server'

import App from '../client/App.jsx'
import createStore from '../shared/store'
import { fetchCompData, getTemplate } from './util'
import config from './config'
import theme from '../shared/theme'
import apiHandler from './handlers/apiHandler'

const server = express()

server.use(express.static(config.__PUBLIC_DIR__))

server.get('/api/*', (req, res) => {
  return apiHandler(req, res)
})

server.get('*', (req, res) => {
  const store = createStore()
  const promises = fetchCompData(req.url, store).filter(Boolean)
  const statsFile = config.__LOADABLE_STATS__
  const sheet = new ServerStyleSheet()
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['app'] })

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
    const htmlToString = renderToString(
      sheet.collectStyles(extractor.collectChunks(html))
    )
    const reduxState = store.getState()
    const styleSheets = sheet.getStyleTags()

    res.send(getTemplate(htmlToString, reduxState, styleSheets, extractor))
  })
})

server.listen(config.PORT, () => {
  console.log(`Server listening at port ${config.PORT}`)
})
