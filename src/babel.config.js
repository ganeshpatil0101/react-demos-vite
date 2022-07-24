const presets =
  process.env['NODE_ENV'] !== 'production'
    ? 
    // [
    //     ['@babel/preset-env'],
    //     [
    //       '@babel/preset-react',
    //       {
    //         runtime: 'automatic',
    //       },
    //     ],
    //   ]
      ['@babel/preset-env', '@babel/preset-react']
    : null

const plugins = [['macros']]
if (process.env['NODE_ENV'] !== 'production') {
  plugins.push(['babel-plugin-transform-vite-meta-env'])
  plugins.push(['@babel/plugin-syntax-jsx'])
}

module.exports = { presets, plugins }