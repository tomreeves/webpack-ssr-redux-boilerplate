import loadable from '@loadable/component'

const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ '../../client/app/containers/Home.jsx')
)
const Test = loadable(() =>
  import(/* webpackChunkName: "Test" */ '../../client/app/containers/Test.jsx')
)

/**
 * Client: mapped in the React Router <Switch />
 *
 * Server: matched against the incoming request path
 *         to get the data needs 
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
