const webpack = require('webpack');
const validate = require('webpack-validator');
const CleanPlugin = require('clean-webpack-plugin');

const PATHS = {
    dist: __dirname + "/dist",
}

module.exports = validate({
    devtool: 'eval-source-map',
    context: __dirname + "/src",
    entry: [ "./app.js", "./index.html"],
    output: {
        filename: "app.js",
        path: PATHS.dist
    },
    plugins: [
        new CleanPlugin(PATHS.dist)
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"],
        fallback: __dirname + "/node_modules"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },

            {
                test: /\.js$/,
                include: /src/,
                loaders:["react-hot", "babel-loader"]
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: "style!css"
            },
            {
                test: /\.svg$/,
                loader: "file?mimetype=image/svg+xml"
            },

        ],
    }
});

