const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            /** Style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
        ]
    },
    /** PLugins */
    plugins: [
        /** HTML Webpack plugin */
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
        }),
    ],
};