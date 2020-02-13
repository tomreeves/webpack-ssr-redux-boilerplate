import routes from '../routes/apiRoutes'
import matchPath from '../util/matchPath'

export default (req, res) => {
  const mapper = matchPath(routes, req.path)

  if (mapper) {
    const handler = new mapper.handler(req)

    handler.send().then((response) => {
      return res.status(200).json(response)
    })
  } else {
    return res.status(204).send()
  }
}
