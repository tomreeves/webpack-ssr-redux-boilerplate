import TestMapper from './mappers/TestMapper'

export default [
  {
    path: /^\/api\/test$/,
    handler: TestMapper,
  },
]
