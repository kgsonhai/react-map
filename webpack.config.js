const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        contentBase: './',
        host: '0.0.0.0',
        port: 3110,
        public: 'localhost:3110',
        open: true,
        historyApiFallback: {
            disableDotRule: true
        },
        watchContentBase: true
    },
    devtool: "eval-cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new  MiniCssExtractPlugin()
    ],
};
