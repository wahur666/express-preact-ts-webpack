const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        "sw": "./src/client/sw.ts"
    },
    devServer: {
        contentBase: "./",
        publicPath: "/dist",
        hot: true
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'out/dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(__dirname, "tsconfig.sw.json")
                }
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new WebpackBar(),
    ]
}
