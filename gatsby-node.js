/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function (config, env) {
  config.preLoader('stylelint', {
    test: /\.css$/,
    loader: 'stylelint-loader',
    exclude: /node_modules/,
  });

  config.preLoader('eslint', {
    test: /\.js$/,
    loader: "eslint-loader",
    exclude: /node_modules/,
  });

  config.removeLoader('jpg');
  config.removeLoader('png');

  config.loader('jpg|png', {
    test: /\.(png|jpg)$/,
    loader: 'url?limit=8192',
  });

  config.removeLoader('css');
  var cssLoader = 'css?modules!postcss';

  if (env === 'static') {
    config.removeLoader('css');
    config.loader('css', function (cfg) {
      cfg.test = /\.css$/;
      cfg.loader = ExtractTextPlugin.extract('style', cssLoader);
      return cfg;
    });
    config.plugin(
      'extract-css',
      ExtractTextPlugin,
      ['styles.css', { allChunks: true }]
    );
  } else {
    config.loader('css', function (cfg) {
      cfg.test = /\.css$/;
      cfg.loader = 'style!' + cssLoader;
      return cfg;
    });
  }

  config.merge({
    postcss: [
      require('postcss-import')(),
      require('postcss-nested')(),
      require('postcss-cssnext')({ browsers: 'last 2 versions' }),
      require('postcss-browser-reporter'),
      require('postcss-reporter'),
    ],
  });

  return config;
};
