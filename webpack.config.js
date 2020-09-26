const path = require('path');
const fs = require('fs');
// export html plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
// clean output dist plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// export css plugins
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// compress css plugins
const optimizeCss = require('optimize-css-assets-webpack-plugin');
// compress js plugins
const uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style.loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: '/\.js$/',
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new uglifyjs(),
        new optimizeCss(),
        new miniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}