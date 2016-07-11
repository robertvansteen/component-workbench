const PATH = process.cwd();
const _ = require('lodash');
const path = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = (options) => ({

  /**
   * Define the entry point for the webpack configuration.
   *
   * @type {mixed}
   */
  entry: options.entry,

  /**
   * Define the output options.
   *
   * @type {Object}
   */
  output: options.output,

  /**
   * Define the devtool (source map) configuration.
   *
   * @type {String}
   */
  devtool: 'cheap-source-map',

  /**
   * Define the target in which the compilation will run.
   *
   * @type {String}
   */
  target: options.target || 'web',

  /**
   * Define how modules should be resolved.
   *
   * @type {Object}
   */
  resolve: _.defaults({}, options.resolve, {
    root: path.join(PATH, 'src/app'),
    extensions: ['', '.json', '.js', '.jsx', '.css'],
    fallback: path.join(PATH, 'node_modules'),
    alias: {
      config: path.join(PATH, 'src/config'),
      bootstrap: path.join(PATH, 'src/bootstrap'),
    },
  }),

  /**
   * Plugin configuration.
   *
   * @type {Array}
   */
  plugins: options.plugins.concat([
    new DotenvPlugin({ sample: path.join(PATH, '.env.example') }),
  ]),

  /**
   * Configuration of the webpack modules.
   *
   * @type {Object}
   */
  module: options.module || {},

  /**
   * Define node configuration.
   *
   * @type {Object}
   */
  node: options.node || {},

  /**
   * Define which modules are external.
   *
   * @type {Object}
   */
  externals: options.externals || {},

});
