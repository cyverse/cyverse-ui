const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const schema = require('webpack-validator').schema;

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const ROOT_PATH = __dirname;
const PATHS = {
    styleGuide: ROOT_PATH + "/style-guide",
    docsContext: ROOT_PATH + "/docs",
    distTarget: ROOT_PATH + "/dist",
    ghPages: ROOT_PATH + "/gh-pages"

}

const DEV_URL = 'http://localhost:8080';

var common = {
    context: PATHS.docsContext,
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },

    output: {
        filename: "app.js",
        path: PATHS.styleGuide
    },

    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders:["react-hot", "babel-loader"]
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: "style!css"
            },
            {
                test: /\.useable\.css$/,
                loader: "style/useable!css"
            },
            {
                test: /\.svg$/,
                loader: "file?mimetype=image/svg+xml"
            },

        ],
    }
};

var serve = {
    plugins: [
        new CleanPlugin([PATHS.styleGuide])
    ]
}

var config;

switch(TARGET) {
    case 'build':
    case 'buildDocs':
    case 'build:docs':
        config = merge(common, {
            devtool: 'eval-source-map',
        });
        break;
    case 'dev':
    case 'serve':
        config = merge(common, serve, {});
        break;
    case 'serve:open':
        config = merge(common, serve, {
            plugins: [
                new OpenBrowserPlugin({ url: DEV_URL })
            ]
        });
    default:
        // Borrows from survivejs Examples - thank you @bebraw
        config = merge(common, {
            output: {
                filename: "app.js",
                path: PATHS.ghPages
            },
            plugins: [
                new CleanPlugin([PATHS.ghPages], {
                    verbose: false
                }),
                new webpack.DefinePlugin({
                    // This affects the react lib size
                    'process.env.NODE_ENV': '"production"'
                }),
            ],
        });
        break;
}

module.exports = validate(config, schema, {
  quiet: true
});
