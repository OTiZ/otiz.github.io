'use strict';

const path = require('path');
const S3Plugin = require('webpack-s3-plugin');

const webpackConfig = require('./webpack.config');

function getBasePath(extension) {
    return path.join(require('./package').version, extension || '');
}

function getConfig(config) {
    const plugins = config.plugins;
    const extendedPlugins = plugins.concat([
        new S3Plugin({
            s3Options: {
                region: process.env.AWS_REGION
            },
            s3UploadOptions: {
                Bucket: process.env.AWS_S3_BUCKET
            },
            basePathTransform: getBasePath,
            include: /index\.html$/
        }),
        new S3Plugin({
            s3Options: {
                region: process.env.AWS_REGION
            },
            s3UploadOptions: {
                Bucket: process.env.AWS_S3_BUCKET
            },
            basePathTransform: getBasePath.bind(null, 'public'),
            directory: 'public'
        })
    ]);

    return Object.assign({}, config, {
        plugins: extendedPlugins
    });
function getConfig() {
    return {
        devtool: 'source-map',

        entry: [
            path.join(__dirname, 'app/index.js')
        ],

        output: {
            path: path.join(__dirname, './app/public'),
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'app'),
                    loaders: ['babel-loader']
                }
            ]
        },

        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    unused: true,
                    dead_code: true,
                    warnings: true,
                    screw_ie8: true
                },
                compressor: {
                    warnings: false
                },
                minimize: true,
                sourceMap: true
            })
        ]
    };
}

module.exports = getConfig(webpackConfig);
