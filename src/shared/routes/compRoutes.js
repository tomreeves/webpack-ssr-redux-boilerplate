import loadable from '@loadable/component'

const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ '../../client/app/containers/Home.jsx')
)
const Test = loadable(() =>
  import(/* webpackChunkName: "Test" */ '../../client/app/containers/Test.jsx')
)

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
    path: '/test',
    component: Test,
  },
]

export default routes
