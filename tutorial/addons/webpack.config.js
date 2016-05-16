module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "2_1.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"}
        ]
    }
};