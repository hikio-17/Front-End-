const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/app.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   module: {
      rules: [
         /** Style Loader and CSS Loader */
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
               },
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         filename: 'index.html',
      }),
   ],
};