const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const commonResolveBlock = {
    alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
    },
    mainFields: ["module", "main"],
    extensions: [".mjs", ".ts", ".tsx", ".js", ".css", ".scss"],
};

const devWebpackConfig = {
    mode: 'production', // Set to 'production' for production builds
    entry: "./app/index.tsx",
    output: {
        filename: 'my-library.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'shin',
        libraryTarget: 'umd',
        libraryExport: 'default', // Ensure the default export is shin
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(mjs|js|jsx|ts|tsx)$/,
                include: /node_modules\/((aws-amplify|@aws-amplify|@smithy|@aws-sdk)\/).*/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: [
                    [
                        "@babel/preset-env", {
                        include: [
                        "@babel/plugin-transform-optional-chaining",
                        "@babel/plugin-transform-nullish-coalescing-operator"],
                        }
                    ]
                    ]
                }
                },
                type: "javascript/auto",
            },
            {
                test: /\.tsx$/, // Rule for TypeScript files
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Add rule to handle CSS files
                use: ["style-loader", 'css-loader'], // Use style-loader and css-loader
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // Directory to serve files from
        // host: "localhost",
        // disableHostCheck: true,
        port: 8080,
        hot: true,
        devMiddleware: {
            writeToDisk: true, // Optional: Writes files to disk if needed during development
        },
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: {
                        reserved: ['MyLibrary', 'global'], // Ensure these names are preserved
                    },
                    output: {
                        beautify: false, // Minimize the output
                    },
                    compress: true,
                },
            }),
        ],
    },

    resolve: commonResolveBlock,

    plugins: [
        new HtmlWebpackPlugin({
          template: './app/index.html', // Specify your HTML template file
        }),
    ],
};

module.exports = devWebpackConfig;