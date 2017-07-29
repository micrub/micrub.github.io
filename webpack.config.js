
const OUT_DIR = 'public/';

const path = require('path');
const fs = require('fs');

let CopyWebpackPlugin = require('copy-webpack-plugin');
let WebpackBeforeBuildPlugin = require('before-build-webpack');

let packageJson = require('./package.json');

function cleanPackageJson(pkg) {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
}

const copyOptions = [
  {from : "resources/assets/"},
];

 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, OUT_DIR),
         filename: 'index.js',
     },
     plugins: [
       new WebpackBeforeBuildPlugin(function(compiler, callback) {
         cleanPackageJson(packageJson);
         callback(); //don't call it if you do want to stop compilation
       }),
       new CopyWebpackPlugin(copyOptions)
     ],
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /(node_modules|bower_components|resources)/,
             loader: 'babel-loader',
             options: {
               //cacheDirectory: true,
               presets : ["env"],
               plugins : [
                 require("babel-plugin-transform-runtime"),
                 require("babel-plugin-transform-async-to-generator")
               ]
             }
         }]
     }
 }
