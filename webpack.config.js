//including a built-in node module 'path'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '/src/js/index.js',
    //index.js will be our main file where we will import all js files

    experiments: {
        topLevelAwait: true
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        //path.resolve is a method available to us from the node modules with which webpack will access the path to the dir and dist/js is where our bundle.js will be created
        
        filename: 'js/bundle.js'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        //specify the folder from where webpack should serve our files
    },

    //the module is for babel loader
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-syntax-top-level-await'],
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './dist/index.html'
    })]
};