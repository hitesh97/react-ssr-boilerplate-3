const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',

    // Tell webpack the root filr of our
    // server application
    entry: './src/index.js',

    // Tell webpack where to put the output file
    // that is genereted
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // dont bundle any libraries to our server bundle 
    // if that library exists inside node_modules folder
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
