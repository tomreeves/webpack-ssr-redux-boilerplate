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
      '@babel/plugin-proposal-class-properties',
      'babel-plugin-styled-components',
    ],
  }

  return config
}
