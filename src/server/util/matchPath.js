export default (routes, path) => {
  const matches = routes.find((route) => {
    return (
      route.path &&
      typeof (route.path.test === 'function') &&
      route.path.test(path)
    )
  })

  return matches
}
