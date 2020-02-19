import { matchPath } from 'react-router-dom'
import routes from '../../shared/routes/compRoutes'

/**
 * Takes a routes array and works out if it has any `needs`
 *
 * `Needs` are a static array on any given class (and also declared in routes.js)
 * They will populate the store server-side with any provided action(s).
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
