const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path')

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/ui/main.js',
    code: './src/code.js',
  },

  module: {
    rules: [
        { test: /\.svelte$/, use: {loader:'svelte-loader', options:{emitCss: true, hotReload: true}}},
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
        { test: /\.(png|jpg|gif|webp|svg|zip|woff2)$/, use: { loader: 'url-loader' } },
    ],
  },

  resolve: { extensions: ['.mjs', '.tsx', '.ts', '.jsx', '.js', '.svelte'] },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'), // Compile into a folder called "dist"
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: 'Glavred',
        meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        filename: 'ui.html',
        inlineSource: '.(js)$',
        chunks: ['ui'],
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new CopyPlugin([
        { from: './src/manifest.json', to: './' }
    ]),
    new ZipPlugin({
        filename: 'figma-glavred.zip',
        include: [ 'code.js', 'manifest.json'],
        exclude: [/\.map$/]
    })
  ],
})