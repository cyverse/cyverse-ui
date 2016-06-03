module.exports = {
    context: __dirname + "/docs",
    entry: { 
        javascript: "./app.js",
        html: "./index.html"
    },

    output: {
        filename: "app.js",
        path: __dirname + "/style-guide"
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
            }
        ]
    }
};
