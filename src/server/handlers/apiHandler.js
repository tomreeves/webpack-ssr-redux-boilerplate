import apiRoutes from '../../shared/routes/apiRoutes'
import matchPath from '../util/matchPath'

export default (req, res) => {
  const mapper = matchPath(apiRoutes, req.path)

  if (mapper) {
    const handler = new mapper.handler(req)

    handler.send().then((response) => {
      return res.status(200).json(response)
    })
  } else {
    return res.status(204).send()
  }
}
