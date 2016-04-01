/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function (config, env) {
  config.removeLoader('jpg');

  config.loader('jpg', {
    test: /\.jpg$/,
    loader: 'url-loader?limit=10000',
  });

  config.removeLoader('css');
  var cssLoader = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss';

  if (env === 'static') {
    config.removeLoader('css');
    config.loader('css', function (cfg) {
      cfg.test = /\.css$/;
      cfg.loader = ExtractTextPlugin.extract(cssLoader);
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

  return config;
};
