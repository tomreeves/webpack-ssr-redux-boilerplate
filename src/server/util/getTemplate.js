/**
 * Takes the application rendered to a string and the initial redux store.
 * Returns the application as a HTML page.
 *
 * @param reactDOM {string}
 * @param reduxState {object}
 * @param styleSheets {string}
 * @returns {string}
 */
export default (reactDOM, reduxState, styleSheets, extractor) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <base href="/">
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="data:,">
        <link href="normalise.css" rel="stylesheet" type="text/css">
        ${styleSheets}
      </head>
      <body>
        <div id="app">${reactDOM}</div>
        ${extractor.getScriptTags()}
        <script>
          window.__INITIAL_REDUX__STATE__ = ${JSON.stringify(reduxState)}
        </script>
      </body>
    </html>`
}
