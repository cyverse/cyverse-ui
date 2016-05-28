module.exports = {
    context: __dirname + "/src",
    entry: { 
        javascript: "./index.js",
    },

    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },

    module: {
        loaders: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loaders:["react-hot", "babel-loader?presets[]=react,presets[]=es2015"]
            }
        ]
    }
};
