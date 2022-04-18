const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const srcDir = 'src';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, srcDir)],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, srcDir)],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, srcDir),
    },
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.ts', '.js'],
      exclude: ['node_modules', 'tokens,js'],
    }),
  ],
  target: 'web',
};
