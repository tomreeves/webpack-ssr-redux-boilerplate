import TestMapper from '../../server/mappers/TestMapper'

export default [
  {
    path: /^\/api\/test$/,
    handler: TestMapper,
  },
]
