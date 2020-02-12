import path from 'path'

export default {
  PORT: 3000,
  __PUBLIC_DIR__: path.resolve(__dirname, '../../../public'),
  __LOADABLE_STATS__: path.resolve(
    __dirname,
    '../../../public/dist/loadable-stats.json'
  ),
}
