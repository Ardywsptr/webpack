const {
    merge
} = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'img/[name][ext]',
        clean: true
    },
    // watch: true,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
});