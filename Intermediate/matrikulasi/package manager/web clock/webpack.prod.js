const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            /** Babel loader */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        ],
    },
});