import { matchPath } from 'react-router-dom'
import routes from '../routes/compRoutes'

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
export default (path, store) => {
  const matchedRoutes = routes.filter((route) => matchPath(path, route))

  if (matchedRoutes.length === 0) return [false]

  const dataNeeds = matchedRoutes
    .map((route) => route.component)
    .map((comp) => comp.dataNeeds)

  const promises = dataNeeds[0].map((req) => store.dispatch(req()))

  return promises
}
