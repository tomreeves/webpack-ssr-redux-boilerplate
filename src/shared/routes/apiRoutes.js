import TestMapper from '../../server/mappers/TestMapper'

const apiRoutes = [
  {
    path: /^\/api\/test$/,
    handler: TestMapper,
  },
]

export default apiRoutes
