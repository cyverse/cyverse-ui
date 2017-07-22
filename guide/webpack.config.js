const webpack = require('webpack');
const path = require('path');
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
        root: [__dirname + "/node_modules"],
        extensions: ["", ".js", ".jsx"],
        alias: { "cyverse-ui": path.resolve( __dirname, "../") }
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.js$/,
                include: RegExp(__dirname + "/src"),
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
            {
                test: /\.json$/,
                loader: "json-loader"
            },

        ],
    }
});

