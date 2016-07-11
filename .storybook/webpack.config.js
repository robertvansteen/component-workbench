/* eslint no-param-reassign: 0 */
const PATH = process.cwd();
const path = require('path');

module.exports = (baseConfig) => {
  baseConfig.resolve = {
    extensions: ['', '.js', '.jsx', '.css'],
  };
  baseConfig.module.loaders.push(
    {
      test: /\.css?$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&sourceMap&localIdentName=[local]__[path][name]',
      ],
      include: path.join(PATH, 'src'),
    }
  );

  return baseConfig;
};
