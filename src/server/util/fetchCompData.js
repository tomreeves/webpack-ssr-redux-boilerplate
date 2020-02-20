import { matchPath } from 'react-router-dom'
import routes from '../../shared/routes/compRoutes'

/**
 * Takes an incoming request path and matches it to a component.
 *
 * If there are any data needs on the component (a redux action(s)),
 * we dispatch said data need(s) so that when the component renders on the server,
 * it has all of the information it needs.
 *
 * @param path {string}
 * @param store {Object}
 * @returns {Promise<Array>}
 */
export default async (path, store) => {
  const matchedRoutes = routes.filter((route) => matchPath(path, route))

  if (matchedRoutes.length === 0) return

  const matchedComp = matchedRoutes.map((route) => route.component)[0]
  const loadedComp = await matchedComp.load() // call the Loadable load() method to get the needs
  const needs = loadedComp.default.dataNeeds
  const promises = Array.isArray(needs)
    ? needs.map((need) => store.dispatch(need()))
    : []

  return await Promise.all(promises)
}
