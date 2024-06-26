const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: '/js/dashboard_main.js',
    output: {
        path: __dirname +  "/public",
        filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin()],
};
