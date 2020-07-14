const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(css|less|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'resolve-url-loader',
              options: {
                removeCR: true,
                sourceMap: true,
              },
            }],
        },
      ],
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
      hints: false,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
      path: `${__dirname}/public`,
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: './public',
      historyApiFallback: true,
      hot: true,
      port: 3000,
    },
  };
};
