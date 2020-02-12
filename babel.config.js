module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV === 'production')

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@loadable/babel-plugin',
      'babel-plugin-styled-components',
    ],
  }

  return config
}
