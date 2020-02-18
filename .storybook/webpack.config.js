const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader', // creates style nodes from JS strings
      'css-loader', // translates CSS into CommonJS
      'sass-loader' // compiles Sass to CSS, using Node Sass by default
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias['~'] = path.join(__dirname, '../src/');
  config.resolve.alias['config'] = path.join(__dirname, '../config/');

  return config;
};
