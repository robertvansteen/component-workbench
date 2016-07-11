const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Test webpack configuration.
 */
const path = require('path');
const webpack = require('webpack');
const modules = [
  'src/app',
  'node_modules',
];

module.exports = require('./base')({

  /**
   * Define which type of source maps should be exported.
   *
   * @type {String}
   */
  devtool: 'cheap-module-source-map',

  /**
   * iSparta configuration.
   *
   * @type {Object}
   */
  isparta: {
    babel: {
      presets: ['es2015', 'react', 'stage-0'],
    },
  },

  /**
   * Define module settings.
   *
   * @type {Object}
   */
  module: {

    /**
     * Define which modules should not be parsed.
     *
     * @type {Array}
     */
    noParse: [
      /node_modules(\\|\/)sinon/,
      /node_modules(\\|\/)acorn/,
    ],

    /**
     * Define the preloaders.
     *
     * @type {Array}
     */
    preLoaders: [
      { test: /\.jsx?$/,
        loader: 'isparta',
        include: path.resolve('src/app/'),
        exclude: /.*?(\.spec).js/,
      },
    ],

    /**
     * Define the loaders.
     *
     * @type {Array}
     */
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]'
        ),
      },
      { test: /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
        loader: 'imports?define=>false,require=>false',
      },
      { test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/node_modules/],
      },
      { test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'null-loader',
      },
    ],
  },

  /**
   * Define the plugins.
   *
   * @type {Array}
   */
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })],

  /**
   * Node configuration.
   *
   * @type {Object}
   */
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  /**
   * Define externals.
   * This is required to let enzyme work properly.
   *
   * @type {Object}
   */
  externals: {
    jsdom: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },

  /**
   * Configure how modules should be resolved.
   *
   * @type {Object}
   */
  resolve: {
    modulesDirectories: modules,
    modules,
    alias: { sinon: 'sinon/pkg/sinon' },
  },
});
